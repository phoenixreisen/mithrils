import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

// Will be generated, when calling npm test
import TabView from '../../../testfiles/tabs/index.m.js';

Object.assign(global, m);

test.spec('Initialisierungscheck', () => {

    test('2 Tabs mit nur 1 Komponente', () => {
        let hadInitError = false;
        try { mq(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [ m('div.tab1') ]); }
        catch(e) { hadInitError = true; }
        test(hadInitError).equals(true);
    });

    test('1 Tab mit 2 Komponenten', () => {
        let hadInitError = false;
        try { mq(TabView, { tabs: ['Tab 1'] }, [ m('div.tab1'), m('div.tab2') ]); }
        catch(e) { console.error(e); hadInitError = true; }
        test(hadInitError).equals(true);
    });

    test('2 Tabs mit 2 Komponenten', () => {
        let hadInitError = false;
        try { mq(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [ m('div.tab1'), m('div.tab2') ]); }
        catch(e) { hadInitError = true; }
        test(hadInitError).equals(false);
    });
});

test.spec('Verhaltenscheck', () => {

    test('Klickverhalten', () => {
        const Tabs = mq(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [ m('div.tab1'), m('div.tab2') ]);

        // Tabs checken
        test(Tabs.should.have('.tab-1')).equals(true);
        test(Tabs.should.have('.tab--link')).equals(true);
        test(Tabs.should.have('.tab-1.is-inactive-tab')).equals(true);
        test(Tabs.should.have('.tab-0.is-active-tab')).equals(true);
        test(Tabs.should.not.have('.tab-1.is-active')).equals(true);
        // Content checken
        test(Tabs.should.have('.tab-content-0.is-visible-tab')).equals(true);
        test(Tabs.should.have('.tab-content-1.is-hidden-tab')).equals(true);
        // zu Tab 2 wechseln
        Tabs.click('.tab-1');
        // Tabs checken
        test(Tabs.should.have('.tab-1.is-active-tab')).equals(true);
        test(Tabs.should.have('.tab-0.is-inactive-tab')).equals(true);
        // Content checken
        test(Tabs.should.have('.tab-content-0.is-hidden-tab')).equals(true);
        test(Tabs.should.have('.tab-content-1.is-visible-tab')).equals(true);
        // Wieder zu Tab 1
        Tabs.click('.tab-0');
        // Tabs checken
        test(Tabs.should.have('.tab-0.is-active-tab')).equals(true);
        test(Tabs.should.have('.tab-1.is-inactive-tab')).equals(true);
        // Content checken
        test(Tabs.should.have('.tab-content-1.is-hidden-tab')).equals(true);
        test(Tabs.should.have('.tab-content-0.is-visible-tab')).equals(true);
    });

    test('Single Tab Check', () => {
        const Tabs = mq(m(TabView, { tabs: ['Tab 1'] }, [ m('div.tab1') ]));
        test(Tabs.should.not.have('.tab--link')).equals(true);
    });
});