import React from 'react';
import '../App.css';
import GrosContext from '../GrosContext';

class Ending extends React.Component {
    static contextType = GrosContext;

    render() {
        return (
            <div>
                <p>
                    Votre participation de {this.props.tiptip} € a bien été enregistré !<br />
                    Votre adresse email {this.props.hello} sera utilisée pour toute communication
                </p>
                <p>
                    Rendez-vous à l'aniversaire à l'adresse : {this.context.adresse}
                </p>
                <button onClick={this.props.hihi}>Recommencer</button>
            </div>
        );
    }
}

export default Ending;
