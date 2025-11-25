"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {links.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={
              pathname === item.href
                ? "text-black font-bold underline"
                : ""
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
