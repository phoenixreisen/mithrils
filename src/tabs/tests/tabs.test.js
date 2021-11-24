import test from "ospec";
import mq from "mithril-query";
import m from 'mithril';

// Will be generated, when calling npm test
import TabView from '../../../testfiles/tabs/index.m.js';

Object.assign(global, m);

test('2 Tabs, 1 Komponente', () => {
    test(m(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [ m('div', 'div 1') ])).throws(Error);
});
test('1 Tab, 2 Komponenten', () => {
    test(m(TabView, { tabs: ['Tab 1'] }, [ m('div', 'div 1'), m('div', 'div 2') ])).throws(Error);
});
test('2 Tabs, 2 Komponenten', () => {
    let error = null;
    try { m(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [ m('div', 'div 1'), m('div', 'div 2') ]); }
    catch(e) { error = e; }
    test(error).equals(null);
});

test.spec('Verhaltenscheck', () => {

    test('Klickverhalten', () => {

        const Tabs = mq({
            view: () => m(TabView, { tabs: ['Tab 1', 'Tab 2'] }, [
                m('div', 'div 1'),
                m('div', 'div 2')
            ])
        });

        // Tabs checken
        Tabs.should.have('.tab-1');
        Tabs.should.have('.tab--link');
        Tabs.should.have('.tab-1.is-inactive-tab');
        Tabs.should.have('.tab-0.is-active-tab');
        Tabs.should.not.have('.tab-1.is-active-tab');
        // Content checken
        Tabs.should.have('.tab-content-0.is-visible-tab');
        Tabs.should.have('.tab-content-1.is-hidden-tab');
        // zu Tab 2 wechseln
        Tabs.click('.tab-1');
        // Tabs checken
        Tabs.should.have(1, '.tab-1.is-active-tab');
        Tabs.should.have(1, '.tab-0.is-inactive-tab');
        // Content checken
        Tabs.should.have('.tab-content-0.is-hidden-tab');
        Tabs.should.have('.tab-content-1.is-visible-tab');
        // Wieder zu Tab 1
        Tabs.click('.tab-0');
        // Tabs checken
        Tabs.should.have('.tab-0.is-active-tab');
        Tabs.should.have('.tab-1.is-inactive-tab');
        // Content checken
        Tabs.should.have('.tab-content-1.is-hidden-tab');
        Tabs.should.have('.tab-content-0.is-visible-tab');
    });

    test('Single Tab Check', () => {
        const Tabs = mq(m(TabView, { tabs: ['Tab 1'] }, [ m('div.tab1') ]));
        test(Tabs.should.not.have('.tab--link')).equals(true);
    });
});