import m from 'mithril';

//--- View Types -----

type Position = 'left' | 'center';

interface Attrs {
    animated: boolean
    position: Position
    side: Map<number, 'left'|'right'>
    line: 'separated' | 'constantly'
}

interface State {
    position: Position
    modifier: 'timeline--static' | 'timeline--animated' | ''
}

//--- Variables -----

//--- Functions -----

//--- View -----

export const TimeLine: m.Component<Attrs, State> = {

    oninit({ state, attrs }: m.Vnode<Attrs, State>) {
        const { position, line, side } = attrs;

        state.modifier = '';
        state.position = attrs.position || 'left';

        if(position && (position !== 'left' && position !== 'center')) {
            throw new Error('Unknown position parameter (allowed is left or right).');
        } else if(line && (line !== 'separated' && line !== 'constantly')) {
            throw new Error('Unknown line parameter (allowed is separated or constantly).');
        } else if(!!side && position === 'left') {
            throw new Error('Parameter only allowed when position is "center".');
        }
    },

    oncreate({ state, attrs }) {
        if(!!attrs.animated) {
            state.modifier = 'timeline--animated';
        } else {
            state.modifier = 'timeline--static';
        }
        m.redraw();
    },

    view: ({ state, attrs, children }: m.Vnode<Attrs, State>) => {
        const { line, side } = attrs;
        const { modifier, position } = state;

        // Casting
        const contents = children as m.ChildArray;

        return (
            <section class={`timeline ${modifier} ${position === 'left' ? 'timeline--left':'timeline--center'}`}>

                {line !== 'separated' &&
                    <span class={`timeline-axis`}></span>
                }
                {(contents).map((child, childnr) => {
                    const transition = 500;
                    const isOdd = (childnr % 2) === 1;
                    const delayPerSection = transition * childnr;

                    return (
                        <article class="timeline-box">
                            {(line === 'separated') &&
                                <span 
                                    class={`timeline-axis`} 
                                    style={`transition: height ${transition}ms ease ${delayPerSection}ms`} 
                                />
                            }
                            {(position === 'left') && (
                                <div class="timeline-left-box">
                                    <i class="timeline-circle" />
                                    
                                    <div class="timeline-content">
                                        { child }
                                    </div>
                                </div>
                            )}
                            {(position === 'center') && (
                                <div class="timeline-center-box">
                                    <i class="timeline-circle" />
                                    
                                    <div class="timeline-content timeline-content--left">
                                        { !side?.get(childnr) && !isOdd && child }
                                        { side?.get(childnr) === 'left' && child }
                                    </div>
                                    <div class="timeline-content timeline-content--right">
                                        { !side?.get(childnr) && isOdd && child }
                                        { side?.get(childnr) === 'right' && child }
                                    </div>
                                </div>
                            )}
                        </article>
                    )
                })}
            </section>
        );
    },
};

export default TimeLine as any;