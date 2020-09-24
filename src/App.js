import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        numeroEcran: 1,
        username: '',
        password: '',
        montant: 0
    }

    handleGoEcran1 = () => {
        this.setState({
            numeroEcran: 1,
            username: '',
            password: '',
            montant: 0
        })
    }

    handleGoEcran2 = () => {
        this.setState({
            numeroEcran: 2
        })
    }

    handleGoEcran3 = () => {
        if (this.state.username == 'projet@project.com' && this.state.password == 'topito') {
            this.setState({
                numeroEcran: 3
            })
        }
    }

    handleGoEcran4 = () => {
        this.setState({
            numeroEcran: 4
        })
    }

    handleGoEcran52 = () => {
        this.setState({
            montant: 2,
            numeroEcran: 5
        })
    }

    handleGoEcran55 = () => {
        this.setState({
            montant: 5,
            numeroEcran: 5
        })
    }
    
    handleGoEcran510 = () => {
        this.setState({
            montant: 10,
            numeroEcran: 5
        })
    }

    handleGoEcran520 = () => {
        this.setState({
            montant: 20,
            numeroEcran: 5
        })
    }

    handleGoEcran5 = () => {
        this.setState({
            numeroEcran: 5
        })
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleChangeMontant = (event) => {
        this.setState({
            montant: event.target.value
        })
    }

    render() {
        let ecranNumero1 = (
            <div>
                <p>
                    Bienvenue dans l'application de cagnotte de cadeaux d'anniversaire !<br />
                        Ce lien concerne la cagnotte de l'anniversaire de Sophie Dupont
                </p>
                <button onClick={this.handleGoEcran2}>Participer</button>
            </div>
        );

        let ecranNumero2 = (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} /><br/>
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} /><br/>
                <button onClick={this.handleGoEcran3}>Se connecter</button>
            </div>
        );

        let ecranNumero3 = (
            <div>
                <p>
                    Félicitations, votre êtes loggés !<br />
                    Veuillez sélectionner un montant ci-dessous pour la cagnotte de votre ami(e) :
                </p>
                <button onClick={this.handleGoEcran52}>2 €</button>
                <button onClick={this.handleGoEcran55}>5 €</button>
                <button onClick={this.handleGoEcran510}>10 €</button>
                <button onClick={this.handleGoEcran520}>20 €</button><br />
                <button onClick={this.handleGoEcran4}>Autre ...</button>
            </div>
        );

        let ecranNumeroFin = (
            <div>
                <p>
                    Votre participation de {this.state.montant} € a bien été enregistré !<br />
                    Votre adresse email {this.state.username} sera utilisée pour toute communication
                </p>
                <button onClick={this.handleGoEcran1}>Recommencer</button>
            </div>
        );

        let ecranNumero4 = (
            <div>
                <input type="number" value={this.state.montant} onChange={this.handleChangeMontant}  /><br/>
                <button onClick={this.handleGoEcran5}>Valider</button>
            </div>
        );

        let ecran = null;
        if (this.state.numeroEcran == 1) {
            ecran = ecranNumero1;
        } else if (this.state.numeroEcran == 2) {
            ecran = ecranNumero2;
        } else if (this.state.numeroEcran == 3) {
            ecran = ecranNumero3;
        } else if (this.state.numeroEcran == 4) {
            ecran = ecranNumero4;
        } else if (this.state.numeroEcran == 5) {
            ecran = ecranNumeroFin;
        } else {
            ecran = null;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {ecran}
                </header>
            </div>
        );
    }
}

export default App;
