/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { SideNavigationVariant } from './sidenavigation.types';
import { DEFAULTS } from './sidenavigation.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  variant?: SideNavigationVariant;
  customerName?: string;
  isExpanded?: boolean;
  ariaLabel?: string;
};

const renderChildren = (isExpanded: boolean = true) =>
  ` <!-- Upper Nav (scrollable section) -->
    <mdc-navitemlist role="menubar" slot="scrollable-section" aria-label='navItemList label' ?isExpanded=${isExpanded}>
      <mdc-navitem role="menuitem" badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="1" 
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="dot" icon-name="placeholder-bold" nav-id="3" aria-label='navItem label' 
      disabled ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 1</mdc-text>
      <mdc-navitem role="menuitem"badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="4"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="5"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"icon-name="placeholder-bold" aria-label='navItem label' 
      ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient" nav-id="6"></mdc-divider>
      <mdc-text>Section 2</mdc-text>
      <mdc-navitem role="menuitem"badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="7"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem"icon-name="placeholder-bold" nav-id="8"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="dot" icon-name="placeholder-bold" nav-id="9" 
      aria-label='navItem label' ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-divider variant="gradient"></mdc-divider>
      <mdc-text>Section 3</mdc-text>
      <mdc-navitem role="menuitem"badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="10"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="11"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="dot" icon-name="placeholder-bold" nav-id="12" 
      aria-label='navItem label' ?isExpanded=${isExpanded}>Calling</mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="2" max-counter="66" icon-name="placeholder-bold" nav-id="13"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Messaging
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="14"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
        Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"icon-name="placeholder-bold" nav-id="15" aria-label='navItem label'>Calling</mdc-navitem>
      <mdc-divider variant="gradient" ?isExpanded=${isExpanded}></mdc-divider>
    </mdc-navitemlist>

    <!-- Lower Nav (Fixed section) -->
    <mdc-navitemlist role="menubar" slot="fixed-section" aria-label='navItemList label'>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="1"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
          Meetings
      </mdc-navitem>
      <mdc-navitem role="menuitem"badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="2"
      aria-label='navItem label' ?isExpanded=${isExpanded}>
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
  <div style="height: 60rem; margin: 1rem">
      <mdc-sidenavigation
        ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : DEFAULTS.VARIANT}>
        ${restArgs.customerName ? `icon-name="${restArgs.customerName}"` : ''}
        ${restArgs.isExpanded ? `isexpanded="${restArgs.isExpanded}"` : ''}
      >
        ${renderChildren(true)}
      </mdc-sidenavigation>
  </div>
  `;

  await componentsPage.mount({ html, clearDocument: true });

  const sideNavigation = componentsPage.page.locator('mdc-sidenavigation');
  await sideNavigation.waitFor();
  return sideNavigation;
};

test.use({ viewport: { width: 800, height: 1200 } });

test('mdc-sidenavigation', async ({ componentsPage }) => {
  /**
   * ADDITIONAL LOCATORS
   *
   * navItemLists - The role=menubar element within the mdc-sidenavigation component.
   * navItems - The role=menuitem element within the mdc-sidenavigation component.
   * toggleButton - The mdc-button element within the mdc-sidenavigation component.
   */
  // const sideNavigation = await setup({ componentsPage });
  // const navItemLists = sideNavigation.getByRole('menubar');
  // const navItems = sideNavigation.getByRole('menuitem');
  // const toggleButton = sideNavigation.locator('mdc-button');

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
    await test.step('mdc-sidenavigation with flexible variant and is expanded', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation');
      // default variant (Flexible and expanded)
      stickerSheet.setAttributes({ variant: 'flexible', 'consumer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(true)); // not needed
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet();
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-flexible-expanded', { element: container });
      });
    });

    await test.step('mdc-sidenavigation with flexible variant and is collapsed', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation');

      // Flexible and not expanded
      stickerSheet.setAttributes({ variant: 'flexible', 'consumer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(false));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet();
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-flexible-collapsed', { element: container });
      });
    });

    await test.step('mdc-sidenavigation with fixed-expanded variant', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation');

      // fixed-expanded
      stickerSheet.setAttributes({ variant: 'fixed-expanded', 'consumer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(true));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet();
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-fixed-expanded', { element: container });
      });
    });

    await test.step('mdc-sidenavigation with fixed-collapsed variant', async () => {
      const stickerSheet = new StickerSheet(componentsPage, 'mdc-sidenavigation-fixed-expanded');

      // fixed-collapsed
      stickerSheet.setAttributes({ variant: 'fixed-collapsed', 'consumer-name': '%Customer Name%' });
      stickerSheet.setChildren(renderChildren(false));
      await stickerSheet.createMarkupWithCombination({});

      await stickerSheet.mountStickerSheet();
      const container = stickerSheet.getWrapperContainer();

      await test.step('matches screenshot of the element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-sidenavigation-fixed-collapsed', { element: container });
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('sidenavigation-default');
  });
});
