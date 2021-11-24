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
    const filename = 'index';

    return {
        input: `./src/${current}/${filename}.ts`,

        output: {
            format: 'es',
            exports: 'default',
            file: `./testfiles/${current}/${filename}.m.js`,
        },
        plugins: [
            typescript({
                module: 'esnext'
            })
        ],
        external: [
            'mithril'
        ]
    };
});

export default components;