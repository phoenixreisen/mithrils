import m from 'mithril';
import Loader from '..';

const Root: m.Component = {
    view() {
        return ([
           <Loader text="Daten werden geladen..." />
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);