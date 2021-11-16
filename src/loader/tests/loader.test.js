import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

// Will be generated, when calling npm test
import LoaderView from '../../../testfiles/loader/index.m.js';

test.spec('Static Loader', () => {
    Object.assign(global, m);

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.have('.loader')).equals(true);
        test(Loader.should.have('.loader__spinner')).equals(true);
        test(Loader.should.have('.fab.fa-cuttlefish.fa-spin')).equals(true);
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.contain('Daten werden geladen...')).equals(true);
        test(Loader.should.have('.fa-cuttlefish')).equals(true);
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, {text: 'WORK HARD, PLAY HARD', iconname: 'fas fa-blabla'}));
        test(Loader.should.contain('WORK HARD, PLAY HARD')).equals(true);
        test(Loader.should.have('.fas.fa-blabla')).equals(true);
    });
});

test.spec('Overlay Loader', () => {

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView, { type: "overlay" }));
        test(Loader.should.have('.loader.loader--overlay')).equals(true);
        test(Loader.should.have('.loader__spinner')).equals(true);
        test(Loader.should.have('.fab.fa-cuttlefish.fa-spin')).equals(true);
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        test(Loader.should.contain('Daten werden geladen...')).equals(true);
        test(Loader.should.have('.fa-cuttlefish')).equals(true);
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, {type: "overlay", text: "ICH BIN EIN OVERLAY", iconname: "fa-blublu"}));
        test(Loader.should.contain('ICH BIN EIN OVERLAY')).equals(true);
        test(Loader.should.have('.fa-blublu')).equals(true);
    });
});