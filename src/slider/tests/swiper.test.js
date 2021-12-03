import mq from "mithril-query";
import test from "ospec";
import m from "mithril";

// Will be generated, when calling npm test
import Slider from "../../../testfiles/slider/index.m.js";

test.spec('Slider Wrapper', () => {
    const Slide = m("article", { "class":"slide" }, "Slide Content");

    test('renders correctly', () => {

        const Page = {
            view({state}) {
                return ([
                    m(Slider, {
                        parentState: state,
                        slides: [Slide, Slide, Slide]
                    }),
                ]);
            },
        };
        const rendered = mq(Page);

        // Swiper
        test(rendered.should.have(1, '.swiper')).equals(true);
        test(rendered.should.have(1, '.swiper-scrollbar')).equals(true);
        test(rendered.should.have(1, '.swiper-pagination')).equals(true);
        test(rendered.should.have(1, '.swiper-button-next')).equals(true);
        test(rendered.should.have(1, '.swiper-button-prev')).equals(true);
        test(rendered.should.have(3, '.swiper-slide')).equals(true);

        // Custom Classes
        test(rendered.should.have(1, '.swiper-wrapper')).equals(true);
        test(rendered.should.have(1, '.fas.fa-arrow-circle-left')).equals(true);
        test(rendered.should.have(1, '.fas.fa-arrow-circle-right')).equals(true);
    });
});