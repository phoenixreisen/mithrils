import ship from './img/ship.gif';
import m from 'mithril';

//--- View Types -----

export interface Attrs {
    type?: string;
    text?: string;
    iconname?: string;
    showGif?: boolean;
    noText?: boolean;
};

//--- View -----

export const Loader: m.Component<Attrs> = {

    view({ attrs }: m.Vnode<Attrs>) {
        const { type, text, iconname, showGif, noText } = attrs;

        if(type && type === 'overlay') {
            return (
                <article class="loader loader--overlay">
                    <p class="loader__spinner">
                        {(ship && showGif) 
                            // Entweder ein Bild oder ein großes Spinning-Icon
                            ? <img src={ship} />
                            : <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`} />
                        }
                        {!noText && ([
                            // Dieses <br> ist wichtig
                            <br />,
                            // Spinning Icon direkt neben dem Text, in Textgröße
                            (ship && showGif) && (
                                <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin mr2`} />
                            ),
                            text || 'Daten werden geladen...',
                        ])}
                    </p>
                </article>
            );
        }
        return (
            <article class="loader">
                <p class="loader__spinner">
                    {(ship && showGif) 
                        ? <img src={ship} />
                        : <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin`} />
                    }
                </p>
                {!noText && (
                    <p class="loader__text">
                        {(ship && showGif) && (
                            <i class={`${iconname || 'fab fa-cuttlefish'} fa-spin mr2`} />
                        )}
                        {text || 'Daten werden geladen...'}
                    </p>
                )}
            </article>
        );
    }
};

export default Loader as any;