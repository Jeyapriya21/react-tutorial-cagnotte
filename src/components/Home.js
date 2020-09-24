import React from 'react';
import '../App.css';

class Home extends React.Component {

    render() {
        return (
            <div>
                <p>
                    Bienvenue dans l'application de cagnotte de cadeaux d'anniversaire !<br />
                        Ce lien concerne la cagnotte de l'anniversaire de Sophie Dupont
                </p>
                <button onClick={this.props.notreHandle}>Participer</button>
            </div>
        );
    }
}

export default Home;
