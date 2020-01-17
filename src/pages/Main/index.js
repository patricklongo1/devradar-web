/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';
import DevList from '../../components/DevList';

import { Content } from './styles';

export default function Main() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');

            setDevs(response.data);
        }
        loadDevs();
    }, []);

    return (
        <>
            <Header />
            <Content>
                <RegisterForm devs={devs} setDevs={setDevs} />
                <DevList devs={devs} />
            </Content>
        </>
    );
}
