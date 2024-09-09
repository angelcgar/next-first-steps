"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: Props) {
  const pathname = usePathname();

  return (
    <Link
      key={path}
      className={`${style.link} ${pathname === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
}
