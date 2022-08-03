import { createGlobalStyle } from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        color: white;
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${'images/background.png'});
        background-size: cover;
        background-position: center bottom;
    }
    #__next{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    p {
        font-size: 16px;
        font-weight: 400;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 14px;
        }
    }
`
