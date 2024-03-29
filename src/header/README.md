# Phoenix Header

Header-Leiste, die das Phoenix-Logo sowie - bei Bedarf - einen App-/Versionsnamen darstellt. Zudem ist eine
Sticky Topbar enthalten, die eingeblendet wird, sobald der User nach unten über den Header hinaus scrollt.

Prinzipiell soll diese Komponente den Standard-Header für diverse (standalone) Phoenix-Services bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/mithrils/header/

## Anwendung

[Mithril](https://mithriljs.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

```tsx
import { Header, Topbar } from '@phoenixreisen/mithrils/header';

<Header
    version="Kabinenpräsente 1.0.0"             // wird standardmäßig unter dem Logo angezeigt
    url="https://www.phoenixreisen.com"         // verlinkt das Logo entsprechend
/>
<Topbar
    name="Slogan neben Logo"
    backUrl="https://www.phoenixreisen.com"
    toggleNav={() => console.info('toggled')}    // bewirkt, dass das Hamburger-Icon angezeigt wird
    toggleAvatar={() => console.info('toggled')} // bewirkt, dass das Avatar-Icon angezeigt wird
/>
```

Siehe [View Types](https://github.com/phoenixreisen/mithrils/blob/main/src/header/topbar.m.tsx) für alle Parameter.

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