import styled from 'styled-components';

export const ChipContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    padding: 0.5rem;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.text};
    margin-right: 0.5rem;

`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.roboto};
`;
