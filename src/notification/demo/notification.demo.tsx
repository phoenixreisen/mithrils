import Notifications, { notes, STATUS } from '../notification.m';
import m from 'mithril';

//--- Variablen, Nodes & Konstanten -----

const msg = (status: STATUS|undefined) => {
    return {
        text: 'Gut geklickt, Brudi!',
        status: status
    };
};

//--- Komponente -----

export const Demo = {
    view() {
        return (
            <div class="modal-demo">
                <div class="box">
                    <div class="pa3 ma2">
                        <a href="javascript:" onclick={() => notes.add(msg(undefined))}
                            title=" aufrufen"
                            class="btn btn--primary-dark">
                            Klick mich für Standard!
                        </a>
                    </div>
                    <hr />
                    <div class="pa3 ma2">
                        <a href="javascript:" onclick={() => notes.add(msg(STATUS.success))}
                            title=" aufrufen"
                            class="btn btn--success">
                            Klick mich für Erfolg!
                        </a>
                    </div>
                    <hr />
                    <div class="pa3 ma2">
                        <a href="javascript:" onclick={() => notes.add(msg(STATUS.error))}
                            title=" aufrufen"
                            class="btn btn--danger">
                            Klick mich für Fehler!
                        </a>
                    </div>
                    <hr />
                </div>

                <Notifications list={notes} />
            </div>
        );
    }
};

export default Demo;