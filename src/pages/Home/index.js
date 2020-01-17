import React from 'react';

import radar from '../../assets/radar.png';
import rocket from '../../assets/rocket.jpg';
import codigo from '../../assets/codigo.jpg';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import BigButton from '../../components/BigButton';
import Display from '../../components/Display';

import { Container, ButtonContainer, DisplayContainer } from './styles';

export default function Home() {
    return (
        <Container>
            <Header />
            <Banner />
            <ButtonContainer>
                <BigButton />
            </ButtonContainer>
            <DisplayContainer>
                <Display
                    image={radar}
                    title="Encontre Devs"
                    text="Encontre os desenvolvedores próximos a você, que atuam com as tecnologias do seu interesse"
                    url="main"
                />
                <Display
                    image={rocket}
                    title="RocketSeat"
                    text="Patrocínio da empresa parceira RocketSeat, que sempre apoiou o DevRadar, e estará no próximo evento!"
                />
                <Display
                    image={codigo}
                    title="Bora Codar"
                    text="Em breve, nós teremos uma plataforma de treinamento online para quem está começando no mundo da programação"
                />
            </DisplayContainer>
        </Container>
    );
}
