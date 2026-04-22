import { Page, expect } from '@playwright/test';

import type { ScreenShotOptions } from '../types';
import CONSTANTS from '../constants';

interface VisualRegression {
  page: Page;
}

/**
 * Contains common `visual-regression` utils, which are useful when doing visual-regression tests
 */
class VisualRegression {
  private waitForPendingIcons: () => Promise<void>;

  constructor(page: Page, waitForPendingIcons: () => Promise<void>) {
    this.page = page;
    this.waitForPendingIcons = waitForPendingIcons;
  }

  /**
   * Sets the `dir` attribute on the document's root element to control text direction.
   * @param direction - Either 'rtl' (right-to-left) or 'ltr' (left-to-right).
   */
  private async setDocumentDirection(direction: 'rtl' | 'ltr'): Promise<void> {
    await this.page.evaluate(async dir => {
      document.documentElement.setAttribute('dir', dir);

      // wait for the next 2 frames to ensure the direction change is applied
      // this is necessary to make sure that the browser has time to re-render the page
      // and apply the new direction before taking a screenshot
      // otherwise, the screenshot might not reflect the new direction
      // and the visual regression tests might fail
      await new Promise<void>(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });
    }, direction);
  }

  /**
   * Enables or disables high contrast mode by emulating the `forcedColors` setting in the browser.
   * Includes a short delay to ensure the browser has time to apply the forced colors changes.
   * @param enable - Boolean flag to enable or disable high contrast mode.
   */
  private async toggleHighContrastMode(enable: boolean): Promise<void> {
    await this.page.emulateMedia({ forcedColors: enable ? 'active' : 'none' });

    // Wait for the browser to apply forced colors changes
    // High contrast mode can trigger style recalculations that need time to settle
    await this.page.evaluate(async () => {
      await new Promise<void>(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });
    });
  }

  /**
   * Takes a screenshot of the whole page, with the passed in options
   * If options.element is provided, it will take a screenshot of that element instead of the whole page.
   *
   * @param name - name of the screenshot, file extension will be appended automatically!
   * @param options - description
   * @param options - An object that contains the
   * - element to take screenshot from
   * - assertion after switching direction
   * - type of screenshot - stickersheet or userflow
   */
  async takeScreenshot(name: string, options?: ScreenShotOptions): Promise<void> {
    const elementToTakeScreenShotFrom = options?.element || this.page;
    const isSnapshotRun = process.env.E2E_SKIP_SNAPSHOT !== 'true';
    const screenshotSource = options?.source ?? 'stickersheet';
    const browserName = this.page.context()?.browser()?.browserType().name() ?? 'unknown';

    // Wait for all icon requests to complete before taking any screenshots
    // This prevents visual regression flakiness caused by icons loading asynchronously
    if (isSnapshotRun) {
      await this.waitForPendingIcons();
    }

    if (isSnapshotRun && screenshotSource === 'userflow') {
      await this.setDocumentDirection('ltr');
      expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
        name: `${name}-userflow-${options?.fileNameSuffix}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
      });
    } else if (isSnapshotRun && screenshotSource === 'stickersheet') {

      // High contrast screenshot only for LTR and supported browsers
      if (['chromium', 'msedge'].includes(browserName)) {
        await this.toggleHighContrastMode(true); // Enable high contrast
        // Wait for any icon re-requests triggered by the forced-colors mode change
        await this.waitForPendingIcons();
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-high-contrast.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
        await this.toggleHighContrastMode(false); // Reset high contrast
      }

      // Normal contrast screenshots for both RTL and LTR
      /* eslint-disable no-await-in-loop */
      /* eslint-disable no-restricted-syntax */
      for (const direction of ['ltr', 'rtl'] as const) {
        await this.setDocumentDirection(direction);
        await options?.assertionAfterSwitchingDirection?.(this.page);
        // Wait for any icon re-requests triggered by direction change or component remount
        await this.waitForPendingIcons();
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
      }

      // reset to LTR after taking screenshots
      await this.setDocumentDirection('ltr');
    }
  }
}

export default VisualRegression;
