# Phoenix Header

Header-Leiste, die das Phoenix-Logo sowie - bei Bedarf - einen App-/Versionsnamen darstellt. Zudem ist eine
Sticky Topbar enthalten, die eingeblendet wird, sobald der User nach unten über den Header hinaus scrollt.

Prinzipiell soll diese Komponente den Standard-Header für diverse (standalone) Phoenix-Services bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/header/

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/header
```

```js
import {Header, Topbar} from '@phoenixreisen/header';

// JSX
<Header
    version="Kabinenpräsente 1.0.0"             // wird standardmäßig unter dem Logo angezeigt
    url="https://www.phoenixreisen.com"         // verlinkt das Logo entsprechend
/>
<Topbar
    backUrl="https://www.phoenixreisen.com"
    toggleNav={() => console.info('toggled')}    // bewirkt, dass das Hamburger-Icon angezeigt wird
    toggleAvatar={() => console.info('toggled')} // bewirkt, dass das Avatar-Icon angezeigt wird
/>

// Hyperscript
m(Header, {
    version: "Kabinenpräsente 1.0.0",           // wird standardmäßig unter dem Logo angezeigt
    url: "https://www.phoenixreisen.com"        // verlinkt das Logo entsprechend
});
m(Topbar, {
    backUrl: 'https://www.phoenixreisen.com',
    toggleNav: () => console.info('toggled'),    // bewirkt, dass das Hamburger-Icon angezeigt wird
    toggleAvatar: () => console.info('toggled'), // bewirkt, dass das Avatar-Icon angezeigt wird
});
```

## Test

```bash
[npm install]

npm run test
```

## Deployment

```bash
[npm install]                       # Ahängigkeiten installieren
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```