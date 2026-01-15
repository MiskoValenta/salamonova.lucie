import "@/app/globals.css";
import "@/app/nabidka/nabidka.css"
import Image from "next/image";
import Breakfast from "@/public/Breakfast.jpg";
import Cake from "@/public/Cake.jpg";
import Link from "next/link";


const menuItems = [
    { id: 1, name: "Espresso", price: "45 Kč", desc: "Silné, černé, 30ml čisté energie.", img: "/Espresso.jpg" },
    { id: 2, name: "Cappuccino", price: "65 Kč", desc: "Espresso s našlehanou mléčnou pěnou.", img: "/Cappuccino.jpg" },
    { id: 3, name: "Flat White", price: "75 Kč", desc: "Dvojité espresso s mikropěnou.", img: "/Flat_White.jpg" },
    { id: 4, name: "Latte Macchiato", price: "70 Kč", desc: "Velká sklenice mléka s kávou.", img: "/Latte_Macchiato.jpg" },
    { id: 5, name: "Filtr dne", price: "60 Kč", desc: "Batch brew z aktuální nabídky zrn.", img: "/Filtr_Dne.jpg" },
    { id: 6, name: "Domácí Limonáda", price: "55 Kč", desc: "Dle denní nabídky (malina, zázvor...)", img: "/Domaci_Limonada.jpg" },
]

export default function Nabidka(){
    return (
        <div className = "Background-nabidka">
            <div className={"page-container"}>
                <section className="intro-text">
                    <h1>Naše stálá nabídka</h1>
                    <p>
                        Připravujeme pro vás kávu s maximální péčí a respektem k surovině. Každý šálek,
                        který opustí bar, prošel přísnou kontrolou našeho hlavního baristy. Věříme, že
                        kvalita vody, hrubost mletí a teplota extrakce jsou klíčové faktory, které
                        odlišují průměrnou kávu od té výjimečné. Proto používáme filtrační systém vody
                        BWT a špičkové mlýnky Mahlkönig, které zaručují konzistentní výsledek. Ať už
                        jste milovníkem klasického italského espressa nebo preferujete ovocnější tóny
                        moderních afrických káv na filtru, v naší nabídce si jistě vyberete to své.
                    </p>
                </section>

                <section className="menu-grid">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-card">
                            <div className="card-image">
                                <img src={item.img} alt={item.name} />
                            </div>

                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p className="card-desc">{item.desc}</p>
                                <button className="card-btn"><Link className={"btn-link"} href={"/kontakt"}>Objednat</Link></button>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="content-block">
                    <h2 className = "content-block-title">Sladká tečka na závěr</h2>
                    <p className={"content-block-subtitle"}>
                        K dobré kávě neodmyslitelně patří i něco sladkého. Všechny naše dezerty pečeme
                        přímo v naší kuchyni, nepoužíváme žádné polotovary ani umělá dochucovadla.
                        Zakládáme si na sezónnosti, takže v létě u nás najdete lehké ovocné dorty s
                        čerstvými jahodami či borůvkami, zatímco v zimě se můžete těšit na hutný
                        čokoládový brownies, mrkvový dort s ořechy nebo tradiční skořicové šneky,
                        kteří provoní celou kavárnu. Nabídka se mění každý den, takže se vyplatí
                        nás navštěvovat pravidelně a ochutnávat novinky.
                    </p>

                    <div className="single-image">
                        <Image src={Cake} alt="Náš domácí dort" />
                    </div>
                </section>

                <section className="content-block">
                    <h2 className={"content-block-title"}>Snídaně a brunche</h2>
                    <p className={"content-block-subtitle"}>
                        O víkendech pro vás připravujeme vyhlášené brunche, které podáváme až do
                        čtrnácté hodiny. Víme, že o víkendu si chcete přispat, a proto vás nebudeme
                        nutit vstávat brzy. Naše vejce Benedikt na domácí briošce s holandskou omáčkou
                        se stala legendou, stejně jako naše lívance s javorovým sirupem a opečenou
                        slaninou. Všechny suroviny odebíráme od lokálních farmářů – vajíčka z volného
                        chovu, čerstvé mléko z farmy kousek za městem a pečivo od místního pekaře,
                        pokud si ho zrovna nepečeme sami.
                    </p>

                    <div className="list-container">
                        <h3>Co nabízíme k snídani:</h3>
                        <ul>
                            <li>Míchaná vajíčka na cibulce s kváskovým chlebem.</li>
                            <li>Ovesná kaše s karamelizovanými jablky a skořicí.</li>
                            <li>Avokádový toast se zastřeným vejcem a chilli vločkami.</li>
                            <li>Domácí granola s řeckým jogurtem a ovocem.</li>
                        </ul>
                    </div>

                    <div className="single-image">
                        <Image src={Breakfast} alt="Snídaně v kavárně" />
                    </div>
                </section>
            </div>
        </div>
    );
}