import TabsView from '../tabs.m';
import m from 'mithril';

/** TS Workaround */
const Tabs = TabsView as any;

export const Demo = {
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

export default Demo;