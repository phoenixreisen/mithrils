# Phoenix Slider

**Die Komponente stellt einen Mithril-Wrapper für den Slider "Swiper" zur Verfügung.** Diesem werden letztendlich
nur noch eine Reihe von Mithril-Komponenten übergeben. Der Rest ist vorkonfiguriert. Die Styles kommen aus dem [Design-System](https://design-system.phoenixreisen.net).

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/mithrils/slider/

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

```tsx
import Slider from '@phoenixreisen/mithrils/src/slider';
import m from 'mithril';

// Dummy Slide
const Slide = m("article", { "class":"slide" }, "Slide Content");

const Page: m.Component<{}> = {
    view({state}) {
        return ([
            m(Slider, {
                name: 'slider-1',
                slides: [ Slide, Slide, Slide ]
            }),
        ]);
    },
};

m.mount(document.querySelector('.example-app'), Page);
```

## Github Page

Mit folgendem Befehl werden alle Demos in den Ordner [../../docs](../../docs) gebaut. Dieser Ordner wird von Github zur Bereitstellung der Demos bzw. Github Pages genutzt.

Möchte man zum Entwickeln nur bestimmte Demos bauen, kann man in der [rollup.config.js](../../rollup.config.js) nicht benötigte Demos auskommentieren, sollte sie vor dem `push` aber wieder einkommentieren.

```bash
npm run compile:demos
```

## Test

```bash
[npm install]
npm run test
```

## Deployment

Deployed & published wird immer die ganze Sammlung. [Siehe hier](../../README.md).