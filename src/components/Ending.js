import React from 'react';
import '../App.css';

class Ending extends React.Component {

    render() {
        return (
            <div>
                <p>
                    Votre participation de {this.props.tiptip} € a bien été enregistré !<br />
                    Votre adresse email {this.props.hello} sera utilisée pour toute communication
                </p>
                <button onClick={this.props.hihi}>Recommencer</button>
            </div>
        );
    }
}

export default Ending;
