import base from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';
import reason from 'react-syntax-highlighter/languages/prism/reason';
import { Img } from './components';

export const primaryColor = '#e3695a';
export const darkGray = '#373F51'

const theme = Object.assign({
  ...base,
  colors: {
    ...base.colors,
    background: '#efedec'
    /* background: primaryColor,
    heading: '#fff' */
  },
  font: 'Hind, Ubuntu, Roboto, sans-serif',
  css: {
    ...base.css,
    ul: {
      listStyleType: 'none',
      fontSize: '3.25rem',
      fontWeight: 'bold',
      textAlign: 'left',
      minWidth: '60vw',
      paddingLeft: '0'
    },
    li: {
      margin: '1rem',
    },
    code: {
      minWidth: '500px',
    },
    img: {
      maxWidth: '100%',
    },
    h5: {
      margin: '0 0 1em'
    }
  },
  prism: {
    style: okaidia,
    languages: {
      reason,
    },
  },
  components: {
    img: Img,
  },
});

console.log(theme);

export default theme;
