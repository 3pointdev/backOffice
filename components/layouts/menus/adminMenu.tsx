"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminMenu() {
  const pathname = usePathname();
  const menuList = [
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "PRODUCTS", path: "/products" },
    { name: "SALES", path: "/sales" },
    { name: "RETURNS", path: "/returns" },
    { name: "CONTACTS", path: "/contacts" },
    { name: "USERS", path: "/users" },
  ];

  return (
    <ul className="h-full flex items-center gap-6 font-semibold">
      {menuList.map((menu) => {
        const isActive = pathname === menu.path;

        return (
          <li
            key={`menu_${menu.name}`}
            className="h-full hover:opacity-70 transition-opacity duration-100 ease-in-out relative will-change-auto delay-0"
          >
            <Link
              href={menu.path}
              className="h-full flex items-center justify-center"
            >
              <p
                className={`transition-all duration-200 ease-in-out relative will-change-auto ${
                  isActive ? "border-b-2 border-primary text-primary" : ""
                }`}
              >
                {menu.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
