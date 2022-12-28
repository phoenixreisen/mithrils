import m from 'mithril';

import Swiper, { 
    Navigation, 
    Pagination, 
    Scrollbar 
} from 'swiper';

Swiper.use([ Navigation, Pagination, Scrollbar ]);

//--- View Types -----

type Attrs = {
    name: string,
    slides: Array<m.Vnode>,
}

type State = {
    slider: Swiper
}

//--- View -----

export const Slider: m.Component<Attrs, State> = {

    oncreate(vnode: m.VnodeDOM<Attrs, State>) {
        const { state, attrs } = vnode;

        state.slider = new Swiper(`.${attrs.name}`, {
            pagination: {
                renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
                clickable: true,
                el: `.swiper-pagination`,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            longSwipes: true,
            shortSwipes: false,
            simulateTouch: false,
        });
    },

    view({ attrs }: m.Vnode<Attrs>) {
        const { slides, name } = attrs;

        return (
            <div class={`swiper ${name}`}>
                <div class="swiper-wrapper">
                    {slides.map((slide: m.Vnode<any, any>, index: number) => {
                        return <div class="swiper-slide" key={`slide-${index}`}>{slide}</div>;
                    })}
                </div>
                <div class="swiper-scrollbar"></div>
                <div class="swiper-button-prev"><i class="fas fa-arrow-circle-left"></i></div>
                <div class="swiper-button-next"><i class="fas fa-arrow-circle-right"></i></div>
                <div class="swiper-pagination"></div>
            </div>
        );
    }
};

export default Slider as any;