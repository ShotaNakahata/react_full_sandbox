import React from 'react'
import logoImg from "@/assets/logo.png";
import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <Link href="/">
      <img src={logoImg.src} alt="food logo" />
      Next Level Food
      </Link>

      <nav>
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