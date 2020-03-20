import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif|Pontano+Sans&display=swap');

  * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }
    
`;
