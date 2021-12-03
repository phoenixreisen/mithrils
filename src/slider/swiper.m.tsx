import './swiper.style.scss';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import m from 'mithril';

Swiper.use([ Navigation, Pagination, Scrollbar ]);

//--- Types -----

type AttrProps = {
    slides: Array<m.Vnode<any, any>>,
}

type StateProps = {
    slider: Swiper
}

//--- Komponente -----

export const Slider: m.Component<AttrProps, StateProps> = {

    oncreate(vnode: m.VnodeDOM<AttrProps, StateProps>) {
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

    onupdate({state}: m.Vnode<AttrProps, StateProps>) {
        const { slider } = state;
        slider.update?.();
    },

    view({attrs}: m.Vnode<AttrProps>) {
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
}

export default Slider;