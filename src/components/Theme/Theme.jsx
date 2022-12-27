import { ThemeProvider } from 'styled-components';

const THEME = {
    black_20: 'rgba(49,49,49,0.2)',
    black_50: 'rgba(49,49,49,0.5)',
    black: 'rgb(49, 49, 49)',

    white_10: 'rgba(255, 253, 250, 0.1)',
    white: 'rgb(255, 253, 250)',

    beige_20: 'rgba(234, 218, 168, 0.2)',

    gray_200: 'rgb(221, 221, 221)',
    gray_300: 'rgb(119, 119, 119)',
    gray_400: 'rgb(102, 102, 102)',
    gray_500: 'rgb(62, 62, 62)',

    green_300: 'rgb(0, 189, 60)',

    blue_200: 'rgb(139, 169, 232)',
    blue_300: 'rgb(99, 129, 192)',
    blue_400: 'rgb(59, 89, 152)',

    pink_200: 'rgb(255, 187, 187)',
    pink_300: 'rgb(255, 147, 147)',

    mint_300: 'rgb(98, 217, 199)',
    mint_400: 'rgba(98, 217, 199, 0.4)',

    fontSize: {
        xxs: '10px',
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '18px',
        xl: '20px',
        xxl: '24px',
    },

    borderRadius: {
        s: '2px',
        m: '4px',
        l: '6px',
        xl: '8px',
        xxl: '10px',
    },

    padding: {
        xs: '2px',
        s: '4px',
        m: '8px',
        l: '12px',
        xl: '16px',
        xxl: '24px',
    },

    margin: {
        xs: '2px',
        s: '4px',
        m: '8px',
        l: '12px',
        xl: '16px',
        xxl: '24px',
    },

    letterSpacing: {
        xs: '0.5px',
        s: '1px',
        m: '1.2px',
        l: '1.5px',
        xl: '2px',
        xxl: '2.5px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Theme;
