import "@/app/globals.css";
import "@/app/galerie/galerie.css";

export default function Galerie() {
    const galleryImages = [
        { src: "/gal1.jpg", alt: "Hlavní bar a kávovar" },
        { src: "/gal2.jpg", alt: "Posezení u okna" },
        { src: "/gal3.jpg", alt: "Detail přípravy V60" },
        { src: "/gal4.jpg", alt: "Naše knihovna pro hosty" },
        { src: "/gal5.jpg", alt: "Večerní atmosféra" },
        { src: "/gal6.jpg", alt: "Letní zahrádka" },
        { src: "/gal7.jpg", alt: "Letní zahrádka" },
        { src: "/gal8.jpg", alt: "Letní zahrádka" },
        { src: "/gal9.jpg", alt: "Letní zahrádka" },
        { src: "/gal10.jpg", alt: "Letní zahrádka" }
    ];

    return (
        <div className="galerie-background">
            <div className="gallery-page-container">

                <section className="gallery-intro">
                    <h1>Fotogalerie</h1>
                    <p className="intro-lead">
                        Nahlédněte pod pokličku našeho kávového světa. Každý kout naší kavárny byl
                        navržen s důrazem na detail, pohodlí a jedinečnou atmosféru.
                    </p>
                    <p>
                        Když jsme Kavárnu Aroma navrhovali, věděli jsme, že nechceme vytvořit jen další
                        sterilní moderní prostor. Chtěli jsme místo, které bude dýchat historií.
                        Proto jsme zachovali původní cihlové zdi, které jsme pouze očistili a naimpregnovali,
                        aby vynikla jejich přirozená textura. Podlahu tvoří repasované dubové parkety,
                        které pamatují ještě první republiku, a nábytek jsme sbírali po antikvariátech
                        a starých půdách, abychom ho následně s láskou zrenovovali. Kombinace teplého
                        dřeva, kovu a měkkého světla vytváří unikátní genius loci.
                    </p>
                </section>

                <section className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img.src} alt={img.alt} />
                            <div className="overlay">
                                <span>{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="gallery-text-block">
                    <h2>Život v kavárně</h2>
                    <p>
                        Naše kavárna není jen o statickém interiéru, ale především o lidech, kteří ji
                        naplňují životem. Každý den se zde odehrávají desítky malých příběhů – od
                        studentů, kteří se nervózně připravují na zkoušky, přes digitální nomády
                        pracující na svých projektech, až po první rande, která začínají nesmělým
                        úsměvem nad šálkem cappuccina. Snažíme se zachytit tyto momenty i na fotografiích,
                        protože právě smích našich hostů tvoří tu pravou hudbu našeho podniku.
                    </p>

                    <div className="gallery-list">
                        <h3>Pravidelně u nás fotíme:</h3>
                        <ul>
                            <li>Vernisáže fotografií místních začínajících umělců.</li>
                            <li>Cestovatelské přednášky s promítáním na plátno.</li>
                            <li>Cuppingy (ochutnávky) nových sklizní kávy.</li>
                            <li>Hudební večery s živým klavírním doprovodem.</li>
                        </ul>
                    </div>
                </section>

                <section className="gallery-text-block">
                    <h2>Umění v šálku (Latte Art)</h2>
                    <p>
                        Fotogenická není jen naše kavárna, ale i samotná káva. Naši baristé ovládají
                        techniku latte art na špičkové úrovni. Nejde jen o to nalít mléko do kávy,
                        ale o precizní práci s mikropěnou, která musí mít správnou teplotu a texturu,
                        aby se na hladině espressa daly kreslit složité obrazce. Zde je ukázka našeho
                        nejoblíbenějšího vzoru, kterým rádi zdobíme vaše ranní cappuccino.
                    </p>

                    <div className="single-image">
                        <img src="/latte_art.jpg" alt="Latte Art Masterpiece" />
                    </div>
                </section>

            </div>
        </div>
    );
}