import Tabs from '../tabs.m';
import m from 'mithril';

export const Demo: m.Component = {
    view() {
        return (
            <Tabs tabs={['Tab I', 'Tab II', 'Tab III']}>
                <div className="pa3">Tab I</div>
                <div className="pa3">Tab II</div>
                <div className="pa3">Tab III</div>
            </Tabs>
        );
    }
};

export default Demo as any;