import { existsSync } from 'fs';
import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

import Footer, { Config } from '../../../testfiles/footer/index.m.js';

Object.assign(global, m);

test.spec('Dateicheck', () => {

    test('Facebook Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/facebook.png');
        test(fileExists).equals(true);
    });
    test('Instagram Icon vorhanden', () => {
        let fileExists = existsSync('src/footer/icons/insta-hashtag.png');
        test(fileExists).equals(true);

        fileExists = existsSync('src/footer/icons/instagram.png');
        test(fileExists).equals(true);
    });
    test('Phoenix Reisen Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/phoenixreisen.jpg');
        test(fileExists).equals(true);
    });
    test('TV Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/tv.png');
        test(fileExists).equals(true);
    });
    test('Twitter Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/twitter.png');
        test(fileExists).equals(true);
    });
    test('Xing Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/xing.png');
        test(fileExists).equals(true);
    });
    test('YT Icon vorhanden', () => {
        const fileExists = existsSync('src/footer/icons/youtube.png');
        test(fileExists).equals(true);
    });
});

test.spec('Oberflächencheck', () => {
    const footer = mq(Footer);

    test('Fallback Slogan wird gesetzt', () => {
        // mit Standard Headline
        const rendered = mq(Footer);
        rendered.should.contain('Sie finden uns auch auf');
        // mit eigener Headline
        const rendered2 = mq(Footer, { headline: 'blabla' });
        rendered2.should.contain('blabla');
        rendered2.should.not.contain('Sie finden uns auch auf');
    });

    test('Bestimmte CSS-Styling-Klassen sollten gesetzt sein', () => {
        footer.should.have(1, '.footer');
        footer.should.have(1, '.footer__media-links');
        footer.should.have(1, '.footer__media-icons');
        footer.should.have(1, '.footer__text');
        footer.should.have(1, '.footer__links');
        footer.should.have(1, '.footer__logos');
    })

    test('Social Media Links sind (irgendwo) gesetzt', () => {
        footer.should.have(`a[href="${Config.urls.PHXTV}"]`);
        footer.should.have(`a[href="${Config.urls.TWITTER}"]`);
        footer.should.have(`a[href="${Config.urls.YOUTUBE}"]`);
        footer.should.have(`a[href="${Config.urls.FACEBOOK}"]`);
        footer.should.have(`a[href="${Config.urls.INSTAGRAM}"]`);
        footer.should.have(`a[href="${Config.urls.PHXWEBSITE}"]`);
        footer.should.have(`a[href="${Config.urls.INSTAGRAM_HASHTAG}"]`);
    });

    test('Übergebene Social Media Links überschreiben interne', () => {
        const urls = { YOUTUBE: 'https://www.yt.de', INSTAGRAM: 'https://insta.com' };
        const rendered = mq(Footer, { urls: urls });
        // überschriebene
        rendered.should.have(`a[href="${urls.YOUTUBE}"]`);
        rendered.should.have(`a[href="${urls.INSTAGRAM}"]`);
        rendered.should.not.have(`a[href="${Config.urls.YOUTUBE}"]`);
        rendered.should.not.have(`a[href="${Config.urls.INSTAGRAM}"]`);
        // nicht überschriebene existieren weiterhin
        rendered.should.have(`a[href="${Config.urls.FACEBOOK}"]`);
        rendered.should.have(`a[href="${Config.urls.PHXWEBSITE}"]`);
    });

    test('Öffnungszeiten & Telefonnummer sind angegeben', () => {
        footer.should.contain('+49 (228) 9260-0');
        footer.should.contain('montags bis freitags von 09:00 bis 18:00 Uhr');
    })

    test('Pflichtlinks sind (irgendwo) vorhanden', () => {
        footer.should.contain('Impressum');
        footer.should.have('a[href="https://www.phoenixreisen.com/impressum.html"]');
        footer.should.contain('Datenschutzerklärung');
        footer.should.have('a[href="https://www.phoenixreisen.com/datenschutzerklaerung.html"]');
        footer.should.contain('AGB');
        footer.should.have('a[href="https://www.phoenixreisen.com/reise-und-geschaeftsbedingungen.html"]');
        footer.should.contain('Nutzungsbedingungen');
        footer.should.have('a[href="https://www.phoenixreisen.com/nutzungsbedingungen.html"]');
        footer.should.contain('Kontakt');
        footer.should.have('a[href="https://www.phoenixreisen.com/kontakt.html"]');
    });

    test('Staging wird markiert', () => {
        const staging = mq(Footer, { env: 'staging' });
        const production = mq(Footer, { env: 'production' });
        staging.should.have('footer.staging');
        production.should.not.have('footer.staging');
    });
});