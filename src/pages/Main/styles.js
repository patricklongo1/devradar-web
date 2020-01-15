import styled from 'styled-components';
import { darken } from 'polished';
import background from '../../assets/background.jpg';

export const Container = styled.div`
    min-height: 100%;
    background: #000;
`;

export const Content = styled.div`
    min-height: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 60px 90px;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05)),
        url(${background}) no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 1000px) {
        flex-direction: column;

        main {
            margin-top: 30px;
        }

        aside {
            width: 100%;
        }
    }
`;

export const Register = styled.aside`
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;
    margin-right: 30px;

    strong {
        font-size: 20px;
        text-align: center;
        display: block;
        color: #333;
    }

    form {
        margin-top: 30px;
    }
`;

export const InputBlock = styled.div`
    label {
        color: #acacac;
        font-size: 14px;
        font-weight: bold;
        display: block;

        &:first-child {
            margin-top: 20px;
        }
    }

    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #ddd;
    }
`;

export const InputGroup = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

export const SendButton = styled.button`
    width: 100%;
    margin-top: 30px;
    background: #7d40e7;
    border-radius: 2px;
    padding: 15px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.2, '#7d40e7')};
    }
`;

export const Devs = styled.main`
    flex: 1;

    @media (max-width: 650px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
`;

export const DevList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    li {
        background: #fff;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
        border-radius: 2px;
        padding: 20px;

        header {
            display: flex;
            flex-direction: row;
            align-items: center;

            img {
                width: 54px;
                height: 54px;
                border-radius: 50%;
                background: #888;
            }
        }

        p {
            color: #666;
            font-size: 14px;
            line-height: 20px;
            margin: 10px 0;
        }

        a {
            color: #8e4dff;
            font-size: 14px;

            &:hover {
                color: ${darken(0.3, '#8e4dff')};
            }
        }
    }
`;

export const UserInfo = styled.div`
    margin-left: 10px;

    strong {
        display: block;
        font-size: 16px;
        color: #333;
    }

    span {
        font-size: 13px;
        color: #999;
        margin-top: 3px;
    }
`;
