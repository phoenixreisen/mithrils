# Phoenix Footer

Standard-Footer für diverse (standalone) Phoenix-Applikationen bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/footer/

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/footer
```

## Anwendung

#### Aufruf

```ts
import Footer from '@phoenixreisen/footer';

<Footer headline="für etwas Vorfreude" env="[staging|production]" />

//oder

m(Footer, { headline:"für etwas Vorfreude", env:"[staging|production]" });
```

Wird für `env` "staging" angegeben, wird `border-top` gelb eingefärbt.

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

## Github Page

Demo kann manuell mittels Rollup gebaut werden und liegt komplett in `/docs`.

```bash
[npm install]
npm run compile:example
```

Nach `git push` automatisch zu erreichen unter:
https://phoenixreisen.github.io/footer/