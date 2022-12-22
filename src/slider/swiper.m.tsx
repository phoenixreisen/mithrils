import m from 'mithril';

import Swiper, { 
    Navigation, 
    Pagination, 
    Scrollbar 
} from 'swiper';

Swiper.use([ Navigation, Pagination, Scrollbar ]);

//--- View Types -----

type Attrs = {
    slides: Array<m.Vnode<any, any>>,
}

type State = {
    slider: Swiper
}

//--- View -----

export const Slider: m.Component<Attrs, State> = {

    oncreate(vnode: m.VnodeDOM<Attrs, State>) {
        const { state } = vnode;
        state.slider = new Swiper('.swiper', {
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
                renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
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

    onupdate({ state }: m.Vnode<Attrs, State>) {
        const { slider } = state;
        slider.update?.();
    },

    view({ attrs }: m.Vnode<Attrs>) {
        const { slides } = attrs;
        return (
            <div class="swiper">
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