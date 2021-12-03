import { Slider } from '../swiper.m';
import m from 'mithril';

// Beispiel-Slide-Content
const Slide = m("article", {"class":"slide"}, "Slide Content");

const Root: m.Component<{}> = {
    view() {
        return ([
            m(Slider, { slides: [ Slide, Slide, Slide ] }),
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);