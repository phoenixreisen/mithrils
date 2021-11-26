# Phoenix Banners

TS/JS-Implementierungen diverser Banner. Styles kommen aus dem Design System.

- Link Banner
- Social Media Share Banner

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/banners
```

## Anwendung

```js
// entweder CommonJS
const Linkbanner = require('@phoenixreisen/banners/link.m');
const Sharebanner = require('@phoenixreisen/banners/share.m');

// oder ES6+
import Linkbanner from '@phoenixreisen/banners/link.m';
import Sharebanner from '@phoenixreisen/banners/share.m';

// Import alle vorhandenen Banner
// (nicht zu empfehlen, wenn mehrere Banner vorhanden, aber nicht alle benutzt werden)
import * as Banners from '@phoenixreisen/banners';
```

#### Aufruf

##### Sharebanner [Vorschau](http://localhost:3027/section-200.html)

```js
// Hyperscript
m(Sharebanner, {
    noBackground: true,
    headline: 'Hallo, I bims, der Share Banner.',
    mailsubject: 'Ich stehe im Emailbetreff!',
    urltext: 'Ich bin der Text vor der Url, wenn ich geshared werde.',
    url: 'https://phoenixreisen.com',
    hashtags: 'phx, reisen, kreuzfahrt',
    appname: 'Phoenix Kabinenpräsente',
});

// TSX
<Sharebanner
    noBackground="true"
    headline="Hallo, I bims, der Share Banner."
    mailsubject="Ich stehe im Emailbetreff!"
    urltext="Ich bin der Text vor der Url, wenn ich geshared werde."
    url="https://phoenixreisen.com"
    hashtags="phx, reisen, kreuzfahrt"
    appname="Phoenix Kabinenpräsente"
/>
```

##### Linkbanner [Vorschau](http://localhost:3027/section-200.html)

```js
// Hyperscript
m(Linkbanner, {
    text: "Immer über die besten Reisen auf dem Laufenden bleiben!",    //optional
    url: "https://www.phoenixreisen.com",                               //pflicht
    urltext: "Jetzt abonnieren",                                        //pflicht
});

// TSX
<Linkbanner
    text="Immer über die besten Reisen auf dem Laufenden bleiben!"      //optional
    url="https://www.phoenixreisen.com"                                 //pflicht
    urltext="Jetzt abonnieren"                                          //pflicht
/>
```

## Test

```bash
[npm install]
npm run test
```

## Deployment

```bash
[npm install]                       # Abhängigkeiten installieren
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```