/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { Register, InputBlock, InputGroup, SendButton } from './styles';

export default function RegisterForm({ devs, setDevs }) {
    const [githubUser, setGithubUser] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/devs', {
                github_username: githubUser,
                techs,
                latitude,
                longitude,
            });

            setDevs([...devs, response.data]);

            setGithubUser('');
            setTechs('');

            toast.success(`DEV ${response.data.name} cadastrado com sucesso!`);
        } catch (error) {
            toast.error('Falha ao cadastrar DEV. Verifique os dados!');
        }
    }

    return (
        <Register>
            <strong>Cadastrar</strong>
            <form onSubmit={handleSubmit}>
                <InputBlock>
                    <label htmlFor="github_username">Usuário do GITHUB</label>
                    <input
                        name="github_username"
                        id="github_username"
                        required
                        value={githubUser}
                        onChange={e => setGithubUser(e.target.value)}
                    />
                </InputBlock>

                <InputBlock>
                    <label htmlFor="techs">Tecnologias</label>
                    <input
                        name="techs"
                        id="techs"
                        required
                        value={techs}
                        onChange={e => setTechs(e.target.value)}
                    />
                </InputBlock>

                <InputGroup>
                    <InputBlock>
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            name="latitude"
                            id="latitude"
                            required
                            value={latitude}
                            onChange={e => setLatitude(e.target.value)}
                        />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="longitude">Longitude</label>
                        <input
                            name="longitude"
                            id="longitude"
                            required
                            value={longitude}
                            onChange={e => setLongitude(e.target.value)}
                        />
                    </InputBlock>
                </InputGroup>
                <SendButton type="submit">Enviar</SendButton>
            </form>
        </Register>
    );
}

RegisterForm.propTypes = {
    devs: PropTypes.array.isRequired,
    setDevs: PropTypes.func.isRequired,
};
