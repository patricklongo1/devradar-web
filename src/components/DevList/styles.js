import styled from 'styled-components';
import { darken } from 'polished';

export const Devs = styled.main`
    flex: 1;

    @media (max-width: 650px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
`;

export const DevListComp = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    li {
        background: #fff;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
        border: 2px solid #00ff00;
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
