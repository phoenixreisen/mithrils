import m from 'mithril';

import Swiper, { 
    Scrollbar,
    Navigation, 
    Pagination, 
    SwiperOptions
} from 'swiper';

//--- View Types -----

type State = {
    slider: Swiper,
    options: SwiperOptions
}

type Attrs = {
    name: string,
    slides: Array<m.Vnode>,
    options?: SwiperOptions
}

//--- View -----

export const Slider: m.Component<Attrs, State> = {

    oninit({ state, attrs }: m.Vnode<Attrs, State>) {

        if(!attrs.name) {
            throw new Error('No classname for Swiper instance given.');
        } else if(!attrs.slides || attrs.slides.length === 0) {
            throw new Error('Slider has no slides to present.');
        }

        state.options = {
            pagination: {
                renderBullet: (index: number, className: string) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
                clickable: true,
                el: `.swiper-pagination-${attrs.name}`,
            },
            navigation: {
                nextEl: `.swiper-button-next-${attrs.name}`,
                prevEl: `.swiper-button-prev-${attrs.name}`,
            },
            scrollbar: {
                el: `.swiper-scrollbar-${attrs.name}`,
            },
            modules: [
                Scrollbar,
                Navigation,
                Pagination,
            ],
            longSwipes: false,
            shortSwipes: true,
            simulateTouch: false,
            allowTouchMove: false,
        };
    },

    oncreate({ state, attrs }: m.VnodeDOM<Attrs, State>) {

        if(attrs.options) {
            state.options = Object.assign(state.options, attrs.options);
        }
        state.slider = new Swiper(`.${attrs.name}`, state.options);
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
                <div class={`swiper-scrollbar swiper-scrollbar-${name}`}></div>
                <div class={`swiper-button-prev swiper-button-prev-${name}`}><i class="fas fa-arrow-circle-left"></i></div>
                <div class={`swiper-button-next swiper-button-next-${name}`}><i class="fas fa-arrow-circle-right"></i></div>
                <div class={`swiper-pagination swiper-pagination-${name}`}></div>
            </div>
        );
    }
};

export default Slider as any;