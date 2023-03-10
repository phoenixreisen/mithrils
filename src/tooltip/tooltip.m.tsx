import m from 'mithril';

//--- View Types -----

interface Attrs {
    text?: string,
    tooltip?: string,
    iconname?: string,
    event?: 'hover' | 'click',
    position?: 'above' | 'right' | 'below' | 'left',
    color?: 'success' | 'danger' | 'warning' | 'info',
    TipComponent?: m.Component | m.ClassComponent,
}

interface State {
    showTip: boolean
}

//--- View Variables -----

//--- View Functions -----

//--- View -----

export const Tooltip: m.Component<Attrs, State> = {

    oninit({ state, attrs }: m.Vnode<Attrs, State>) {
        state.showTip = false;

        const { text, iconname } = attrs;           // Displayed base content
        const { tooltip, TipComponent } = attrs;    // The tooltip on event

        if(!text && !iconname) {
            throw new Error('No content to display given. You have to set prop "text" and/or "iconname".');
        } else if(!tooltip && !TipComponent) {
            throw new Error('No tooltip to display given. You have to set prop "tooltip" or "TipComponent".');
        } else if(tooltip && TipComponent) {
            throw new Error('You cannot set both tooltip and TipCompoent.');
        }
    },

    view: ({ state, attrs }: m.Vnode<Attrs, State>) => {
        const { showTip } = state;

        const { text, iconname } = attrs;           // Displayed base content
        const { tooltip, TipComponent } = attrs;    // The tooltip on event
        const { position, color, event } = attrs;   // Styling & behaviour

        try {
            return (
                <article class={`tooltip ${event === 'click' ? 'tooltip--click':''}`} 
                    onclick={ event === 'click' ? () => state.showTip = !showTip : undefined }
                    onmouseenter={ !event || event === 'hover' ? () => state.showTip = true : undefined }
                    onmouseleave={ !event || event === 'hover' ? () => state.showTip = false : undefined }
                >
                    { iconname?.length  && <i class={`tooltip-icon fas ${iconname} ${text?.length ? 'mr1':''}`} /> }
                    { text?.length && <span class={'tooltip-text'}>{ text }</span> }
        
                    <span class={`tip ${!!TipComponent ? 'tip--component':''} ${!!position ? `tip--${position}`:'tip--below'} ${showTip ? 'tip--visible':'tip--hidden'}`}>
                        {!!TipComponent && ( 
                            TipComponent
                        )}
                        {!!tooltip && ( 
                            <span class={color ? `tip--colored ${color}`:''}>
                                { tooltip }
                            </span>
                        )}
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