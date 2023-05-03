import { existsSync } from 'fs';
import mq from "mithril-query";
import test from "ospec";
import m from 'mithril';

import { Config, InternFooter } from '../../../testfiles/footer/index.m.js';

Object.assign(global, m);

test.spec('Footer', () => {
    
    test('sollte korrekt rendern & die Userinformationen anzeigen', () => {
        const footer = mq(InternFooter, { loggedIn: true, username: "Fabian" });

        footer.should.contain('eingeloggt');
        footer.should.contain('Fabian');
        footer.should.contain('abmelden');
        footer.should.not.contain('anmelden');
        footer.should.have(1, 'hr');
        footer.should.have(1, '.fa-sign-out-alt');
        footer.should.have(1, 'a[href="/cdn/mitarbeiter/login/"]');
    });

    test('sollte korrekt rendern & auf Login verlinken', () => {
        const footer = mq(InternFooter, { loggedIn: false });
        
        footer.should.contain('anmelden');
        footer.should.not.contain('abmelden');
        footer.should.not.contain('eingeloggt');
        footer.should.have(1, '.fa-sign-in-alt');
        footer.should.have(1, 'a[href="/cdn/mitarbeiter/login/"]');
    });
});