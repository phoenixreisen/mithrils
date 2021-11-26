import { Header } from '../../../testfiles/header/index.m.js';
import { existsSync } from 'fs';
import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

/** Global Scope Stuff */
Object.assign(global, m, { location: {
    host: 'www.phoenixreisen.com',
    protocol: 'http:',
    pathname: '/'
}});

test.spec('Initialisierungscheck', () => {

    test('Logodatei vorhanden', () => {
        const fileExists = existsSync('src/header/phx.logo.svg');
        test(fileExists).equals(true);
    });
});

test.spec('Header', () => {

    test('zeigt "Version" nur an, wenn Parameter gegeben ist', () => {
        const renderWithoutVersion = mq(Header);
        const renderWithVersion = mq(Header, { version: '1.0.0'});
        renderWithoutVersion.should.not.have('.header__version');
        renderWithVersion.should.have('.header__version');
    });

    test('rendert Logo korrekt', () => {
        const header = mq({ view: () => m(Header) });

        console.log();

        header.should.have('.header__logo');
        header.should.have('.header__logo > img');
        header.should.have('a[href="http:\/\/www.phoenixreisen.com"]');
        test(/^[0-9A-Za-z]+\.svg$/.test(header.first('.header__logo > img').getAttribute('src'))).equals(true);

        const header2 = mq({ view: () => m(Header, { url: 'https://test.url.de' }) });
        header2.should.have('a[href="https://test.url.de"]');
        header2.should.have('.header__logo');
    });
});