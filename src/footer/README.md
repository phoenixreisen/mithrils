# Phoenix Footer

Standard-Footer für diverse (standalone) Phoenix-Applikationen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/mithrils/footer/

## Installation

[Mithril](https://mithriljs.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

## Anwendung

```tsx
import Footer from '@phoenixreisen/mithrils/footer';

<Footer headline="für etwas Vorfreude" env="[staging|production]" />
```

Wird für `env` "staging" angegeben, wird `border-top` gelb eingefärbt.

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