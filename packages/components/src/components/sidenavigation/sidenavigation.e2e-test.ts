/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { SideNavigationVariant } from './sidenavigation.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: SideNavigationVariant;
  customerName?: string;
  isExpanded?: boolean;
  ariaLabel?: string;
};

const renderChildren = (isExpanded: boolean) =>
  ` <!-- Upper Nav (scrollable section) -->
    <mdc-navitemlist role="menubar" slot="scrollable-section" aria-label='navItemList label' ?isExpanded=${isExpanded}>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="1" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold"
      nav-id="2" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="dot" icon-name="placeholder-bold" nav-id="3" aria-label='navItem label' 
      disabled ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 1</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold"
      nav-id="4" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="5" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" aria-label='navItem label' 
      ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
      <mdc-text>Section 2</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="7" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" nav-id="8"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="dot" icon-name="placeholder-bold" nav-id="9" 
      aria-label='navItem label' ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 3</mdc-text>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="10" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="11" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="dot" icon-name="placeholder-bold" nav-id="12" 
      aria-label='navItem label' ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" 
      nav-id="13" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="14" aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem" icon-name="placeholder-bold" nav-id="15" 
      aria-label='navItem label'>Calling</mdc-navitem>
    </mdc-navitemlist>

    <!-- Lower Nav (Fixed section) -->
    <mdc-navitemlist role="menubar" slot="fixed-section" aria-label='navItemList label'>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="1" aria-label='navItem label' ?isExpanded=${isExpanded}>
          Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem" badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" 
      nav-id="2" aria-label='navItem label' ?isExpanded=${isExpanded}>
          Meetings
      </mdc-navitem>
    </mdc-navitemlist>

    <!-- Brand Logo (Fixed section) -->
    <mdc-icon 
      slot="brand-logo"
      aria-label="This is the brand logo icon" 
      name="apple-bold">
    </mdc-icon>
  `;

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const html = `
      <mdc-sidenavigation
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}>
        ${restArgs.customerName ? `customer-name="${restArgs.customerName}"` : ''}
        ${restArgs.isExpanded ? `isexpanded="${restArgs.isExpanded}"` : ''}
      >
        ${renderChildren(restArgs.isExpanded)}
      </mdc-sidenavigation>
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const sideNavigation = componentsPage.page.locator('mdc-sidenavigation');
  await sideNavigation.waitFor();
  return sideNavigation;
};

test.use({ viewport: { width: 800, height: 1200 } });

test('mdc-sidenavigation', async ({ componentsPage }) => {
  const sideNavigation = await setup({ componentsPage });
  const toggleButton = sideNavigation.locator('mdc-button');

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const sideNavigation = await setup({ componentsPage });

    await test.step('default attributes', async () => {
      await expect(sideNavigation).toHaveRole('navigation');
      await expect(sideNavigation).toHaveAttribute('variant', 'flexible');
      await expect(sideNavigation).toHaveAttribute('customer-name', '');
      await expect(sideNavigation).toHaveAttribute('isexpanded');
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'true');
    });

    const attributeTests: [string, Record<string, string | ''>][] = [
      ['variant', { variant: 'fixed-expanded' }],
      ['customer-name', { 'customer-name': '%Customer Name%' }],
      ['aria-label', { 'aria-label': 'Primary side navigation' }],
    ];

    for (const [label, attrs] of attributeTests) {
      await test.step(`attribute ${label} should be present`, async () => {
        await componentsPage.setAttributes(sideNavigation, attrs);
        const [attr] = Object.keys(attrs);
        await expect(sideNavigation).toHaveAttribute(attr);
        await componentsPage.removeAttribute(sideNavigation, attr);
      });
    }
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation');
    stickerSheet.setAttributes({ variant: 'flexible', 'customer-name': '%Customer Name%' });

    await test.step('mdc-sidenavigation with flexible variant and is expanded', async () => {
      // default variant (Flexible and expanded)
      stickerSheet.setChildren(renderChildren(true));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot(
          'mdc-sidenavigation-flexible-expanded',
          { element: container },
        );
      });
    });

    await test.step('mdc-sidenavigation with flexible variant and is collapsed', async () => {
      // Flexible and not expanded
      stickerSheet.setChildren(renderChildren(false));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await toggleButton.click();
        await componentsPage.visualRegression.takeScreenshot(
          'mdc-sidenavigation-flexible-collapsed',
          { element: container },
        );
      });
    });

    await test.step('mdc-sidenavigation with fixed-expanded variant', async () => {
      // fixed-expanded
      stickerSheet.setAttributes({ variant: 'fixed-expanded', 'customer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(true));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
      const container = stickerSheet.getWrapperContainer();
      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot(
          'mdc-sidenavigation-fixed-expanded',
          { element: container },
        );
      });
    });

    await test.step('mdc-sidenavigation with fixed-collapsed variant', async () => {
      // fixed-collapsed
      stickerSheet.setAttributes({ variant: 'fixed-collapsed', 'customer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(false));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet({ wrapperStyle: 'height: 90%;' });
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot(
          'mdc-sidenavigation-fixed-collapsed',
          { element: container },
        );
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('sidenavigation-default');
  });

  /**
   * INTERACTION
   */
  await test.step('interaction', async () => {
    const sideNavigation = await setup({ componentsPage });
    const toggleButton = sideNavigation.locator('mdc-button');

    const scrollableNavlist = sideNavigation.locator('[slot="scrollable-section"]');
    const fixedNavlist = sideNavigation.locator('[slot="fixed-section"]');
    const navItems = scrollableNavlist.locator('mdc-navitem');
    const scrollableFirstNavItem = scrollableNavlist.locator('mdc-navitem').nth(0);
    const scrollableLastNavItem = scrollableNavlist.locator('mdc-navitem').nth(-1);
    const fixedFirstNavItem = fixedNavlist.locator('mdc-navitem').nth(0);
    // const fixedLastNavItem = fixedNavlist.locator('mdc-navitem').nth(-1);

    /**
     * POINTER / MOUSE INTERACTIONS
     */
    await test.step('mouse: scrollable section with many items', async () => {
      await scrollableNavlist.scrollIntoViewIfNeeded(); // Scroll to the last nav item
      await componentsPage.page.mouse.wheel(0, 100); // simulate scroll
      await expect(scrollableLastNavItem).toBeVisible();
      await expect(fixedNavlist).toBeVisible();
    });

    await test.step('mouse: toggle expand/collapse state', async () => {
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'true');
      await toggleButton.click();
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'false');
      await toggleButton.click();
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('mouse: clicking nav item should retain focus and activate it', async () => {
      await scrollableFirstNavItem.click();
      await expect(scrollableFirstNavItem).toHaveAttribute('aria-current', 'page');
    });

    await test.step('mouse: clicking a disabled nav item does not trigger interaction', async () => {
      const disabledNavItem = navItems.nth(2); // Assuming it's the "Calling" disabled item
      await expect(disabledNavItem).toHaveAttribute('disabled', '');
      const isClickable = await disabledNavItem.isEnabled();
      expect(isClickable).toBe(false);
      await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard: scrollable section with many items', async () => {
      await scrollableNavlist.scrollIntoViewIfNeeded();
      await componentsPage.page.keyboard.press('PageDown');
      await expect(scrollableLastNavItem).toBeVisible();
      await expect(fixedNavlist).toBeVisible();
      await componentsPage.page.keyboard.press('PageUp');
    });

    await test.step('keyboard: Tab through toggle button and navItems', async () => {
      await componentsPage.page.keyboard.press('Tab'); // Focus first nav item of the fixed section
      await expect(fixedFirstNavItem).toBeFocused();
      await componentsPage.page.keyboard.press('Tab'); // Focus toggle button
      await expect(toggleButton).toBeFocused();
    });

    await test.step('keyboard: toggle expand/collapse state', async () => {
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'true');
      // Collapse the sideNavigation with Enter
      await componentsPage.page.keyboard.press('Enter');
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'false');
      // Expand the sideNavigation with Space
      await componentsPage.page.keyboard.press('Space');
      await expect(sideNavigation).toHaveAttribute('aria-expanded', 'true');
    });

    await test.step('keyboard: Shift+Tab through toggle button and navItems', async () => {
      await componentsPage.page.keyboard.press('Shift+Tab'); // Focus first nav item of the fixed section
      await expect(fixedFirstNavItem).toBeFocused();
      await componentsPage.page.keyboard.press('Shift+Tab'); // Focus first nav item of the scrollable section
      await expect(scrollableFirstNavItem).toBeFocused();
    });

    await test.step('keyboard: ArrowDown should move focus to next nav item skipping disabled one', async () => {
      const first = navItems.nth(0);
      const fourth = navItems.nth(3);
      await first.focus();
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(fourth).toBeFocused();
    });

    await test.step('keyboard: ArrowUp from first should wrap to last', async () => {
      const first = navItems.first();
      const last = navItems.last();
      await first.focus();
      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(last).toBeFocused();
    });

    await test.step('keyboard: Enter or Space should activate nav item', async () => {
      const first = navItems.first();
      const second = navItems.last();

      // Activate second item with Enter
      await second.focus();
      await componentsPage.page.keyboard.press('Enter');
      await expect(second).toBeFocused();
      await expect(second).toHaveAttribute('aria-current', 'page');
      await expect(second).not.toHaveAttribute('aria-current', 'page');

      // Activate first item with Space
      await first.focus();
      await componentsPage.page.keyboard.press('Space');
      await expect(first).toBeFocused();
      await expect(first).toHaveAttribute('aria-current', 'page');
      await expect(second).not.toHaveAttribute('aria-current', 'page');
    });

    await test.step('keyboard: clicking a disabled nav item does not trigger interaction', async () => {
      const disabledNavItem = navItems.nth(2); // Assuming it's the "Calling" disabled item
      await expect(disabledNavItem).toHaveAttribute('disabled', '');
      await disabledNavItem.focus();
      await componentsPage.page.keyboard.press('Space'); // or Enter
      // No expectation of navItem activation
      await expect(disabledNavItem).not.toHaveAttribute('aria-current', 'page');
    });
  });

  /**
   * USER STORIES
   */
});
