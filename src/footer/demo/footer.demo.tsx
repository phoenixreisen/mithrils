import FooterView from '../footer.m';
import m from 'mithril';

const Footer = FooterView as any;

//--- Komponente -----

export const Demo = {
    view() {
        return (
            <div class="footer-demo">
                <Footer />
            </div>
        );
    }
};

export default Demo;