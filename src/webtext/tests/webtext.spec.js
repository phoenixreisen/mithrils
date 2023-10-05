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

    it('add a icon linked to webtext manager as suffix', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext3',
                showWebtextName: true,
                wtmLink: 'https://www.phoenixreisen.com',
                wtmLinkTitle: 'Phoenix Website aufrufen',
            }),
        });
        Webtext.should.have('.webtext a');
        Webtext.should.have('.fa-external-link-alt');
        Webtext.should.have(`a[title="Phoenix Website aufrufen"]`);
        Webtext.should.contain('Webtext ändern');
    });

    it('show webtextName in wtmLink title', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext3',
                showWebtextName: true,
                wtmLink: 'https://www.phoenixreisen.com',
            }),
        });
        Webtext.should.have(`a[title="webtext3 im Webtext-Manager öffnen"]`);
    });

    it('only show wtm link when showWebtextName is set', () => {
        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                webtextName: 'webtext3',
                wtmLink: 'https://www.phoenixreisen.com',
                wtmLinkTitle: 'Phoenix Website aufrufen',
                showWebtextName: false,
            }),
        });
        Webtext.should.not.have('.webtext a');
        Webtext.should.not.have('.fa-external-link-alt');
        Webtext.should.not.have(`a[title="Phoenix Website aufrufen"]`);
        Webtext.should.not.contain('Webtext ändern');
    });

    it('shows the alternative text if one is given but no webtext could be found', () => {
        const altText = 'Ich werde stattdessen angezeigt';

        const Webtext = mq({
            view: () => m(WebtextView, {
                webtexts: Webtexts,
                showWebtextName: false,
                webtextName: 'not-found',
                altText: altText
            }),
        });
        Webtext.should.have('.webtext');
        Webtext.should.contain(altText);
        Webtext.should.not.contain('Irgendwas anderes');
    });
});