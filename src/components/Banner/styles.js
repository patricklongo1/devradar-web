import styled from 'styled-components';
import radar from '../../assets/radar.png';

export const Container = styled.div`
    margin-top: -50px;
    padding: 20px 0;
    width: 100%;
    height: 370px;
    border-bottom: 2px solid #00ff00;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
        url(${radar}) no-repeat;
    background-size: cover;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 80%;

    h1 {
        font-size: 62px;
        text-align: center;
        color: #fff;
    }
`;
