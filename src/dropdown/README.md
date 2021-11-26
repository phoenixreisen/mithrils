# Phoenix Dropdown

Phoenix Dropdown, umgesetzt mit Mithril.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/dropdown
```

## Anwendung

```js
// entweder CommonJS
const Dropdown = require('@phoenixreisen/dropdown');

// oder ES6+
import Dropdown from '@phoenixreisen/dropdown';
```

#### Aufruf

```js
// Hyperscript bzw. Javascript
const el1 = m('div');
const el2 = m('div');
const el3 = m('a');

m(Dropdown, { title: 'Optionen' }, [
    el1,
    el2,
    el3
]);

// JSX
<Dropdown title="Optionen">
    <el1 />
    <el2 />
    <el3 />
</Dropdown>
```

## Test

```bash
npm install
npm run test
```

## Deployment

```bash
[npm install]                       # Abhängigkeiten installieren
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```