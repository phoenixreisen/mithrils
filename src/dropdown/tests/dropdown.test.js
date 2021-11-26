import View, { closeOnEsc } from '../../../testfiles/dropdown/index.m.js';
import mq from 'mithril-query';
import test from 'ospec';
import m from 'mithril';

Object.assign(global, m);

test.spec('Dropdown', () => {
    const el1 = m('div.div1');
    const el2 = m('div.div2');
    const el3 = m('a.a1');

    const Dropdown = mq({ view: () => m(View, { title: 'Optionen' }, [ el1, el2, el3 ]) });
    const Dropdown2 = mq({ view: () => m(View, { title: 'Optionen', isOpen: true }, [ el1, el2, el3 ]) });

    test('should initialize correctly', () => {
        Dropdown.should.not.have('.dropdown--open');
        Dropdown2.should.have('.dropdown--open');
        // 3 Elemente hinzugefügt
        test(Dropdown.find('.dropdown-item').length).equals(3);
    });

    test('should show/use node attrs as expected', () => {
        const Dropdown = mq({ view: () => m(View, { title: 'Optionen', icon: 'fas-arrow-down' }, [ el1, el2, el3 ]) });
        Dropdown.should.contain('Optionen');
        Dropdown.should.have('.fas-arrow-down');
    });

    test('should open & close on mouse click', () => {
        Dropdown.click('.dropdown-item-1');
        Dropdown.should.have('.dropdown--open');
        Dropdown2.click('.dropdown-item-0');
        Dropdown2.should.not.have('.dropdown--open');
        Dropdown2.click('a');
        Dropdown2.should.have('.dropdown--open');
    });

    test('should close on escape keydown', () => {
        const Vnode = { state: { isOpen: true } };
        const Comp = mq({ view: () => m(View,
            { title: 'Optionen', isOpen: Vnode.isOpen },
            [ el1, el2, el3 ])
        });
        closeOnEsc(Vnode.state, { keyCode: 27 });
        Comp.redraw();
        Comp.should.not.have('.dropdown--open');
    });
});
