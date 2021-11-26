import mq from "mithril-query";
import test from "ospec";

// Will be generated
import { Linkbanner } from '../../../testfiles/banners/index.m.js';

test.spec('Linkbanner', () => {
    const text = 'Hol dir den geilsten Newsletter der Welt!';
    const urltext = 'Jetzt Phoenix Reisen NL abonnieren!';
    const url = 'https://www.phoenixreisen.com';

    test('#1 - should render correctly', () => {
        const Banner = mq(Linkbanner, { text, url, urltext });
        test(Banner.should.contain(text)).equals(true);
        test(Banner.should.contain(urltext)).equals(true);
        test(Banner.should.have(`a[href="${url}"]`)).equals(true);
        test(Banner.should.have('.link-banner')).equals(true);
        test(Banner.should.have('.link-banner__textbox')).equals(true);
    });

    test('#2 - should fail without url & urltext', () => {
        let error = false;
        try {
            mq(Linkbanner);
        } catch(e) {
            error = true;
        }
        test(error).equals(true);
    });

    test('#3 - should be renderable wihtout text attr', () => {
        let error = false;
        try {
            mq(Linkbanner, { url, urltext });
        } catch(e) {
            error = true;
        }
        test(error).equals(false);
    });
});