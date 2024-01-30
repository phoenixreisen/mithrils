import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

// Will be generated, when calling npm test
import LoaderView from '../../../testfiles/loader/index.m.js';

test.spec('Static Loader', () => {
    Object.assign(global, m);

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView));
        Loader.should.have('.loader');
        Loader.should.have('.loader__spinner');
        Loader.should.have('.fab.fa-cuttlefish.fa-spin');
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        Loader.should.contain('Daten werden geladen...');
        Loader.should.have('.fa-cuttlefish');
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, {text: 'WORK HARD, PLAY HARD', iconname: 'fas fa-blabla'}));
        Loader.should.contain('WORK HARD, PLAY HARD');
        Loader.should.have('.fas.fa-blabla');
    });
});

test.spec('Overlay Loader', () => {

    test('should have some default classes', () => {
        const Loader = mq(m(LoaderView, { type: "overlay" }));
        Loader.should.have('.loader.loader--overlay');
        Loader.should.have('.loader__spinner');
        Loader.should.have('.fab.fa-cuttlefish.fa-spin');
    });

    test('should have a default text', () => {
        const Loader = mq(m(LoaderView));
        Loader.should.contain('Daten werden geladen...');
        Loader.should.have('.fa-cuttlefish');
    });

    test('should show customized text & icon', () => {
        const Loader = mq(m(LoaderView, {type: "overlay", text: "ICH BIN EIN OVERLAY", iconname: "fa-blublu"}));
        Loader.should.contain('ICH BIN EIN OVERLAY');
        Loader.should.have('.fa-blublu');
    });
});

test.spec('Gif Loader', () => {

    test('should show Phoenix Ship Gif instead of Cuttlefish Icon as loading icon', () => {
        const Loader = mq(m(LoaderView, {
            noText: false,
            showGif: true,
            iconname: "fa-blublu",
            text: "ICH WERDE ANGEZEIGT",
        }));
        Loader.should.have('img');
        Loader.should.have('.fa-blublu');
        Loader.should.have('.loader__text');
        Loader.should.have('.loader__spinner');
        Loader.should.contain('ICH WERDE ANGEZEIGT');
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
        Loader.should.have('.fa-blublu');
        Loader.should.not.have('img');
        Loader.should.not.have('.loader__text');
        Loader.should.not.contain('ICH WERDE NICHT ANGEZEIGT');
    });

    test('should just show the Loading Gif without text and no icon', () => {
        const Loader = mq(m(LoaderView, {
            noText: true,
            showGif: true,
            iconname: "fa-blublu",
            text: "ICH WERDE NICHT ANGEZEIGT",
        }));
        Loader.should.have('img');
        Loader.should.have('.loader__spinner');
        Loader.should.not.have('.fa-blublu');
        Loader.should.not.have('.loader__text');
        Loader.should.not.contain('ICH WERDE NICHT ANGEZEIGT');
    });
});