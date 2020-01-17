import styled from 'styled-components';

export const Content = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 30px 60px;

    display: flex;
    flex-direction: row;

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
