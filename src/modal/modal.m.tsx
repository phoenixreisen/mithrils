import Sizes from './modal.sizes';
import m from 'mithril';

//--- Types -----

interface Attrs {
    title: string,
    content: any,
    footer: any,
    size: Sizes,
    withCloseText: false,
    toggle: () => void,
}

//--- Variablen & Nodes -----

let $body: HTMLElement | null = null;

//--- Komponente -----

export const Modal: m.Component<Attrs> = {

    oninit(v: m.Vnode<Attrs>) {
        const attrs = v.attrs as Attrs;
        const children = v.children as m.ChildArray;

        if(!attrs.content && !children.length) {
            throw 'Modal Content missing. Inject through "content" attribute/parameter or as children.';
        } else if(attrs.size && !Sizes[attrs.size]) {
            throw 'Invalid modal size given. See Readme or modal.sizes.js for more information.'
        }
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if(e.keyCode === 27) {
                attrs.toggle?.();
                m.redraw();
            }
        });
    },

    oncreate() {
        $body = document.querySelector('body') as HTMLElement;
        if($body) {
            $body.style.overflow = 'hidden';
        }
    },

    onremove() {
        if($body) {
            $body.style.overflow = '';
        }
    },

    view(v: m.Vnode<Attrs>) {
        const {attrs} = v
        const {content, footer} = attrs;
        const {toggle, title, size, withCloseText} = attrs;

        return ([
            <article class={`modal modal--visible ${size || ''}`}>
                <div class="modal__header">
                    <span class="modal__headline">
                        {title || ''}
                    </span>
                    {toggle &&
                        <a class="modal__toggle" href="javascript:" onclick={toggle}>
                            {withCloseText && <span class="desktop-only">schließen</span>}
                            <i class="fas fa-times-circle"></i>
                        </a>
                    }
                </div>

                <div class="modal__content">
                    { content || v.children }
                </div>

                {footer &&
                    <div class="modal__footer tr">
                        {footer}
                    </div>
                }
            </article>,
            <article class="modal__bg"></article>,
        ]);
    },
} as any;

export default Modal;