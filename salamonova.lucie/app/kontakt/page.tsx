import "./kontakt.css"; // Důležité: Importujeme CSS

export default function Kontakt() {
    return (
        <div className="contact-page-container">

            <header className="contact-header">
                <h1>Kontaktujte nás</h1>
                <p className="subtitle">Jsme tu pro vás každý den</p>
            </header>

            <div className="contact-wrapper">

                <div className="contact-sidebar">
                    <div className="info-card">
                        <h3>Kde nás najdete?</h3>

                        <ul className="contact-details">
                            <li>
                                <div>
                                    <strong>Adresa:</strong><br/>
                                    Ulice Kávová 123<br/>
                                    746 01 Opava
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Telefon:</strong><br/>
                                    +420 123 456 789
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Email:</strong><br/>
                                    info@kavarnaaroma.cz
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Otevírací doba:</strong><br/>
                                    Po-Pá: 7:30 - 20:00<br/>
                                    So-Ne: 9:00 - 21:00
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-image">
                        <img src="/barentry.jpg" alt="Vchod do kavárny" />
                        <p className="caption">Náš historický vchod z ulice</p>
                    </div>
                </div>

                <div className="contact-content">

                    <section className="text-section">
                        <h2>Kde se přesně nacházíme</h2>
                        <p>
                            Naše kavárna je situována v samém srdci historického centra Opavy, jen pár
                            kroků od Horního náměstí. Sídlíme v přízemí zrekonstruovaného měšťanského
                            domu ze 19. století, který poznáte podle výrazné secesní fasády a velkých
                            výkladních skříní, kterými rádi pozorujeme ruch ulice. Pokud k nám míříte
                            autem, doporučujeme využít parkovací dům u nákupního centra Breda, který je
                            vzdálený pouhých 5 minut chůze. Pro cyklisty máme připravený stojan na kola
                            přímo před vchodem, na který vidíte z většiny míst v kavárně, takže o svůj
                            bicykl nemusíte mít strach. Těšíme se, až k nám trefíte.
                        </p>
                    </section>

                    <section className="text-section">
                        <h2>Rezervace a soukromé akce</h2>
                        <p>
                            Ačkoliv se snažíme vždy držet několik volných míst pro náhodné kolemjdoucí,
                            v odpoledních hodinách a o víkendech bývá naše kapacita často naplněna.
                            Proto vřele doporučujeme provést rezervaci předem, obzvláště pokud plánujete
                            dorazit ve větší skupině přátel nebo s rodinou. Rezervace přijímáme telefonicky
                            nebo prostřednictvím formuláře níže, ideálně alespoň 24 hodin předem.
                            Nabízíme také možnost pronájmu zadního salónku pro soukromé oslavy, firemní
                            snídaně nebo workshopy, kde vám zajistíme kompletní catering včetně kanapek
                            a neomezené konzumace filtrované kávy.
                        </p>
                    </section>

                    <div className="content-image">
                        <img src="/barcrew.jpg" alt="Náš usměvavý tým" />
                    </div>

                    <section className="text-section">
                        <h2>Napište nám nebo se stavte</h2>
                        <p>
                            Vážíme si každé zpětné vazby, kterou od vás dostaneme, protože jen díky ní
                            se můžeme neustále posouvat dál. Pokud jste byli s něčím nespokojeni, nebo
                            naopak chcete pochválit konkrétního baristu, neváhejte nám napsat e-mail
                            nebo zanechat vzkaz přes kontaktní formulář. Snažíme se odpovídat na všechny
                            dotazy do druhého pracovního dne. Sledujte nás také na sociálních sítích
                            Instagram a Facebook, kde pravidelně zveřejňujeme aktuální nabídku dezertů,
                            informace o změnách otevírací doby během svátků a fotky z našeho každodenního
                            kavárenského života. Jsme tu pro vás.
                        </p>
                    </section>

                </div>
            </div>

            <section className="form-map-container">
                <div className="contact-form">
                    <h2>Napište nám vzkaz</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Vaše jméno" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Váš e-mail" required />
                        </div>
                        <div className="form-group">
                            <textarea rows={5} placeholder="Text zprávy..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Odeslat zprávu</button>
                    </form>
                </div>

                <div className="map-frame">

                    <div className="map-placeholder">
                        <img src="/googlemaps.jpg" alt="Mapa" style={{width: '120%', height: '100%', objectFit: 'cover'}} />
                        <span className="map-label">Zde by byla Google Mapa</span>
                    </div>
                </div>
            </section>

        </div>
    );
}