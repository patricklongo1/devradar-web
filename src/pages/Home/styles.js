import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    min-height: 100%;
    width: 100%;
    background: linear-gradient(#000, #131313);
`;

export const ButtonContainer = styled.div`
    width: 250px;
    margin: 0 auto;
    margin-top: -25px;
`;

export const DisplayContainer = styled.div`
    margin: 70px auto;
    background: none;
    width: 100%;
    height: 450px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
