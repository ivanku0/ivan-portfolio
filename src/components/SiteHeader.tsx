import Link from "next/link";
import { NavLink } from "./NavLink";

type NavItem = {
  label: string;
  href: string;
  openInNewTab?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Resume", href: "/public/Ivan_Kuo_Resume.pdf", openInNewTab: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/placeholder",
    openInNewTab: true,
  },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[rgb(var(--color-page-bg-rgb)_/_0.58)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgb(var(--color-page-bg-rgb)_/_0.34)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:py-5">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-secondary"
        >
          Ivan Kuo
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} openInNewTab={item.openInNewTab}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
