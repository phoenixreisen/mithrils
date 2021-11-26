import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

const components = [
    'tabs',
    'loader',
    'header',
    'footer',
    'banners',
    'dropdown',
    'accordion',
    // 'modal',
    // 'slider',
    // 'notification',
].map(current => {
    const filename = 'index';

    return {
        input: `./src/${current}/${filename}.ts`,

        output: {
            format: 'es',
            file: `./testfiles/${current}/${filename}.m.js`,
        },
        plugins: [
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
            'mithril',
            'clipboard',
            '@phoenixreisen/notification'
        ]
    };
});

export default components;