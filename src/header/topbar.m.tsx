import m from 'mithril';

//--- View Types -----

type Attrs = {
    name: string,
    backUrl?: string,
    faviconUrl?: string,
    faviconTarget?: string,
    toggleNav?: (e?: Event) => void,
    toggleAvatar?: (e?: Event) => void,
    AvatarComponent?: any,
    NavComponent?: any
}

type State = {
    isVisible: boolean,
    $header: HTMLElement | null
}

//--- View Funktionen -----

export const getScrollOffset = () => {
    return window.scrollY
        || window.pageYOffset
        || document.body.scrollTop + (document.documentElement?.scrollTop || 0);
};

export const checkPosition = (state: State) => {
    const preVisibility = state.isVisible;
    if(state.$header) {
        state.isVisible = (getScrollOffset() >= state.$header.offsetHeight);
        if(state.isVisible !== preVisibility) {
            m.redraw();
        }
    }
};

//--- View -----

export const Topbar: m.Component<Attrs, State> = {

    oninit({ state }) {
        state.$header = null;
        state.isVisible = false;
    },

    oncreate({ state }) {
        state.$header = document.querySelector('.header');
        window.addEventListener('scroll', checkPosition.bind(this, state), true);
        window.addEventListener('touchmove', checkPosition.bind(this, state), true);
    },

    view({ attrs, state }: m.Vnode<Attrs, State>) {
        const { backUrl, faviconUrl, faviconTarget, name } = attrs;
        const { AvatarComponent, NavComponent } = attrs;
        const { toggleNav, toggleAvatar } = attrs;
        const { isVisible } = state;

        return (
            <article class={`top-bar noprint ${isVisible ? 'top-bar--visible':''}`}>
                <div class="wrapper wrapper--large">
                    <div class="top-bar__left">
                        {!!backUrl && (
                            <a href={backUrl} title="zurück" class="top-bar__back-btn">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                        )}

                        <a href={faviconTarget || 'https://www.phoenixreisen.com'} title="zur Startseite">
                            <img src={faviconUrl || 'https://phoenixreisen.com/favicon.png'} class="top-bar__icon" alt="" />
                            <span class="ml1">{name}</span>
                        </a>
                    </div>

                    {!!toggleAvatar && (
                        <article class="top-bar__avatar noprint">
                            <a href="javascript:" class="avatar-cta avatar-cta--topbar"
                                title="Service, Einstellungen & Optionen"
                                onclick={(e: Event) => toggleAvatar(e)}>
                                <i class="fas fa-user avatar__symbol"></i>
                            </a>
                            {!!AvatarComponent && (
                                <AvatarComponent />
                            )}
                        </article>
                    )}

                    {!!toggleNav && (
                        <article class="top-bar__nav-btn noprint">
                            <a href="javascript:" class="nav-btn"
                                title="Navigation ein-/ausblenden"
                                onclick={(e: Event) => toggleNav(e)}>
                                <i class="fas fa-bars"></i>
                            </a>
                            {!!NavComponent && (
                                <NavComponent />
                            )}
                        </article>
                    )}
                </div>
            </article>
        );
    }
};

export default Topbar as any;