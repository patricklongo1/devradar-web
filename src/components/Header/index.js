import React from 'react';
import { Container, Content } from './styles';

import history from '../../services/history';

export default function Header() {
    function handleHome() {
        history.push('/');
    }

    return (
        <Container>
            <Content>
                <button type="button" onClick={handleHome}>
                    <h1>DEV-RADAR</h1>
                </button>
            </Content>
        </Container>
    );
}
