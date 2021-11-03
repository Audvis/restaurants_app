import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <Link href="/">
                Inicio
            </Link>
            <Link href="/create/restaurant">
                Add Restaurant
            </Link>
        </nav>
    )
}

export default Nav
