/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
    Container,
    Register,
    InputBlock,
    InputGroup,
    SendButton,
    Devs,
    DevList,
    UserInfo,
} from './styles';

export default function Main() {
    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container>
            <Register>
                <strong>Cadastrar</strong>
                <form onSubmit={handleSubmit}>
                    <InputBlock>
                        <label htmlFor="github_username">
                            Usuário do GITHUB
                        </label>
                        <input
                            name="github_username"
                            id="github_username"
                            required
                        />
                    </InputBlock>

                    <InputBlock>
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </InputBlock>

                    <InputGroup>
                        <InputBlock>
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required />
                        </InputBlock>
                    </InputGroup>
                    <SendButton type="submit">Enviar</SendButton>
                </form>
            </Register>

            <Devs>
                <DevList>
                    <li>
                        <header>
                            <img
                                src="https://avatars2.githubusercontent.com/u/51893683?s=460&v=4"
                                alt="Patrick Longo"
                            />
                            <UserInfo>
                                <strong>Patrick Longo</strong>
                                <span>ReactJS, React-Native, Node.js</span>
                            </UserInfo>
                        </header>
                        <p>
                            Atualmente cursando Bootcamp da RocketSeat. Estou
                            focado em dominar a stack de desenvolvimento de
                            JavaScript, utilizando Node.JS, ReactJS e
                            React-Native!
                        </p>
                        <a href="https://github.com/patricklongo1">
                            Acessar perfil no GitHub
                        </a>
                    </li>

                    <li>
                        <header>
                            <img
                                src="https://avatars2.githubusercontent.com/u/51893683?s=460&v=4"
                                alt="Patrick Longo"
                            />
                            <UserInfo>
                                <strong>Patrick Longo</strong>
                                <span>ReactJS, React-Native, Node.js</span>
                            </UserInfo>
                        </header>
                        <p>
                            Atualmente cursando Bootcamp da RocketSeat. Estou
                            focado em dominar a stack de desenvolvimento de
                            JavaScript, utilizando Node.JS, ReactJS e
                            React-Native!
                        </p>
                        <a href="https://github.com/patricklongo1">
                            Acessar perfil no GitHub
                        </a>
                    </li>

                    <li>
                        <header>
                            <img
                                src="https://avatars2.githubusercontent.com/u/51893683?s=460&v=4"
                                alt="Patrick Longo"
                            />
                            <UserInfo>
                                <strong>Patrick Longo</strong>
                                <span>ReactJS, React-Native, Node.js</span>
                            </UserInfo>
                        </header>
                        <p>
                            Atualmente cursando Bootcamp da RocketSeat. Estou
                            focado em dominar a stack de desenvolvimento de
                            JavaScript, utilizando Node.JS, ReactJS e
                            React-Native!
                        </p>
                        <a href="https://github.com/patricklongo1">
                            Acessar perfil no GitHub
                        </a>
                    </li>
                </DevList>
            </Devs>
        </Container>
    );
}
