import React, { useState} from 'react';
import './Login.css';


import api from './../services/api';

import logo from './../assets/logo-tindev.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        // console.log(username)
        const response = await api.post('/devs', {
            username
        })
        
        const { _id  } = response.data

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                 <img src={logo} alt="Tindev" />
                <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Digite seu usúario no GitHub"
                />
                <button type="submit">Enviar</button>
            </form>

        </div>
    );
}
