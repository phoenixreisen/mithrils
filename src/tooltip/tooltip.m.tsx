import m from 'mithril';

//--- View Types -----

interface Attrs {
    event?: 'hover' | 'click',
    type?: 'component' | 'text',
    position?: 'above' | 'right' | 'below' | 'left',
    TextComponent: m.Component | m.ClassComponent,
    TipComponent: m.Component | m.ClassComponent,
}

interface State {
    showTip: boolean
}

//--- View Variables -----

//--- View Functions -----

//--- View -----

export const Tooltip: m.Component<Attrs, State> = {

    oninit({ state, attrs }: m.Vnode<Attrs, State>) {
        const { TextComponent, TipComponent } = attrs;

        state.showTip = false;

        if(!TextComponent) {
            throw new Error('No text given. You have to set prop "TextComponent" with a mithril component.');
        } else if(!TipComponent) {
            throw new Error('No tooltip given. You have to set prop "TipComponent" with a mithril component.');
        }
    },

    view: ({ state, attrs }: m.Vnode<Attrs, State>) => {
        const { showTip } = state;
        const { TextComponent, TipComponent } = attrs;
        const { position, event, type } = attrs;

        try {
            return (
                <article class={`tooltip ${event === 'click' ? 'tooltip--click':''}`} 
                    onclick={ event === 'click' ? () => state.showTip = !showTip : undefined }
                    onmouseenter={ !event || event === 'hover' ? () => state.showTip = true : undefined }
                    onmouseleave={ !event || event === 'hover' ? () => state.showTip = false : undefined }
                >
                    <span class="tooltip-text">{ TextComponent }</span>
                    <span class={`tip ${type === 'component' ? 'tip--component':''} ${!!position ? `tip--${position}`:'tip--below'} ${showTip ? 'tip--visible':'tip--hidden'}`}>
                        { TipComponent }
                    </span>
                </article>
            );
        } catch(e) {
            console.error(e);
            return (
                <span class="dib alert alert--danger alert--icon">
                    <i class="fas fa-exclamation-triangle"></i>
                    FEHLER BEIM RENDERN!<br />
                    Siehe Konsole...
                </span>
            );
        }
    },
};

export default Tooltip as any;