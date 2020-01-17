import styled from 'styled-components';

export const Container = styled.div`
    width: 325px;
    height: 425px;
    background: #eee;
    border: 2px solid #00ff00;
    border-radius: 6px;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        background: #888;
        width: 100%;
        height: 210px;
        border-radius: 6px;
    }

    h1 {
        margin-top: 10px;
        color: #444;
        font-size: 32px;
    }
`;

export const Footer = styled.footer`
    margin: 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-align: center;
        font-size: 16px;
        color: #222;
    }

    a {
        margin-top: 20px;
        color: #4169e1;

        &:hover {
            color: green;
        }
    }
`;
