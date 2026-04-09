export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  layout: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  content?: Record<string, unknown>;
}

export interface PageConfig {
  path: string;
  name: string;
  sections: SectionBase[];
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  navigation: {
    items: NavItem[];
  };
  pages: PageConfig[];
}
