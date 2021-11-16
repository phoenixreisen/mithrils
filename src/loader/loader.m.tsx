import m from 'mithril';

//--- Types -----

export interface Attrs {
    type?: string;
    text?: string;
    iconname?: string;
};

//--- Component -----

export const Loader: m.Component<Attrs> = {

    view({attrs}: m.Vnode<Attrs>) {
        const {type, text, iconname} = attrs;

        if(type && type === 'overlay') {
            return (
                <article class="loader loader--overlay">
                    <p class="loader__spinner">
                        <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`}></i><br />
                        {text || 'Daten werden geladen...'}
                    </p>
                </article>
            );
        }
        return (
            <article class="loader">
                <p class="loader__spinner">
                    <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`}></i>
                </p>
                <p class="loader__text">
                    {text || 'Daten werden geladen...'}
                </p>
            </article>
        );
    }
};

export default Loader;