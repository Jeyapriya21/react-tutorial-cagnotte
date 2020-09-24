import React from 'react';
import '../App.css';
import GrosContext from '../GrosContext';

class Home extends React.Component {
    static contextType = GrosContext;

    state = {
        users: []
    }

    componentDidMount() {
        this.context.participantService.list().subscribe(tache => {
            tache.json().then(result => {
                this.setState({
                    users: result
                })
            })
        });
    }

    render() {
        return (
            <div>
                <p>
                    Bienvenue dans l'application de cagnotte de cadeaux d'anniversaire !<br />
                    Ce lien concerne la cagnotte de l'anniversaire de Sophie Dupont<br />
                        {this.context.adresse}
                </p>
        {this.state.users.map(user => (<div>#{user.id} {user.firstname} {user.lastname}</div>))}
        <br />
                <button onClick={this.props.notreHandle}>Participer</button>
            </div>
        );
    }
}

export default Home;
