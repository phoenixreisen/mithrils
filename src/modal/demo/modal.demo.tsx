import { Item1 } from './modal.content';
import ModalView from '../modal.m';
import m from 'mithril';

//--- Variablen, Nodes & Konstanten -----

const Modal = ModalView as any;

//--- Komponente -----

export const Demo = {

    oninit({state}) {
        state.show = false;
    },

    view({state}) {
        return (
            <div class="modal-demo">
                <div class="box">
                    <a href="javascript:" onclick={() => state.show = true}
                        title="Modal aufrufen"
                        class="btn btn--link">
                        Klick mich!
                    </a>
                </div>
                {state.show &&
                    <Modal title="Modal Demo"
                        withCloseText={true}
                        toggle={() => (state.show = false)}
                        content={
                            <div>
                                <Item1 />
                            </div>
                        }
                        footer={
                            <div class="tr">
                                <button class="btn btn--secondary mr1"
                                    onclick={() => (state.show = false)}>
                                    Abbrechen
                                </button>
                                <button class="btn btn--primary ml1"
                                    onclick={() => (state.show = false)}>
                                    Verbindlich buchen
                                </button>
                            </div>
                        }>
                    </Modal>
                }
            </div>
        );
    }
};

export default Demo;