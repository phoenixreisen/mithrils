import m from 'mithril';
import mq from "mithril-query";

// Will be generated, when calling npm test
import { Notification, Notifications, notes } from '../../../testfiles/notification/index.m.js';

Object.assign(global, m);

describe('#1 - Die Komponente', () => {
    const state = { show: true };

    const Success = mq({
        view: () => m(Notification, {
            toggle: () => (state.show = false),
            text: 'Erfolgreich gespeichert!',
            status: 'success',
        })
    });
    const Failure = mq({
        view: () => m(Notification, {
            toggle: () => (state.show = false),
            text: 'Vorgang konnte nicht durchgeführt werden!',
            status: 'error',
        })
    });
    const Info = mq({
        view: () => m(Notification, {
            toggle: () => (state.show = false),
            text: 'Ich bin ein Bibabutzemann!',
        })
    });

    it('sollte "success" wie erwartet rendern', () => {
        Success.should.have('.fas.fa-check');
        Success.should.have('.notification.notification--success');
        Success.should.not.have('.notification.notification--error');
        Success.should.contain('Erfolgreich gespeichert!');
    });
    it('sollte "error" wie erwartet rendern', () => {
        Failure.should.have('.fas.fa-exclamation-triangle');
        Failure.should.have('.notification.notification--error');
        Failure.should.not.have('.notification.notification--success');
        Failure.should.contain('Vorgang konnte nicht durchgeführt werden!');
    });
    it('sollte ohne Statusangabe eine Info rendern', () => {
        Info.should.have('.fas.fa-info-circle');
        Info.should.have('.notification.notification--primary');
        Info.should.contain('Ich bin ein Bibabutzemann!');
    });
});

describe('#2 - Die Komponente', () => {
    const state = { show: true };

    it('sollte ohne Parameter "test" nicht renderbar sein', () => {
        expect(() => {
            mq(m(Notification, {
                toggle: () => (state.show = false),
            }));
        }).toThrow();
    });

    /**
     * Jasmine kriegt nur eine Exception hin.
     */
    // it('sollte ohne Parameter "toggle()" nicht renderbar sein', () => {
    //     expect(() => {
    //         mq(m(Notification, {
    //             text: 'Ich bin ein Bibabutzemann!',
    //         }));
    //     }).toThrow();
    // });
});

describe('#3 - Die Liste', () => {
    const LIST = notes;

    LIST.add({ text: "Note 1", status: "success" });
    LIST.add({ text: "Note 2", status: "error" });
    LIST.add({ text: "Note 3", status: "success" });

    const Notes = mq({
        view: () => m(Notifications, { list: LIST })
    });

    it('sollte alles durchrendern', () => {
        Notes.should.have('.notification--error');
        Notes.should.have('.notification--success');
        Notes.should.contain('Note 1');
        Notes.should.contain('Note 2');
        Notes.should.contain('Note 3');
    });
});