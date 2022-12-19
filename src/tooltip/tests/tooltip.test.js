import test from "ospec";
import mq from "mithril-query";
import m from 'mithril';

// Will be generated, when calling npm test
import TooltipView from '../../../testfiles/tooltip/index.m.js';

Object.assign(global, m);

test.spec('Tooltip should', () => {

    test('render with certain classes', () => {

        const Tooltip = mq({
            view: () => m(TooltipView, {
                text: 'Tooltip',
                tooltip: 'Hinweis!'
            })
        });

        Tooltip.should.have(1, '.tooltip');
        Tooltip.should.contain('Tooltip');
        Tooltip.should.contain('Hinweis!');

        Tooltip.should.have(1, '.tip');
        Tooltip.should.have(1, '.tip--below');
        Tooltip.should.have(1, '.tip--hidden');
        
        Tooltip.should.not.have('.tip--left');
        Tooltip.should.not.have('.tip--right');
        Tooltip.should.not.have('.tip--colored');
        Tooltip.should.not.have('.tip--component');
    });

    test('render different with parameters', () => {

        const Tooltip = mq({
            view: () => m(TooltipView, {
                text: 'Tooltip',
                color: 'success',
                position: 'left',
                tooltip: 'HINWEIS!'
                // TipComponent: m('div', {}, 'COMPONENT!'),s
            })
        });

        Tooltip.should.have(1, '.tooltip');
        Tooltip.should.contain('Tooltip');
        Tooltip.should.contain('HINWEIS!');

        Tooltip.should.have(1, '.tip--left');
        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.have(1, '.tip--colored');
        Tooltip.should.have(1, '.success');
        
        Tooltip.should.not.have('.tip--below');
        Tooltip.should.not.have('.tip--right');
        Tooltip.should.not.have('.tip--component');
    });

    test('render a component', () => {

        const Tooltip = mq({
            view: () => m(TooltipView, {
                text: 'Tooltip',
                position: 'right',
                TipComponent: m('div', {}, 'COMPONENT!'),
            })
        });

        Tooltip.should.have(1, '.tooltip');
        Tooltip.should.contain('Tooltip');
        Tooltip.should.contain('COMPONENT!');

        Tooltip.should.have(1, '.tip--right');
        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.have(1, '.tip--component');
        
        Tooltip.should.not.have('.tip--below');
        Tooltip.should.not.have('.tip--left');
        Tooltip.should.not.have('.tip--colored');
        Tooltip.should.not.have('.success');
    });

    test('change visibility on mouse event', () => {

        const Tooltip = mq({
            view: () => m(TooltipView, {
                text: 'Tooltip',
                position: 'right',
                TipComponent: m('div', {}, 'COMPONENT!'),
            })
        });

        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.not.have('.tip--visible');

        Tooltip.mouseenter('.tooltip');
        Tooltip.redraw();

        Tooltip.should.not.have('.tip--hidden');
        Tooltip.should.have(1, '.tip--visible');

        Tooltip.mouseleave('.tooltip');
        Tooltip.redraw();

        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.not.have('.tip--visible');
    });

    test('change visibility on click', () => {

        const Tooltip = mq({
            view: () => m(TooltipView, {
                event: 'click',
                text: 'Tooltip',
                position: 'right',
                TipComponent: m('div', {}, 'COMPONENT!'),
            })
        });

        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.not.have('.tip--visible');

        Tooltip.mouseenter('.tooltip');
        Tooltip.redraw();

        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.not.have('.tip--visible');

        Tooltip.click('.tooltip');
        Tooltip.redraw();

        Tooltip.should.not.have('.tip--hidden');
        Tooltip.should.have(1, '.tip--visible');

        Tooltip.mouseleave('.tooltip');
        Tooltip.redraw();

        Tooltip.should.not.have('.tip--hidden');
        Tooltip.should.have(1, '.tip--visible');

        Tooltip.click('.tooltip');
        Tooltip.redraw();

        Tooltip.should.have(1, '.tip--hidden');
        Tooltip.should.not.have('.tip--visible');
    });
});