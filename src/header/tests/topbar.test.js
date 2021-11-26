import { Topbar, checkPosition, getScrollOffset } from '../../../testfiles/header/index.m.js';
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

test.spec('Dateichecks', () => {

    test('Logodatei vorhanden', () => {
        const fileExists = existsSync('src/header/favicon.png');
        test(fileExists).equals(true);
    });
});

test.spec('Topbar', () => {

    test('wird korrekt ohne Buttons gerendert', () => {

        const rendered = mq({
            view: () => m(Topbar, {
                name: 'Phoenix Test App',
                faviconUrl: 'favicon.jpg',
                faviconTarget: 'meinereise.phoenixreisen.com',
                backUrl: 'phoenixreisen.com'
            })
        });
        rendered.should.contain('Phoenix Test App');
        rendered.should.have('.top-bar.noprint');
        rendered.should.have('img[src="favicon.jpg"]');
        rendered.should.have('a[href="phoenixreisen.com"]');
        rendered.should.have('a[href="meinereise.phoenixreisen.com"]');

        rendered.should.not.have('top-bar__avatar');
        rendered.should.not.have('top-bar__nav-btn');
        rendered.should.not.have('top-bar--visible');
    });

    test('wird korrekt mit Buttons gerendert', () => {
        const rendered = mq({
            view: () => m(Topbar, {
                name: 'Phoenix Test App II',
                toggleNav: () => console.info('nav toggled'),
                toggleAvatar: () => console.info('avatar toggled'),
            })
        });
        rendered.should.have('.top-bar__avatar.noprint');
        rendered.should.have('.top-bar__nav-btn.noprint');
    });

    test('wird eingeblendet, wenn state.isVisible true wird', () => {
        global.window.scrollY = 200;
        const state = {
            isVisible: false,
            $header: {
                offsetHeight: 199
            }
        };
        checkPosition(state);
        test(state.isVisible).equals(true);
    });
});