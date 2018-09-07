import base from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';
import reason from 'react-syntax-highlighter/languages/prism/reason';
import { Img } from './components';

const primaryColor = '#dd4b39';

const theme = Object.assign({
  ...base,
  colors: {
    ...base.colors,
    /* background: primaryColor,
    heading: '#fff' */
  },
  css: {
    ...base.css,
    ul: {
      listStyleType: 'none',
      fontSize: '3.5rem',
      fontWeight: 'bold',
      textAlign: 'left',
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
