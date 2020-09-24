import React from 'react';
import '../App.css';

class Choices extends React.Component {

    render() {
        return (
        <div>
                <p>
                    Félicitations, votre êtes loggés !<br />
                    Veuillez sélectionner un montant ci-dessous pour la cagnotte de votre ami(e) :
                </p>
                <button onClick={this.props.toto(2)}>2 €</button>
                <button onClick={this.props.toto(5)}>5 €</button>
                <button onClick={this.props.toto(10)}>10 €</button>
                <button onClick={this.props.toto(20)}>20 €</button><br />
                <button onClick={this.props.tata(4)}>Autre ...</button>
            </div>
        );
    }
}

export default Choices;
