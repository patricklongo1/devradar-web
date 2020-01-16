import styled from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;

    height: 100px;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    button {
        background: none;

        h1 {
            text-align: center;
            color: #fff;
            transition: color 0.2s;

            &:hover {
                color: #bbb;
            }
        }
    }
`;
