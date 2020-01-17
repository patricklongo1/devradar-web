import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    z-index: 4;
    width: 250px;
    height: 50px;
    background: #ddd;
    border: 2px solid #000;
    border-radius: 6px;
    color: #000;
    font-size: 24px;
    font-weight: bold;

    &:hover {
        background: #222;
        color: #00ff00;
        border: 2px solid #00ff00;
    }
`;
