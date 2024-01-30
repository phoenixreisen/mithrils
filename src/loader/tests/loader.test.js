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

test.spec('Gif Loader', () => {

    test('should show Phoenix Ship Gif instead of Cuttlefish Icon as loading icon', () => {
        const Loader = mq(m(LoaderView, {
            noText: true,
            showGif: true,
            iconname: "fa-blublu",
            text: "ICH WERDE ANGEZEIGT",
        }));
        test(Loader.should.have('img')).equals(true);
        test(Loader.should.not.have('.fa-blublu')).equals(true);
        test(Loader.should.contain('ICH WERDE ANGEZEIGT')).equals(true);
    });
});

test.spec('No Text Loader', () => {

    test('should just show the icon without text', () => {
        const Loader = mq(m(LoaderView, {
            noText: true,
            showGif: false,
            iconname: "fa-blublu",
            text: "ICH WERDE NICHT ANGEZEIGT",
        }));
        test(Loader.should.have('img')).equals(true);
        test(Loader.should.have('.fa-blublu')).equals(true);
        test(Loader.should.not.have('.loader__spinner')).equals(true);
        test(Loader.should.not.contain('ICH WERDE NICHT ANGEZEIGT')).equals(true);
    });

    test('should just show the Loading Gif without text and no icon', () => {
        const Loader = mq(m(LoaderView, {
            noText: true,
            showGif: true,
            iconname: "fa-blublu",
            text: "ICH WERDE NICHT ANGEZEIGT",
        }));
        test(Loader.should.have('img')).equals(true);
        test(Loader.should.have('.loader__spinner')).equals(true);
        test(Loader.should.not.have('.fa-blublu')).equals(true);
        test(Loader.should.not.contain('ICH WERDE NICHT ANGEZEIGT')).equals(true);
    });
});