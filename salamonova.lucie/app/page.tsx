import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/Home.css"
import  Latte  from "@/public/latte-ls.png"
import Kavarna from "@/public/kavarna-ls.jpg"

export default function Home() {
  return (
        <div className="App">
            <section className="section-container-Hero">
                <div className = {"Hero-Banner"}>
                    <h1 className = "Hero-Title">V Kavárně Aroma</h1>
                    <span className = "Hero-SubTitle">Místo, kde se čas zastaví a vůně kávy vás obejme</span>
                    <Link href ={"/nabidka"} className = "Hero-Button">Prohlédnout nabídku</Link>
                </div>
            </section>

            <section className="section-container-num">
                <div className={"text-block"}>
                    <h1>Oáza klidu v centru města</h1>

                    <p>
                        Už při vstupu do naší kavárny vás pohltí jedinečná atmosféra, která kombinuje nostalgii starých časů s moderním přístupem k výběrové kávě. Kavárna Aroma vznikla v roce 2010 s jednoduchou vizí: vytvořit prostor, kde lidé mohou na chvíli zapomenout na stres všedního dne.
                    </p>
                </div>

                <div className = {"Image-Visuals"}>
                    <div className = "Image-Card">
                        <Image className={"Card-Img"} src = {Kavarna} alt = "Kavarna"/>
                        <p className = {"Image-Content"}>Pohodlí domova</p>
                    </div>

                    <div className = "Image-Card">
                        <Image className = {"Card-Img"} src={Latte} alt = "Káva"/>
                        <p className = "Image-Content">Výběrová káva</p>
                    </div>
                </div>
            </section>

            <section className="section-container-sec">
                <div className={"text-block"}>
                    <h2>Co děláme jinak?</h2>
                    <p>
                        Naše káva není jen obyčejný nápoj. Spolupracujeme s malými farmáři, abychom zajistili tu nejvyšší kvalitu. Zrna si necháváme pražit v lokální pražírně, vždy po malých dávkách.
                    </p>
                </div>

                <div className = {"features-list"}>
                    <h3>Proč k nám?</h3>
                    <ul>
                        <li>100% výběrová Arabika</li>
                        <li>Domácí dezerty bez polotovarů</li>
                        <li>Rostlinná mléka zdarma</li>
                        <li>Klidná zóna bez hlasité hudby</li>
                    </ul>
                </div>

                <div className={"text-block"}>
                    <p className={"end"}>Těšíme se na vaši návštěvu každý den</p>
                    <Link href={"/kontakt"} className = {"secondary-btn"}>Rezervovat stůl</Link>
                </div>
            </section>
        </div>
  );
}
