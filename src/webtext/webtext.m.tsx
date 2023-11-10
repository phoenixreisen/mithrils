import striptags from 'striptags';
import m from 'mithril';

//--- View Types -----

interface Webtexts {
    [key: string]: string
}

interface Attrs {
    altText?: string,
    cssClass?: string,
    webtexts: Webtexts,
    webtextName: string,
    asPlainText?: boolean,
    showWebtextName?: boolean,
    allowedHtmlTags?: Array<string>,
    placeholders?: Array<[string, string]>,
    wtmLinkTitle?: string,
    wtmLink?: string,
}

interface State {
    readonly webtext: string | null,
    update: (update: State) => void
}

//--- View Variables & Constants -----

/**
 * Allowed HTML tags within a webtext.
 */
export const ALLOWED_HTML = [
    'a', 'i', 'b', 'small', 'smaller', 'strong', 'em',
    'div', 'p', 'article', 'section', 'ul', 'ol', 'li',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'br', 'span',
];

//--- View Funktionen -----

/**
 * Bestimmt den Webtext. 
 * Ersetzt dabei auch Platzhalter.
 * @param webtexts Webtexts
 * @param webtextName string
 * @param placeholders Array<[placeholder, value]>
 * @returns string
 */
function getWebtext(webtexts: Webtexts, webtextName: string, placeholders?: Array<[string, string]>) {
    let webtext = webtexts[webtextName] || null;

    placeholders?.forEach(([placeholder, value]) => {
        webtext = webtext?.replaceAll(placeholder, value) ?? null;
    });
    return webtext;
}

//--- View -----

export const Webtext: m.Component<Attrs, State> = {

    oninit({ attrs, state }: m.Vnode<Attrs, State>) {
        const { webtexts, webtextName, placeholders } = attrs;

        if(attrs.cssClass && typeof attrs.cssClass !== 'string') {
            throw new Error('You have to set prop "cssClass" with a string or to not set it at all.');
        } else if(typeof attrs.webtexts !== 'object' || Object.keys(attrs.webtexts).length === 0) {
            throw new Error('You have to set prop "webtexts" with an object of key-string-pairs.');
        } else if(typeof attrs.webtextName !== 'string') {
            throw new Error('No webtext given. You have to set prop "webtextName" with a string.');
        } else if(typeof attrs.asPlainText !== 'undefined' && typeof attrs.asPlainText !== 'boolean') {
            throw new Error('You have to set prop "asPlainText" with a boolean or to not set it at all.');
        } else if(typeof attrs.showWebtextName !== 'undefined' && typeof attrs.showWebtextName !== 'boolean') {
            throw new Error('You have to set prop "showWebtextName" with a boolean or to not set it at all.');
        } else if(attrs.allowedHtmlTags && !Array.isArray(attrs.allowedHtmlTags)) {
            throw new Error('You have to set prop "allowedTags" with an array of strings.')
        }

        Object.assign(state, {
            webtext: null,
            update: (update: State) => {
                Object.assign(state, update);
            }
        });
        
        state.update({
            ...state, webtext: getWebtext(webtexts, webtextName, placeholders)
        });
    },

    view({ attrs, state }: m.Vnode<Attrs, State>) {
        const { cssClass } = attrs;
        const { webtextName, altText } = attrs;
        const { wtmLink, wtmLinkTitle } = attrs;
        const { allowedHtmlTags, showWebtextName, asPlainText } = attrs;
        
        const { webtext } = state;
        
        const title = (!!webtextName && showWebtextName)
            ? webtextName 
            : undefined;

        if(!webtext && altText) {
            return (
                <article class={`webtext ${cssClass || ''}`} title={title}>
                    { m.trust(striptags(altText, allowedHtmlTags || ALLOWED_HTML)) }
                </article>
            );
        } else if(!webtext) {
            return null;
        } else {
            return (
                <article class={`webtext ${cssClass || ''}`} title={title}>
                    {(showWebtextName && wtmLink) && (
                        <div class="f6">
                            <a href={wtmLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={wtmLinkTitle || `${webtextName} im Webtext-Manager öffnen`}>
                                <i className="fas fa-external-link-alt" /> Webtext ändern
                            </a>
                        </div>
                    )}
                    <div>
                        {asPlainText
                            ? webtext
                            : m.trust(striptags(webtext, (allowedHtmlTags || ALLOWED_HTML)))
                        }
                    </div>
                </article>
            );
        }
    }
};

export default Webtext as any;