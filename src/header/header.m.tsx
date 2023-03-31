import logo from './phx.logo.svg';
import m from 'mithril';

//--- View Types -----

interface Attrs {
    url?: string,
    tab?: string,
    title?: string,
    version?: string,
    toggleNav?: () => void,
}

//--- View -----

export const Header: m.Component<Attrs> = {

    view: ({ attrs }) => {
        const { toggleNav } = attrs as Attrs;
        const { version, url, title, tab } = attrs as Attrs;
        const { protocol, host, pathname } = location as Location;

        const href = !url
            ? `${protocol || ''}//${host}${(pathname?.length > 1) ? pathname : ''}`
            : url;

        return (
            <article class="header">
                <a href={href} target={tab || '_self'} title={title || ''}>
                    <picture class="header__logo">
                        <img src={logo} />
                    </picture>
                </a>

                {!!version && (
                    <div class="header__version">
                        {version}
                    </div>
                )}

                {!!toggleNav && (
                    <div class="header__nav-btn">
                        <a href="javascript:" 
                            class="nav-btn noprint" 
                            title="Navigation ein- & ausblenden"
                            onclick={() => toggleNav()}>
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>
                )}
            </article>
        );
    },
};

export default Header as any;