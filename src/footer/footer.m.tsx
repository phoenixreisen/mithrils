import Config from './config';
import m from 'mithril';

//--- View Icons -----

import ICON_TV from './icons/tv.png';
import ICON_YT from './icons/youtube.png';
import ICON_FB from './icons/facebook.png';
import ICON_QG from './icons/QG-Logo.png';
import ICON_DRV from './icons/DRV-Logo.png';
import ICON_INSTA from './icons/instagram.png';
import ICON_TWITTER from './icons/twitter.png';
import ICON_PHX from './icons/phoenixreisen.jpg';
import ICON_HASH from './icons/insta-hashtag.png';

//--- View Types -----

interface Attrs {
    env?: string,
    headline?: string,
    urls?: {[name: string]: string},
}

//--- View -----

export const Footer: m.Component<Attrs> = {

    view: ({ attrs }: m.Vnode<Attrs>) => {
        const { urls:interns } = Config;
        const { headline, env, urls:externs } = attrs;

        // defaults mit ext. Parametern mergen
        const urls = Object.assign({}, interns, externs);

        return (
            <footer class={`footer ${env && env === 'staging' ? 'staging' : ''}`}>
                <div class="footer__media-links">
                    <div class="mb1">
                        <strong>{headline || 'Sie finden uns auch auf'}</strong>
                    </div>

                    <div class="footer__media-icons">
                        <a href={urls.PHXWEBSITE} title="Phoenix Reisen" target="_blank" rel="noopener noreferrer" class="desktop-only">
                            <img src={ICON_PHX} alt="Phoenix Reisen Website" />
                        </a>
                        <a href={urls.FACEBOOK} title="Phoenix Reisen TV auf Facebook" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_FB} alt="Phoenix Reisen TV auf Facebook" />
                        </a>
                        <a href={urls.YOUTUBE} title="Phoenix Reisen TV auf YouTube" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_YT} alt="Phoenix Reisen TV auf YouTube" />
                        </a>
                        <a href={urls.PHXTV} title="Phoenix TV" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_TV} alt="Phoenix TV" />
                        </a>
                        <a href={urls.INSTAGRAM} title="Phoenix Reisen auf Instagram" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_INSTA} alt="Phoenix Reisen auf Instagram" />
                        </a>
                        <a href={urls.INSTAGRAM_HASHTAG} title="Impressionen unserer Gäste" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_HASH} alt="Impressionen unserer Gäste - #phoenixreisen" />
                        </a>
                        <a href={urls.TWITTER} title="Phoenix Reisen auf Twitter" target="_blank" rel="noopener noreferrer">
                            <img src={ICON_TWITTER} alt="Phoenix Reisen auf Twitter" />
                        </a>
                    </div>
                </div>

                <div class="mt2 tc footer__text">
                    <div><small>Wir sind für Sie da</small></div>
                    <div>
                        <strong><a href="tel:+4922892600" title="Telefonnummer aufrufen">+49 (228) 9260-0</a></strong> oder
                        über <strong><a href="https://www.phoenixreisen.com/kontakt.html" title="Kontaktformular" target="_blank" rel="noopener noreferrer">Kontaktformular</a></strong>
                        <br />
                        <small>montags bis freitags von 09:00 bis 18:00 Uhr</small>
                    </div>
                </div>

                <div class="wrapper wrapper--large footer__links-wrapper">
                    <ul class="footer__links noprint">
                        <li>
                            <a href="https://www.phoenixreisen.com/profibereich.html"
                                title="zum Reisebüro-/Profibereich">
                                <i class="fa fa-angle-right"></i>
                                Reisebüro-/Profibereich
                            </a>
                        </li>
                        <li>
                            <a href="https://www.phoenixreisen.com/reise-und-geschaeftsbedingungen.html"
                                title="zu unseren AGB">
                                <i class="fa fa-angle-right"></i>
                                AGB
                            </a>
                        </li>
                        <li>
                            <a href="https://www.phoenixreisen.com/datenschutzerklaerung.html"
                                title="zu unserer Datenschutzerklärung">
                                <i class="fa fa-angle-right"></i>
                                Datenschutzerklärung
                            </a>
                        </li>
                        <li>
                            <a href="https://www.phoenixreisen.com/kontakt.html"
                                title="zu unserer Kontaktseite">
                                <i class="fa fa-angle-right"></i>
                                Kontakt
                            </a>
                        </li>
                        <li>
                            <a href="https://www.phoenixreisen.com/nutzungsbedingungen.html"
                                title="zu unseren Nutzungsbedingungen">
                                <i class="fa fa-angle-right"></i>
                                Nutzungsbedingungen
                            </a>
                        </li>
                        <li>
                            <a href="https://www.phoenixreisen.com/impressum.html"
                                title="zu unserem Impressum">
                                <i class="fa fa-angle-right"></i>
                                Impressum
                            </a>
                        </li>
                    </ul>

                    <div class="footer__logos">
                        <span><img src={ICON_DRV} /></span>
                        <span><img src={ICON_QG} /></span>
                    </div>
                </div>
            </footer>
        );
    },
};

export default Footer as any;