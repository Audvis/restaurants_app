import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <Link href="/">
                Home
            </Link>
            <Link href="/create/restaurant">
                Add 
            </Link>
        </nav>
    )
}

export default Nav
