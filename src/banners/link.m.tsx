import m from 'mithril';

//--- View Types -----

interface Attrs {
    text: string,
    url: string,
    urltext: string,
}

//--- View -----

export const Linkbanner: m.Component<Attrs> = {

    oninit({ attrs }: m.Vnode<Attrs>) {
        if(!attrs.url || !attrs.urltext) {
            throw 'Need at least "url" and "urltext" as parameter. See Readme.';
        }
    },

    view({ attrs }: m.Vnode<Attrs>) {
        return(
            <article class="link-banner mv5">
                <div class="link-banner__textbox">
                    {attrs.text &&
                        <p>{attrs.text}</p>
                    }
                    <p class="pb0">
                        <a href={attrs.url}>
                            <i class="fas fa-angle-right"></i> {attrs.urltext}
                        </a>
                    </p>
                </div>
            </article>
        );
    }
};

export default Linkbanner as any;