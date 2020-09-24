import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Choices from './Choices';

class App extends React.Component {
    state = {
        numeroEcran: 1,
        username: '',
        password: '',
        montant: 0
    }

    handleRestart = () => {
        this.setState({
            numeroEcran: 1,
            username: '',
            password: '',
            montant: 0
        })
    }

    handleGoEcranDynamic = (numero) => () => {
        this.setState({
            numeroEcran: numero
        })
    }

    handleLogin = () => {
        if (this.state.username == 'projet@project.com' && this.state.password == 'topito') {
            this.setState({
                numeroEcran: 3
            })
        }
    }

    handleGoEcran5Dynamic = (valeur) => () => {
        this.setState({
            montant: valeur,
            numeroEcran: 5
        })
    }

    handleChangeDynamic = (nomDeLaVariable) => (event) => {
        this.setState({
            [nomDeLaVariable]: event.target.value
        })
    }

    render() {
        let ecranNumero1 = (
            <Home notreHandle={this.handleGoEcranDynamic(2)} />
        );

        let ecranNumero2 = (
            <Login 
            toto={this.state.username}
            tata={this.state.password}
            coucou={this.handleChangeDynamic}
            toptop={this.handleLogin}
             />
        );

        let ecranNumero3 = (
            <Choices 
            toto={this.handleGoEcran5Dynamic}
            tata={this.handleGoEcranDynamic}
            />
        );

        let ecranNumeroFin = (
            <div>
                <p>
                    Votre participation de {this.state.montant} € a bien été enregistré !<br />
                    Votre adresse email {this.state.username} sera utilisée pour toute communication
                </p>
                <button onClick={this.handleRestart}>Recommencer</button>
            </div>
        );

        let ecranNumero4 = (
            <div>
                <input type="number" value={this.state.montant} onChange={this.handleChangeDynamic('montant')}  /><br/>
                <button onClick={this.handleGoEcranDynamic(5)}>Valider</button>
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
