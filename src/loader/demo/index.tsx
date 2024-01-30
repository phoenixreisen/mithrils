import Loader from '../loader.m';
import m from 'mithril';

export const Demo = {

    view() {
        return ([
            <h3>Standard Loader</h3>,
            <Loader text="Demo wird geladen..." />,
        
            <h3>Loader mit Gif</h3>,
            <Loader text="Demo wird geladen..." showGif />,
        
            <h3>Loader ohne Text</h3>,
            <Loader noText={true} />,
        
            <h3>Loader mit Gif ohne Text</h3>,
            <Loader noText={true} showGif />,
        
            <h3>Loader als Overlay</h3>,
            <div style={{ position: 'relative', width: '100%', border: '1px solid black' }}>
                <Loader type="overlay" text="Demo wird geladen..." />
        
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
            </div>,
        
            <h3>Loader als Overlay mit Gif</h3>,
            <div>Das Gif sollte nicht mit dem Overlay verwendet werden. Sieht nicht gut aus. Aber es ginge.</div>,
            <div style={{ position: 'relative', width: '100%', border: '1px solid black', marginTop: '1rem' }}>
                <Loader type="overlay" text="Demo wird geladen..." showGif />
        
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '1rem' }}>
                    Loader als Overlay über gesamten relativen Container
                </div>
            </div>
        ]);
    }
} as any;

const Root: m.Component = {
    view() {
        return <Demo />;
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);