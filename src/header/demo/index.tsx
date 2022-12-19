import { Header, Topbar } from '../index';
import m from 'mithril';

//--- View Types -----

type State = {
    open: boolean
}

type Attrs = {
    //...
}

//--- View Funktionen -----

const toggleNav = (state) => {
    state.open = !state.open;
};

//--- View -----

const Root: m.Component<Attrs, State> = {

    oninit({ state }) {
        state.open = false;
    },

    view({ state }) {
        return ([
            m('div', {class: 'wrapper wrapper--large'},
                m(Header, {
                    toggleNav: () => toggleNav(state),
                    version: 'Beispiel für Header & Sticky Topbar',
                }),
            ),
            m(Topbar, {
                name: 'Phoenix Demo App',
                backUrl: 'https://www.phoenixreisen.com',
                toggleNav: () => toggleNav(state),
                toggleAvatar: () => toggleNav(state),
            }),
        ]);
    },
};

m.mount(document.querySelector('.example-app') as Element, Root);