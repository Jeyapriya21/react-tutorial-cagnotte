import React from 'react';
import '../App.css';

class UserAmount extends React.Component {

    render() {
        return (
            <div>
                <input type="number" value={this.props.taptap} onChange={this.props.toto('montant')}  /><br/>
                <button onClick={this.props.copcop(5)}>Valider</button>
            </div>
        );
    }
}

export default UserAmount;
