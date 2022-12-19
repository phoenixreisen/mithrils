import { notes } from '@phoenixreisen/notification';
import ClipboardJS from 'clipboard';
import m from 'mithril';

//--- View Types ------

interface Attrs {
    url: string,
    appname: string,
    urltext: string,
    headline: string,
    hashtags: string,
    mailsubject: string
    noBackground: boolean,
}

interface State {
    showClipboardMsg: boolean,
}

//--- View Funktionen -----

const saveToClipboard = (state: State) => {
    notes.add({text: 'In die Zwischenablage kopiert.'});
    state.showClipboardMsg = true;
    setTimeout(() => {
        state.showClipboardMsg = false;
        m.redraw();
    }, 2500);
}

//--- View -----

export const Sharebanner: m.Component<Attrs> = {

    oninit({ state }: m.Vnode<Attrs, State>) {
        state.showClipboardMsg = false;
    },

    oncreate() {
        new ClipboardJS('.share-clipboard');
    },

    view({ state, attrs }: m.Vnode<Attrs, State>) {
        const { noBackground } = attrs;
        const { showClipboardMsg } = state;
        const { headline, appname, urltext, mailsubject, hashtags } = attrs;
        const url = attrs.url || location.href;

        return (
            <article class={`share-banner ${noBackground ? 'share-banner--bg-less':''}`}>
                <div class="wrapper wrapper--large">
                    <div class="tc">
                        <h3 class="tc pt0">{headline || 'Gerne weitersagen...'}</h3>
                    </div>
                    <div class="tc share-icons">
                        <a href={`mailto:?subject=${mailsubject || 'tolle Empfehlung'}&body=${urltext || ''}: ${url}`}
                            title={`${appname || ''} per Email empfehlen`} class="share-email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href={`https://api.whatsapp.com/send?text=${urltext || ''}: ${url}`}
                            title={`${appname || ''} per WhatsApp empfehlen`} class="share-whatsapp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${urltext || ''}&url=${url}&hashtags=${hashtags}`}
                            title={`${appname || ''} twittern`} class="share-twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                            title={`${appname || ''} per Facebook empfehlen`} class="share-facebook"
                            rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="javascript:" class={`share-clipboard${showClipboardMsg ? '--clipped':''}`}
                            data-clipboard-text={`${urltext || ''}: ${url}`}
                            onclick={() => saveToClipboard(state)}
                            title="in die Zwischenablage kopieren">
                            <i class={`fas fa-clipboard${showClipboardMsg ? '-check':''}`}></i>
                        </a>
                    </div>
                </div>
            </article>
        );
    }
};

export default Sharebanner as any;