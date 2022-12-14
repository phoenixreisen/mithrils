import test from "ospec";
import mq from "mithril-query";
import m from 'mithril';

// Will be generated, when calling npm test
import TimeLineView from '../../../testfiles/timeline/index.m.js';

Object.assign(global, m);

test.spec('Timeline should', () => {

    test('render left sided with certain classes ', () => {

        const Timeline = mq({
            view: () => m(TimeLineView, { animated: false, position: 'left' }, [
                m('div', 'div 1'),
                m('div', 'div 2'),
                m('div', 'div 3'),
                m('div', 'div 4'),
            ])
        });

        Timeline.should.have(1, '.timeline');
        Timeline.should.have(1, '.timeline--left');
        Timeline.should.have(1, '.timeline-axis');
        Timeline.should.have(4, '.timeline-circle');

        Timeline.should.have(4, '.timeline-content');
        Timeline.should.not.have('.timeline-content--left');
        Timeline.should.not.have('.timeline-content--right');

        Timeline.should.have(4, '.timeline-box');
        Timeline.should.have(4, '.timeline-left-box');
        Timeline.should.not.have('.timeline-center-box');

        Timeline.redraw();
        Timeline.should.have(1, '.timeline--static');

        const contents = Timeline.find('.timeline-content');
        const filled = contents.filter(el => el.innerHTML !== '');
        test(filled.length).equals(4);
    });

    test('render centered with certain classes', () => {

        const Timeline = mq({
            view: () => m(TimeLineView, { animated: false, position: 'center' }, [
                m('div', { class: 'element' }, 'div 1'),
                m('div', { class: 'element' }, 'div 2'),
                m('div', { class: 'element' }, 'div 3'),
                m('div', { class: 'element' }, 'div 4'),
            ])
        });

        Timeline.should.have(1, '.timeline');
        Timeline.should.have(1, '.timeline--center');
        Timeline.should.have(1, '.timeline-axis');
        Timeline.should.have(4, '.timeline-circle');

        Timeline.should.have(8, '.timeline-content');
        Timeline.should.have(4, '.timeline-content--left');
        Timeline.should.have(4, '.timeline-content--right');

        Timeline.should.have(4, '.timeline-box');
        Timeline.should.have(4, '.timeline-center-box');
        Timeline.should.not.have('.timeline-left-box');

        Timeline.should.have(4, '.element');

        const contents = Timeline.find('.timeline-content');
        test(contents[0].innerHTML).notEquals('');
        test(contents[1].innerHTML).equals('');
        test(contents[2].innerHTML).equals('');
        test(contents[3].innerHTML).notEquals('');
        test(contents[4].innerHTML).notEquals('');
        test(contents[5].innerHTML).equals('');
        test(contents[6].innerHTML).equals('');
        test(contents[7].innerHTML).notEquals('');
    });


    test('have animated class', () => {

        const Timeline = mq({
            view: () => m(TimeLineView, { animated: true, position: 'center' }, [
                m('div', { class: 'element' }, 'div 1'),
            ])
        });

        Timeline.redraw();
        Timeline.should.have(1, '.timeline--animated');
    });

    test('have 4 seperated lines', () => {

        const Timeline = mq({
            view: () => m(TimeLineView, { animated: false, position: 'left', line: 'separated' }, [
                m('div', { class: 'element' }, 'div 1'),
                m('div', { class: 'element' }, 'div 2'),
                m('div', { class: 'element' }, 'div 3'),
                m('div', { class: 'element' }, 'div 4'),
            ])
        });

        Timeline.should.have(4, '.timeline-axis');
    });
});