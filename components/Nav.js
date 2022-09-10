import React from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
const nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
