import m from 'mithril';
import Tabs from '..';

/** TS workaround */
const LoaderView = Tabs as any;

const Root = {
    view() {
        return ([
           <LoaderView text="Daten werden geladen..." />
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);