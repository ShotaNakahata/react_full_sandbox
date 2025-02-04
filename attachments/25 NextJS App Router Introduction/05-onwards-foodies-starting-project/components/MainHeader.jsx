import React from 'react'
import logoImg from "@/assets/logo.png";
import Link from 'next/link';
import classes from "./mainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="food logo" />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meal</Link>
          </li>
          <li>
            <Link href="/community">Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader