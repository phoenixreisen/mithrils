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
    'modal',
    'header',
    'footer',
    'slider',
    'tooltip',
    'timeline',
    'accordion',
    'notification',
    // 'banners', hat keine Demo
    // 'dropdown', hat keine Demo
].map(current => {
    const target = 'docs';
    const foldername = 'demo';

    return {
        input: `./src/${current}/${foldername}/index.tsx`,

        output: {
            name: 'bundle',
            format: 'iife',
            sourcemap: true,
            file: `./${target}/${current}/demo.min.js`,
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
                    {src:`./src/${current}/**/*.png`, dest:`./${target}/${current}/`},
                    {src:`./src/${current}/**/*.jpg`, dest:`./${target}/${current}/`},
                    {src:`./src/${current}/**/*.svg`, dest:`./${target}/${current}/`},
                    {src:`./src/${current}/${foldername}/index.html`, dest:`./${target}/${current}/`},
                ]
            })
        ]
    };
});

export default demos;