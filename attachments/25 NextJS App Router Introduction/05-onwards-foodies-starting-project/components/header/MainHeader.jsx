import React from 'react'
import logoImg from "@/assets/logo.png";
import Link from 'next/link';
import classes from "./mainHeader.module.css";
import Image from 'next/image';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="food logo" priority />
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