# Phoenix Mithril Komponenten

Sammlung von Mithril Implementierungen für die Komponenten des Design Systems.

Die Komponenten sind Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithriljs.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

## Anwendung

```ts
import <KOMPONENTE> from '@phoenixreisen/mithrils/src/<KOMPONENTE>';

// zum Beispiel
import Loader from '@phoenixreisen/mithrils/src/loader';
import Header from '@phoenixreisen/mithrils/src/header';
```

Weitere Informationen bzgl. Einbindung & Aufruf sind in der Readme der jeweiligen Komponente hinterlegt.

- [Tabs](./src/tabs/README.md)
- [Modal](./src/modal/README.md)
- [Header](./src/header/README.md)
- [Footer](./src/footer/README.md)
- [Loader](./src/loader/README.md)
- [Slider](./src/slider/README.md)
- [Banners](./src/banners/README.md)
- [Tooltip](./src/tooltip/README.md)
- [Webtext](./src/webtext/README.md)
- [Timeline](./src/timeline/README.md)
- [Dropdown](./src/dropdown/README.md)
- [Akkordeon](./src/accordion/README.md)
- [Notifications](./src/notification/README.md)
- [Fuzzy Suchfeld](./src/fuzzy-input/README.md)

## Demo für Github Page

Mit folgendem Befehl werden alle Demos gebaut. Möchte man nur bestimmte Demos bauen, kann man in der [rollup.config.js](../../rollup.config.js) nicht benötigte Demos auskommentieren, sollte sie vor dem `push` aber wieder einkommentieren.

```bash
npm run compile:demos
```

## Test

```bash
npm install
npm test
```

## Deployment

Deployed & published wird immer die ganze Sammlung.

```bash
npm version [major|minor|patch] # increase version x.x.x => major.minor.patch
npm publish                     # upload to npm
git push
```