import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

// Will be generated, when calling npm test
import { Notification, Notifications, notes } from '../../../testfiles/notification/index.m.js';

Object.assign(global, m);

test.spec('#1 - Die Komponente', () => {
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

    test('sollte "success" wie erwartet rendern', () => {
        Success.should.have('.fas.fa-check');
        Success.should.have('.notification.notification--success');
        Success.should.not.have('.notification.notification--error');
        Success.should.contain('Erfolgreich gespeichert!');
    });
    test('sollte "error" wie erwartet rendern', () => {
        Failure.should.have('.fas.fa-exclamation-triangle');
        Failure.should.have('.notification.notification--error');
        Failure.should.not.have('.notification.notification--success');
        Failure.should.contain('Vorgang konnte nicht durchgeführt werden!');
    });
    test('sollte ohne Statusangabe eine Info rendern', () => {
        Info.should.have('.fas.fa-info-circle');
        Info.should.have('.notification.notification--primary');
        Info.should.contain('Ich bin ein Bibabutzemann!');
    });
});

test.spec('#2 - Die Komponente', () => {
    const state = { show: true };

    test('sollte ohne Parameter "test" nicht renderbar sein', () => {
        test(m(Notification, { toggle: () => (state.show = false) })).throws(Error);
    });
    test('sollte ohne "toggle()"-Funktion nicht renderbar sein', () => {
        test(m(Notification, { text: 'Ich bin ein Bibabutzemann!' })).throws(Error);
    });
});

test.spec('#3 - Die Liste', () => {
    const LIST = notes;

    LIST.add({ text: "Note 1", status: "success" });
    LIST.add({ text: "Note 2", status: "error" });
    LIST.add({ text: "Note 3", status: "success" });

    const Notes = mq({
        view: () => m(Notifications, { list: LIST })
    });

    test('sollte alles durchrendern', () => {
        Notes.should.have('.notification--error');
        Notes.should.have('.notification--success');
        Notes.should.contain('Note 1');
        Notes.should.contain('Note 2');
        Notes.should.contain('Note 3');
    });
});