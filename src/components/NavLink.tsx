import Link from "next/link";
import type { ReactNode } from "react";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  /** Open in a new tab (external URLs, PDFs, etc.) */
  openInNewTab?: boolean;
  className?: string;
};

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith("mailto:");
}

export function NavLink({ href, children, openInNewTab, className = "" }: NavLinkProps) {
  const external = openInNewTab || isExternalHref(href);
  const baseClass =
    "text-sm text-secondary transition-colors duration-200 hover:text-foreground";

  if (external) {
    return (
      <a
        href={href}
        className={`${baseClass} ${className}`.trim()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`.trim()}>
      {children}
    </Link>
  );
}
