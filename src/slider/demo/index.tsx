import { Slider } from '../swiper.m';
import m from 'mithril';

// Beispiel-Slide-Content
const Slide = m("article", {"class":"slide"}, "Slide Content");

const Root: m.Component<{}> = {
    view() {
        return ([
            <p><strong>I. Slider</strong></p>,
            m(Slider, { name: 'swiper1', slides: [ Slide, Slide, Slide ] }),
            
            <div class="pv4"></div>,

            <p><strong>II. Slider auf selber Seite</strong></p>,
            m(Slider, { name: 'swiper1', slides: [ Slide, Slide, Slide ] }),
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);