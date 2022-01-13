import personalPhotoIcon from '../assets/personalPhoto.png';
import creditCalculatorIcon from '../assets/creditCalculator.png';
import facebookIcon from '../assets/socialIcons/facebook.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import githubIcon from '../assets/socialIcons/github.png';
import maptyIcon from '../assets/mapty.png';
import cssGeneratorIcon from '../assets/cssGenerator.png';
import shoppingListIcon from '../assets/shoppingList.png';
import clickerGameIcon from '../assets/clickerGame.png';
import cafeLayoutIcon from '../assets/cafeLayout.png';
import calendarIcon from '../assets/calendar.png';
import timerIcon from '../assets/timer.png';
import drawingAppIcon from '../assets/drawingApp.png';

export const THEME = {
  landingSectionBackground: personalPhotoIcon,
  redBlueGradient: 'linear-gradient(#780206, #061161)',
  darkGreenGradient: 'linear-gradient(to bottom, #000, #0f9b0f)',
  darkOrange: '#D12917',
  yellow: '#D4D20B',
  green: '#00BD3C',
  fontColor: 'rgb(26, 26, 26)',
  black: 'rgb(26, 26, 26)',
  darkenedBackground: 'rgba(0,0,0,0.9)',
};

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILL_BUNDLE = [
  {
    id: 0,
    name: 'HTML 5',
    advancement: 8,
  },
  {
    id: 1,
    name: 'CSS',
    advancement: 7,
  },
  {
    id: 2,
    name: 'JavaScript',
    advancement: 6,
  },
  {
    id: 3,
    name: 'React',
    advancement: 4,
  },
  {
    id: 4,
    name: 'TypeScript',
    advancement: 1,
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: 'Credit Calculator',
    img: creditCalculatorIcon,
    link: 'https://szadziu.github.io/BankAppTask/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 1,
    name: 'Mapty App',
    img: maptyIcon,
    link: 'https://szadziu.github.io/MaptyApp/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 2,
    name: 'Box-shadow generator',
    img: cssGeneratorIcon,
    link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 3,
    name: 'Shoping App',
    img: shoppingListIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 4,
    name: 'Clicker Browser Game',
    img: clickerGameIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 5,
    name: 'Cafe Layout',
    img: cafeLayoutIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 6,
    name: 'Calendar',
    img: calendarIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 7,
    name: 'Timer',
    img: timerIcon,
    link: 'https://szadziu.github.io/stoper',
    desc: 'Aplikacja Stoper pozwala zmierzyć określoną długość czasu, a na jej punkt startowy oraz końcowy wpływa działanie użytkownika. Czas, który został wstrzymany może być wznowiony od tego miejsca. Dodatkowo istnieje możliwość zresetowania całego pomiaru. Technologie, które zostały zastosowane w projekcie to: React (functional components), styled-components',
  },
  {
    id: 8,
    name: 'Drawing App',
    img: drawingAppIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
];

export const SOCIALS = [
  {
    id: 0,
    name: 'github',
    icon: githubIcon,
    link: 'https://www.github.com/szadziu',
  },
  {
    id: 1,
    name: 'facebook',
    icon: facebookIcon,
    link: 'https://www.facebook.com/McjMikolajczak',
  },
  {
    id: 2,
    name: 'whatsapp',
    icon: whatsappIcon,
    link: 'https://wa.me/48664095522',
  },
  {
    id: 3,
    name: 'linkedin',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/maciej-miko%C5%82ajczak-717ba8197/',
  },
];
