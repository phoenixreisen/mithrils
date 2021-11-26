import mq from "mithril-query";
import test from "ospec";

// Will be generated
import { Sharebanner } from '../../../testfiles/banners/index.m.js';

Object.assign(global, {
    location: { href: '' }
});

test.spec('Sharebanner', () => {

    test('#1 - should initialize correctly', () => {
        const Banner = mq(Sharebanner);
        test(Banner.should.have('.share-banner')).equals(true);
        test(Banner.should.contain('Gerne weitersagen...')).equals(true);
        test(Banner.should.not.have('.share-banner--bg-less')).equals(true);
        test(Banner.should.not.have('.share-clipboard--clipped')).equals(true);
        test(Banner.should.not.have('.fa-clipboard-check')).equals(true);
        test(Banner.should.have('.share-clipboard')).equals(true);
        test(Banner.should.have('.fa-clipboard')).equals(true);
    });

    test('#2 - should be backgroundless when `noBackground` is `true`', () => {
        const Banner = mq(Sharebanner, { noBackground: true });
        test(Banner.should.have('.share-banner--bg-less')).equals(true);
    });

    test('#3 - should overwrite default values with attrs', () => {
        const headline = 'Hallo, I bims. Share me, bitte.';
        const mailsubject = 'Ich stehe im Emailbetreff!';
        const urltext = 'Ich bin der Urltext';
        const url = 'https://phoenix.com';
        const hashtags = 'blabla, blubu';
        const appname = 'Share App';

        const Banner = mq(Sharebanner, {
            headline, mailsubject, hashtags, urltext, url, appname,
        });
        test(Banner.should.contain(headline)).equals(true);
        test(Banner.should.have(`a[title="${appname} twittern"]`)).equals(true);
        test(Banner.should.have(`a[title="${appname} per Email empfehlen"]`)).equals(true);
        test(Banner.should.have(`a[title="${appname} per Facebook empfehlen"]`)).equals(true);
        test(Banner.should.have(`a[title="${appname} per WhatsApp empfehlen"]`)).equals(true);
        test(Banner.should.have(`a[href="https://www.facebook.com/sharer/sharer.php?u=${url}"]`)).equals(true);
        test(Banner.should.have(`a[href="mailto:?subject=${mailsubject}&body=${urltext}: ${url}"]`)).equals(true);
        test(Banner.should.have(`a[href="https://api.whatsapp.com/send?text=${urltext || ''}: ${url}"]`)).equals(true);
        test(Banner.should.have(`a[href="https://twitter.com/intent/tweet?text=${urltext || ''}&url=${url}&hashtags=${hashtags}"]`)).equals(true);
    });

    test('#4 - should toggle clipboard icon on click', async () => {
        const Banner = mq(Sharebanner);
        test(Banner.should.have('.share-clipboard')).equals(true);
        Banner.click('.share-clipboard');
        test(Banner.should.have('.fa-clipboard-check')).equals(true);
        test(Banner.should.have('.share-clipboard--clipped')).equals(true);
    });
});
