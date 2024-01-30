# Phoenix Webtext

Mithril-Wrapper für Webtexte, um diese in verschiedenen Arten ausgegeben zu können.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/mithrils/webtext

## Installation

[Mithril](https://mithriljs.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/mithrils
```

## Anwendung

```tsx
import Webtext from '@phoenixreisen/mithrils/webtext';

// API

interface Attrs {
    cssClass?: string,                  // CSS-Klasse für das umgebende Div
    webtexts: Webtexts,                 // Das Webtext-Objekt mit allen Webtexten
    webtextName: string,                // Name des Webtextes, der ausgegeben werden soll
    asPlainText?: boolean,              // Ausgabe als HTML (gestript) oder PlainText
    showWebtextName?: boolean,          // Zeigt den Namen des Webtextes als "title"-Attribut an
    allowedHtmlTags?: Array<string>,    // Falls nicht gesetzt, wird ein intern gesetztes Set genommen (s. webtext.m.tsx)
    placeholders?: Array<[name, value]> // Platzhalter, die im Webtext ersetzt werden sollen. Siehe Demo.
}

// Aufruf

<Webtext 
    webtexts={
        'webtext1': 'Dies ist der erste Webtext im Webtext-Objekt.',
        'webtext2': 'Dies ist der zweite Webtext im Webtext-Objekt.',
        'webtext3': 'Dies ist der dritte Webtext im Webtext-Objekt.',
        'webtext4': 'Dies ist der vierte Webtext im Webtext-Objekt.',
        'webtext5': 
            `<div>
                <a href="https://www.phoenixreisen.com">Phoenixreisen</a> macht 
                in <span class="c-primary">Kreufzahrten</span>. Ich bekomme aber 
                keine <strong>Suite</strong> mehr. Das 'code'-Element, um <code><strong>dieses 
                Wort</strong></code> sollte gestript worden sein.
            </div>`
        ,
    }
    webtextName='webtext-example'
    cssClass="spez-webtext-style"
    asPlainText={false}
    showWebtextName={true}
    allowedHtmlTags={['a', 'span', 'strong', 'code']}
    placeholders={[
        ['{{name}}', 'Phoenix Reisen'],
        ['{{business}}', 'Kreuzfahrten'],
        ['{{standort}}', 'Bonn'],
    ]}
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