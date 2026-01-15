'use client';

import "@/app/globals.css";
import "./Navbar.css"
import Logo from "@/public/logo-salamonova.svg";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-brand">
                    <Link href="/" className="brand-link">
                        <Image
                            className="brand-logo"
                            src={Logo}
                            alt="Logo Kavárna Aroma"
                            priority
                        />
                        <span className="brand-name">Kavárna Aroma</span>
                    </Link>
                </div>

                <div className="navbar-menu">
                    <ul>
                        <li><Link href="/nabidka" className="nav-link">Nabídka</Link></li>
                        <li><Link href="/galerie" className="nav-link">Galerie</Link></li>
                        <li><Link href="/o-kave" className="nav-link">O Kávě</Link></li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <Link href="/kontakt" className="btn-contact">
                        Rezervovat
                    </Link>
                </div>

            </div>
        </nav>
    );
}