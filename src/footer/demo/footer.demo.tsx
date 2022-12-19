import Footer from '../footer.m';
import m from 'mithril';

//--- View -----

export const Demo: m.Component = {
    view() {
        return (
            <div class="footer-demo">
                <Footer />
            </div>
        );
    }
};

export default Demo as any;