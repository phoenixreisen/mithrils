import '../../../test-setup.js';
import mq from "mithril-query";
import m from "mithril";

// Will be generated, when calling npm test
import Slider from "../../../testfiles/slider/index.m.js";

describe('Slider Wrapper', () => {
    const Slide = m("article", { "class":"slide" }, "Slide Content");

    it('renders correctly', () => {

        const Page = {
            view({ state }) {
                return ([
                    m(Slider, {
                        name: 'slider-1',
                        slides: [ Slide, Slide, Slide ]
                    }),
                ]);
            },
        };
        const rendered = mq(Page);

        // Swiper
        rendered.should.have(1, '.swiper');
        rendered.should.have(1, '.swiper-scrollbar');
        rendered.should.have(1, '.swiper-pagination');
        rendered.should.have(1, '.swiper-button-next');
        rendered.should.have(1, '.swiper-button-prev');
        rendered.should.have(3, '.swiper-slide');

        // Custom Classes
        rendered.should.have(1, '.swiper-wrapper');
        rendered.should.have(1, '.fas.fa-arrow-circle-left');
        rendered.should.have(1, '.fas.fa-arrow-circle-right');
    });
});