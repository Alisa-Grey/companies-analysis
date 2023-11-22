import styled, { css } from 'styled-components';

export const Button = styled.button<{ $primary?: boolean; }>`
    background: #020574;
    border: 2px solid transparent;
    border-radius: 0;
    color: #fff;
    padding: 10px 30px;
    transition: border-color .2s ease-in;
    &:hover {
        border-color: #00044c;
    }
    &:disabled {
        background-color: rgba(128,128,128,.45);
        border-color: transparent;
        color: grey;
        cursor: not-allowed;
    }

    ${props => props.$primary && css`
        background: #transparent;
        border: 2px solid 020574;
        color: white;
    `}
`;
