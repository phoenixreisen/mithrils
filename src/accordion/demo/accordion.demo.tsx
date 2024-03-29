import { Port1, Item1, Item2, Item3 } from './accordeon.contents';
import Accordion from '../accordion.m';
import m from 'mithril';

//--- View Variablen -----

const items = [
    Port1, Item1, Item2, Item3
];

//--- View -----

export const Demo: m.Component = {
    view() {
        return (
            <div class="acc-demo">
                <Accordion items={[0,1,2,1,3, 0,2,2,1,3, 0,1,2,3].map(current =>
                    items[current]
                )} />
            </div>
        );
    }
};

export default Demo;