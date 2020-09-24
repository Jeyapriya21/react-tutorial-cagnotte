import React from 'react';
import { from } from 'rxjs';

class ParticipantService {

    list() {
        return from(fetch('https://xonatis.academy/react/api/api.php'));
    }

    register(firstname, lastname) {
        return from(fetch('https://xonatis.academy/react/api/api.php'), {
            method: 'POST',
            body : JSON.stringify({
                firstname: firstname,
                lastname: lastname
            })
        });
    }
}

export default React.createContext({
    dateDeMiseAJour: '2020-09-24 à 13h52',
    adresse: '49 rue de Pnthieu, 75008 Paris',
    participantService: new ParticipantService()
})
