import typescript from '@rollup/plugin-typescript';

const components = [
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
    return {
        input: `./src/${current}/index.ts`,

        output: {
            format: 'es',
            name: 'bundle',
            file: `./testfiles/${current}/index.m.js`,
        },
        plugins: [
            typescript()
        ],
        external: [
            'mithril'
        ]
    };
});

export default components;