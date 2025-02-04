import React from 'react'
import logoImg from "@/assets/logo.png";
import Link from 'next/link';
import classes from "./mainHeader.module.css";
import Image from 'next/image';
import NavLink from './NavLink';

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
            <NavLink href="/meals">Browse Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader