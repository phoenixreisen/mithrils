import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

const demos = [
    'tabs',
    'loader',
    'modal',
    'header',
    'footer',
    'slider',
    'webtext',
    'tooltip',
    'timeline',
    'accordion',
    'fuzzy-input',
    'notification',
    // 'banners', keine Demo
    // 'dropdown', keine Demo
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
            typescript({
                compilerOptions: {
                    declaration: false,
                },
                sourceMap: true,
                module: 'esnext',
                filterRoot: `./src/${current}/`,
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