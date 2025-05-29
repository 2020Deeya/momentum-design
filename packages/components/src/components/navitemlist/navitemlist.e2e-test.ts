/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  isExpanded?: boolean;
  ariaLabel?: string;
};

const renderChildren = (isExpanded: boolean) =>
  `<mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
        nav-id="1" aria-label='navItem label' ${isExpanded ? 'isExpanded' : ''}>
          Messaging 
  </mdc-navitem>
  <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold"
        nav-id="2" aria-label='navItem label' ${isExpanded ? 'isExpanded' : ''} disabled >
    Meetings
  </mdc-navitem>
  <mdc-navitem role="menuitem" badge-type="dot" icon-name="placeholder-bold" nav-id="3" aria-label='navItem label' 
        ${isExpanded ? 'isExpanded' : ''}>Calling</mdc-navitem>
  `;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const html = `
      <mdc-navitemlist
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.isExpanded ? `isexpanded="${restArgs.isExpanded}"` : ''}
      >
        ${renderChildren(restArgs.isExpanded)}
      </mdc-navitemlist>
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const navItemList = componentsPage.page.locator('mdc-navitemlist');
  await navItemList.waitFor();
  return navItemList;
};

test.describe.parallel('mdc-navitemlist', () => {
  test('attributes and interactions', async ({ componentsPage }) => {
    /**
     * ADDITIONAL LOCATORS
     */
    const navItemList = await setup({ componentsPage });
    const navItems = navItemList.locator('mdc-navitem');

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('default attributes', async () => {
        await expect(navItemList).toHaveRole('menubar');
        await expect(navItems.locator('[aria-current]')).toHaveCount(0);
      });

      const attributeTests: [string, Record<string, string | ''>][] = [
        ['isExpanded', { isexpanded: 'true' }],
        ['aria-label', { 'aria-label': 'NavItemList' }],
      ];

      for (const [label, attrs] of attributeTests) {
        await test.step(`attribute ${label} should be present`, async () => {
          await componentsPage.setAttributes(navItemList, attrs);
          const [attr] = Object.keys(attrs);
          await expect(navItemList).toHaveAttribute(attr);
          await componentsPage.removeAttribute(navItemList, attr);
        });
      }
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
    /**
       * POINTER / MOUSE INTERACTIONS
       */
      await test.step('mouse: hovering over a navitem should not activate it', async () => {
        await navItems.first().hover();
        await expect(navItems.first()).not.toHaveAttribute('aria-current', 'page');
      });

      await test.step('mouse: clicking an enabled navitem should activate it', async () => {
        await navItems.first().click();
        await expect(navItems.first()).toHaveAttribute('aria-current', 'page');
      });

      await test.step('mouse: clicking a disabled navitem should not trigger any action', async () => {
        const disabledNavItem = navItems.nth(1);
        await expect(disabledNavItem).toBeDisabled();
        await disabledNavItem.click({ force: true }); // Attempt to click it
        await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
      });

      /**
       * KEYBOARD INTERACTIONS
       */
      await test.step('keyboard: ArrowDown and ArrowUp should navigate focus while skipping disabled navItems', async () => {
        const first = navItems.nth(0);
        const third = navItems.nth(2);

        // Focus the first nav item to start
        await first.focus();
        await expect(first).toBeFocused();

        // User presses ArrowDown which should move the focus to next nav item skipping disabled one
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(third).toBeFocused();

        // User presses ArrowUp which should move the focus to previous nav item skipping disabled one
        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(first).toBeFocused();
      });

      await test.step('keyboard: pressing Space or Enter on a nav item should activate it', async () => {
        const first = navItems.nth(0);
        const third = navItems.nth(2);

        // Activate third item using Enter
        await third.focus();
        await componentsPage.page.keyboard.press('Enter');
        await expect(third).toBeFocused();
        await expect(third).toHaveAttribute('aria-current', 'page');
        await expect(first).not.toHaveAttribute('aria-current', 'page');

        // Activate first item using Space
        await first.focus();
        await componentsPage.page.keyboard.press('Space');
        await expect(first).toBeFocused();
        await expect(first).toHaveAttribute('aria-current', 'page');
        await expect(third).not.toHaveAttribute('aria-current', 'page');
      });

      await test.step('keyboard: disabled nav item should remain inactive on keydown', async () => {
        const disabledNavItem = navItems.nth(1);
        await expect(disabledNavItem).toBeDisabled();
        await disabledNavItem.focus();
        await componentsPage.page.keyboard.press('Space'); // or Enter
        await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
      });
    });
  });

  /**
   * VISUAL REGRESSION & ACCESSIBILITY
   */
  test('visual-regression & accessibility', async ({ componentsPage }) => {
  /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-navitemlist');

      await test.step('mdc-navitemlist with expanded state', async () => {
        stickerSheet.setAttributes({ isexpanded: true });
        stickerSheet.setChildren(renderChildren(true));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();

        await test.step('matches screenshot of the element', async () => {
          await componentsPage.visualRegression.takeScreenshot(
            'mdc-navitemlist-expanded',
            { element: container },
          );
        });
      });

      await test.step('mdc-navitemlist with collapsed state', async () => {
        stickerSheet.setAttributes({ isexpanded: false });
        stickerSheet.setChildren(renderChildren(false));
        await stickerSheet.createMarkupWithCombination({});

        await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
        const container = stickerSheet.getWrapperContainer();

        await test.step('matches screenshot of the element', async () => {
          await componentsPage.visualRegression.takeScreenshot(
            'mdc-navitemlist-collapsed',
            { element: container },
          );
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('navitemlist-default');
    });
  });
});
