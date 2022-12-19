import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import url from '@rollup/plugin-url';

const components = [
    'tabs',
    'modal',
    'slider',
    'loader',
    'header',
    'footer',
    'banners',
    'dropdown',
    'tooltip',
    'timeline',
    'accordion',
    'fuzzy-input',
    'notification',
].map(current => {
    const filename = 'index';

    return {
        input: `./src/${current}/${filename}.ts`,

        output: {
            format: 'es',
            file: `./testfiles/${current}/${filename}.m.js`,
        },
        plugins: [
            scss(),
            resolve(),
            typescript({
                module: 'esnext',
                lib: ["es5", "es6", "esnext", "dom"]
            }),
            url({
                limit: 0
            }),
            copy({
                targets: [
                    {src:`./src/${current}/**/*.png`, dest:`./testfiles/${current}/`},
                    {src:`./src/${current}/**/*.jpg`, dest:`./testfiles/${current}/`},
                    {src:`./src/${current}/**/*.svg`, dest:`./testfiles/${current}/`},
                ]
            })
        ],
        external: [
            'swiper',
            'mithril',
            'clipboard',
            '@phoenixreisen/notification'
        ]
    };
});

export default components;