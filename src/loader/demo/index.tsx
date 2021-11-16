import m from 'mithril';
import Loader from '..';

/** TS workaround */
const LoaderView = Loader as any;

const Root = {
    view() {
        return ([
           <LoaderView text="Daten werden geladen..." />
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);