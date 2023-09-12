import striptags from 'striptags';
import m from 'mithril';

//--- View Types -----

interface Webtexts {
    [key: string]: string
}

interface Attrs {
    cssClass?: string,
    webtexts: Webtexts,
    webtextName: string,
    asPlainText?: boolean,
    showWebtextName?: boolean,
    allowedHtmlTags?: Array<string>,
}

interface State {
    // No state needed.
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

//--- View -----

export const Webtext: m.Component<Attrs, State> = {

    oninit({ attrs }: m.Vnode<Attrs, State>) {
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
    },

    view({ attrs }: m.Vnode<Attrs, State>) {
        const { cssClass } = attrs;
        const { webtexts, webtextName } = attrs;
        const { allowedHtmlTags, showWebtextName, asPlainText } = attrs;

        const webtext = webtexts[webtextName] || null;
        
        const title = (!!webtextName && showWebtextName)
            ? webtextName 
            : undefined;

        if(!webtext) {
            return null;
        }
        return (
            <article class={`webtext ${cssClass || ''}`} title={title}>
                {asPlainText
                    ? webtext
                    : m.trust(striptags(webtext, (allowedHtmlTags || ALLOWED_HTML))) }
            </article>
        );
    }
};

export default Webtext as any;