import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';
import { Flex } from '../../../styles/Mixins';

export const Input = styled(Field)`
    width: 100%;
    height: 4rem;
    border: none;
    border-bottom: ${({ error, theme }) =>
        error ? `1px solid ${theme.pink_300}` : `1px solid ${theme.gray_400}`};
    padding-top: ${({ theme }) => theme.padding.s};

    background: none;
    color: ${({ theme }) => theme.gray_200};

    font-size: ${({ theme }) => theme.fontSize.s};
    font-family: inherit;
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    outline: none;

    transition: 0.4s;

    &::placeholder {
        color: ${({ theme }) => theme.gray_400};
    }

    &:focus {
        border-bottom-color: ${({ theme }) => theme.gray_200};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    ${Flex()};
    flex-direction: column;
    width: 100%;
    height: 15%;
    max-height: 50px;
    font-family: 'Montserrat', sans-serif;
`;
