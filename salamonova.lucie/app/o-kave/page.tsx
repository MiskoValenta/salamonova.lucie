import "@/app/globals.css";
import "@/app/o-kave/o-kave.css";

export default function OKave() {
    return (
        <div className="coffee-page-container">

            <header className="coffee-header">
                <h1>Cesta kávového zrna</h1>
                <p className="subtitle">Od plantáže až do vašeho šálku</p>
            </header>

            <section className="coffee-row">
                <div className="text-side">
                    <h2>1. Pěstování a sběr</h2>
                    <p>
                        Vše začíná tisíce kilometrů odtud, v tropických oblastech kávového pásu.
                        Naše káva pochází převážně z vysokohorských plantáží v Etiopii, Kolumbii
                        a Brazílii, kde kávovníky rostou ve stínu vyšších stromů. Nadmořská výška
                        kolem 2000 m n. m. způsobuje, že třešně dozrávají pomaleji, což dává zrnům
                        čas rozvinout komplexní chuťový profil plný ovocných a květinových tónů.
                        Klíčovým momentem je sběr – u výběrové kávy probíhá výhradně ručně (metoda
                        picking), kdy sběrači vybírají jen ty dokonale zralé, sytě červené třešně.
                        Nezralá zrna by totiž do výsledné chuti vnesla nepříjemnou trpkost.
                    </p>
                </div>
                <div className="img-side">
                    <img src="/sber_kavy.jpg" alt="Sběr kávy na plantáži" />
                </div>
            </section>

            <section className="coffee-row reverse">
                <div className="img-side">
                    <img src="/kavove_zrnka.jpg" alt="Zelená káva" />
                </div>
                <div className="text-side">
                    <h2>2. Metody zpracování</h2>
                    <p>
                        Po sběru se musí zrna co nejrychleji dostat z dužiny. Existují tři hlavní
                        metody, které zásadně ovlivňují chuť. <strong>Mokrá metoda (Washed)</strong> zvýrazňuje
                        aciditu a čistotu chuti – třešně se promyjí ve vodních kanálech. <strong>Suchá
                        metoda (Natural)</strong>, kdy se třešně suší na slunci i se slupkou, dodává kávě
                        sladkost a mohutné tělo s tóny jahod či borůvek. Třetí cestou je <strong>Honey
                        metoda</strong>, kompromis mezi oběma, kdy na zrnu zůstane část sladké dužiny.
                        My v Kavárně Aroma střídáme různé metody podle sezóny, abyste mohli ochutnat
                        celou paletu chutí, kterou příroda nabízí.
                    </p>

                    <div className="coffee-list">
                        <h3>Rozdíly v chutích:</h3>
                        <ul>
                            <li><strong>Washed:</strong> Čistá, lehká, citrusová, čajová chuť.</li>
                            <li><strong>Natural:</strong> Sladká, hutná, tóny sušeného ovoce a čokolády.</li>
                            <li><strong>Honey:</strong> Vyvážená, sladká jako med, s mírnou aciditou.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="coffee-row">
                <div className="text-side">
                    <h2>3. Alchymie pražení</h2>
                    <p>
                        Zelená zrna putují lodí do Evropy a následně do naší lokální pražírny.
                        Pražení je kritický proces, při kterém se uvnitř zrna odehrávají stovky
                        chemických reakcí (tzv. Maillardova reakce). Pražič musí bedlivě sledovat
                        teplotu a čas – stačí pár sekund navíc a káva se spálí a zhořkne. My preferujeme
                        střední stupeň pražení (medium roast), který nezabíjí přirozenou chuť zrna,
                        ale zároveň potlačí přílišnou kyselost. Čerstvě upražená káva se pak nechává
                        několik dní vydýchat, aby se uvolnil přebytečný oxid uhličitý, a teprve
                        poté putuje do mlýnku v naší kavárně.
                    </p>
                </div>
                <div className="img-side">
                    <img src="/prazeni_kavy.jpg" alt="Pražení kávy" />
                </div>
            </section>

            <section className="final-visual">
                <h2>Přijďte ochutnat výsledek</h2>
                <div className="single-image">
                    <img src="/final_kava.jpg" alt="Finální šálek kávy" />
                </div>
            </section>

        </div>
    );
}