/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Footer } from './styles';

export default function Display({ image, title, text, url }) {
    return (
        <Container>
            <Header>
                <img src={image} alt="imagem" />
                <h1>{title}</h1>
            </Header>
            <Footer>
                <p>{text}</p>
                <a href={`http://localhost:3000/${url}`}>Saiba mais</a>
            </Footer>
        </Container>
    );
}

Display.propTypes = {
    image: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
