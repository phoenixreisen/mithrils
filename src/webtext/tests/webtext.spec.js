import mq from "mithril-query";
import m from 'mithril';

import WebtextView from '../../../testfiles/webtext/index.m.js';

describe('Webtext should', () => {
    Object.assign(global, m);

    const Webtexts = {
        'webtext1': 'Dies ist der erste Webtext im Webtext-Objekt.',
        'webtext2': 'Dies ist der zweite Webtext im Webtext-Objekt.',
        'webtext3': 'Dies ist der dritte Webtext im Webtext-Objekt.',
        'webtext4': 'Dies ist der vierte Webtext im Webtext-Objekt.',
        'webtext5': 
            `<div>
                <a href="https://www.phoenixreisen.com">Phoenixreisen</a> macht 
                in <span classname="c-primary">Kreufahrten</span>. Ich bekomme aber 
                keine <strong>Suite</strong> mehr. Das 'code'-Element, um <code><strong>dieses 
                Wort</strong></code> sollte gestript worden sein.
            </div>`,
    };

    it('render with certain classes', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext5',
                showWebtextName: true,
                cssClass: 'test-class',
                asPlainText: true
            }),
        });
        
        Webtext.should.have('.webtext');
        Webtext.should.have('.test-class');
        Webtext.should.contain(Webtexts.webtext5);
        Webtext.should.contain('<code>');
        Webtext.should.contain('<strong>');
    });

    it('output correct webtext of webtext object', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext3',
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.contain(Webtexts.webtext3);
    });

    it('show webtext name', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext3',
                showWebtextName: true,
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.have(`article[title="webtext3"]`);
    });

    it('render plain text', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext5', // enthält HTML
                asPlainText: true,
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.contain('<code>');
    });

    it('render html', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext5', // enthält HTML
                asPlainText: false,
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.not.contain('<code>');
    });

    it('insert given css class to root element', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext5', // enthält HTML
                cssClass: 'test-class',
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.have('.test-class');
    });
});