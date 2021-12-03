import Modal from './modal.demo';
import m from 'mithril';

const Root: m.Component<{}> = {
    view() {
        return m(Modal);
    },
};

const container = document.querySelector('.example-app');
container && m.mount(container, Root);