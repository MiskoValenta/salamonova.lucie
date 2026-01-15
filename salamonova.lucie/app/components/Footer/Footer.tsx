import Link from "next/link";
import "@/app/globals.css";
import "@/app/components/Footer/Footer.css"

export const Footer = () => {


    return (
        <footer className = "footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h3>Kavárna Aroma</h3>
                    <p>Ulice Kávová 123<br />746 01 Opava</p>
                    <p className="contact-link">+420 123 456 789</p>
                    <p className="contact-link">info@kavarnaaroma.cz</p>
                </div>

                <div className="footer-col">
                    <h3>Otevírací doba</h3>
                    <ul className="opening-hours">
                        <li><span>Po - Pá:</span> <span>7:30 - 20:00</span></li>
                        <li><span>Sobota:</span> <span>9:00 - 21:00</span></li>
                        <li><span>Neděle:</span> <span>10:00 - 18:00</span></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Mapa stránek</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Domů</Link></li>
                        <li><Link href="/nabidka">Nabídka</Link></li>
                        <li><Link href="/galerie">Galerie</Link></li>
                        <li><Link href="/kontakt">Kontakt</Link></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Kavárna Aroma - Školní Projekt | <strong>Vypracovala: Lucie Salamonová</strong></p>
            </div>
        </footer>
    );
}