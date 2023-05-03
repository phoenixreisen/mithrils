import InternFooter from '../footer.intern.m';
import Footer from '../footer.m';
import m from 'mithril';

//--- View -----

export const Demo: m.Component = {
    
    view() {
        return (
            <div class="wrapper footer-demo">
                <h3 class="pt0">
                    Öffentlicher Footer
                </h3>
                <Footer />

                <h3 class="mt4">
                    Interner Footer
                </h3>
                <InternFooter 
                    loggedIn={true} 
                    username="Max Mustermann" 
                />
            </div>
        );
    }
};

export default Demo as any;