import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

const demos = [
    'tabs',
    'loader',
    // 'modal',
    // 'header',
    // 'footer',
    // 'slider',
    // 'banners',
    // 'dropdown',
    // 'accordion',
    // 'notification',
].map(current => {
    const foldername = 'demo';

    return {
        input: `./src/${current}/${foldername}/index.tsx`,

        output: {
            name: 'bundle',
            format: 'iife',
            sourcemap: true,
            file: `./${foldername}/${current}/demo.min.js`,
        },
        plugins: [
            scss(),
            css(),
            typescript({
                module: 'esnext',
                sourceMap: true,
            }),
            commonjs(),
            resolve(),
            url({
                limit: 0
            }),
            copy({
                targets: [
                    {src:`./src/${current}/**/*.png`, dest:`./docs/${current}/`},
                    {src:`./src/${current}/**/*.jpg`, dest:`./docs/${current}/`},
                    {src:`./src/${current}/**/*.svg`, dest:`./docs/${current}/`},
                    {src:`./src/${current}/${foldername}/index.html`, dest:`./${foldername}/${current}/`},
                ]
            })
        ]
    };
});

export default demos;