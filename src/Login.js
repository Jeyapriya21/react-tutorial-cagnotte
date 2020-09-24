import React from 'react';
import './App.css';

class Login extends React.Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.toto} onChange={this.props.coucou('username')} /><br/>
                <input type="password" value={this.props.tata} onChange={this.props.coucou('password')} /><br/>
                <button onClick={this.props.toptop}>Se connecter</button>
            </div>
        );
    }
}

export default Login;
