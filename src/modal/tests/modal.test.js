import test from "ospec";
import mq from "mithril-query";
import m from 'mithril';

// Will be generated, when calling npm test
import ModalView, { modalSizes } from '../../../testfiles/modal/index.m.js';

Object.assign(global, m);


/**
 * Muss gefixt werden. Mehr als eine Exception verursachen 
 * und abfangen zu wollen, führt zu sonderbarem Verhalten.
 */
// test('Modal sollte mit einer unbekannten Größe nicht aufrufbar sein', () => {
//     test(mq({ view: () => m(ModalView, { size: 'modal--35-32', content: m('div', 'content') }) })).throws(Error);
// });
// test('Modal sollte ohne Content nicht aufrufbar sein', () => {
//     test(mq({  view: () => m(ModalView, { title: "Inhaltloses Modal" }) })).throws(Error);
// });

test('Modal sollte, korrekt aufgerufen, keinen Fehler schmeißen', () => {
    let error = null;
    try { 
        mq({
            view: () => m(ModalView, { 
                size: 's9090', 
                content: m('div', 'content') 
            })
        });
    } catch(e) { 
        error = e;
    }    
    test(error).equals(null);
});

test.spec('#1 - Das Modal', () => {

    const state = {
        show: true
    };
    const Modal = mq({
        view: () =>
            m(ModalView, {
                title: "Test Modal",
                withCloseText: true,
                content: m('div', 'content'),
                footer: m('div', 'footer'),
                toggle: () => state.show = false,
            })
        });

    test('sollte sichtbar sein', () => {
        Modal.should.have('.modal.modal--visible');
        Modal.should.contain('Test Modal');
    });

    test('sollte bestimmte Gerüstklassen enthalten', () => {
        Modal.should.have('.modal__bg');
        Modal.should.have('.modal__header');
        Modal.should.have('.modal__content');
        Modal.should.have('.modal__footer');
    });

    test('sollte durch ein X wieder ausblendbar sein', () => {
        Modal.should.have('.modal__toggle');
        Modal.should.contain('schließen');
        Modal.click('.modal__toggle');
        test(state.show).equals(false);
    });

    test('sollte den übergebenen Content enthalten', () => {
        Modal.should.contain('content');
    })
    test('sollte den übergebenen Footer enthalten', () => {
        Modal.should.contain('footer');
    });
});

test.spec('#2 - Das Modal', () => {

    const Modal = mq({
        view: () => m(ModalView, {
            title: "Zweites Modal",
            content: m('div', 'content'),
        })
    });

    test('sollte nicht "schließen" enthalten', () => {
        Modal.should.not.contain('schließen');
    });
    test('sollte nicht über die Titelleiste togglebar sein', () => {
        Modal.should.not.have('.modal__toggle');
        Modal.should.have('.modal__headline');
        Modal.should.have('.modal__header');
    });
    test('sollte keinen Footer enthalten', () => {
        Modal.should.not.have('.modal__footer');
    });
    test('sollte den übergebenen Content enthalten', () => {
        Modal.should.have('.modal__content');
        Modal.should.contain('content');
    });
});