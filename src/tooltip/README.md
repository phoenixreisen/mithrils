# Phoenix Tooltip

Tooltip Komponente. Ähnlich zum HTML `title`-Tag.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/mithrils/tooltip

## Installation

[Mithril](https://mithriljs.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

## Anwendung

```tsx
import Tooltip from '@phoenixreisen/mithrils/tooltip';

// API

<Tooltip 
    eveng="hover"                   // hover, click
    color="success"                 // info, success, warning, danger
    position="left"                 // above, below, left, right
    text="Hover mich!"              // Freitext
    tooltip="Ich bin der Tooltip!"  // entweder Text (nicht zu lang)
    TipComponent={<Content />}      // oder Mithril Komponente
/>
```

## Demo für Github Page

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