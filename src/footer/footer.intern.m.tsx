import m from 'mithril';

//--- View Types -----

type Attrs = {
    username: string,
    loggedIn: boolean,
};

//--- View -----

const Footer: m.Component<Attrs> = {

    view({ attrs }) {
        const { loggedIn, username } = attrs;

        return (
            <article class="intern-footer">
                <div class="wrapper wrapper--large">
                    
                    <hr />
                    
                    {loggedIn && (
                        <div class="tr mr3">
                            <span>eingeloggt als <span class="f4">{username || ''}</span></span>
                            <span class="mh3">|</span>
                            <a href="/cdn/mitarbeiter/login/">
                                <i class="fas fa-sign-out-alt mr1"></i> abmelden
                            </a>
                        </div>
                    )}

                    {!loggedIn && (
                        <div class="tr mr3">
                            <a href="/cdn/mitarbeiter/login/">
                                <i class="fas fa-sign-in-alt mr1"></i> anmelden
                            </a>
                        </div>
                    )}
                </div>
            </article>
        );
    }
};

export default Footer as any;