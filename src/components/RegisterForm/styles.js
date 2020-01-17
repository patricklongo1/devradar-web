import styled from 'styled-components';
import { darken } from 'polished';

export const Register = styled.aside`
    height: 400px;
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
