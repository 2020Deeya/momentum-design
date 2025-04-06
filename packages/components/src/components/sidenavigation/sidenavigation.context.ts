import { createContext } from '@lit/context';

import { TAG_NAME } from './sidenavigation.constants';

class SideNavigationContext {
  public variant?: string;

  public customerName?: string;

  public expanded?: boolean;

  public ariaExpanded?: string;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  // Constructor to allow setting default values
  constructor(
    defaultVariant?: string,
    defaultCustomerName?: string,
    defaultExpanded?: boolean,
    defaultAriaExpanded?: string,
  ) {
    this.variant = defaultVariant;
    this.customerName = defaultCustomerName;
    this.expanded = defaultExpanded;
    this.ariaExpanded = defaultAriaExpanded;
  }
}

export default SideNavigationContext;
