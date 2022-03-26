import { createGlobalStyle } from 'styled-components'
import { device } from './Media'

const GlobalStyle = createGlobalStyle`
:root {
  --text-1: ${({theme}) => theme.font.primaryText};
  --text-2: ${({theme}) => theme.font.secondaryText};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  height: 100%;
}

body {
  background-color: ${({ theme }) => theme.color.backgroundColor};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: ${({theme}) => theme.font.color};
  transition:  .3s cubic-bezier(0.45, 0, 0.55, 1);
  padding: 0 4rem;
  height: 100%;

  @media ${device.laptop} {
    padding: 0 2.5rem;
    color: blue;
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
a:focus, a:visited, a:active, a:hover, a:link {
  color: ${({theme}) => theme.font.secondaryText};
}

ion-icon {
    font-size: 1.4rem;
    color: ${({theme}) => theme.font.secondaryText};

    @media ${device.tablet} {
      font-size: 1.6rem;
    }
}

.logo-box {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  li:last-of-type {
    margin-bottom: .5rem
  }

  li {
    padding: 4px;
  }

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 9rem;
    margin: 0px auto;
    background-color: ${({theme}) => theme.font.secondaryText};
    
    @media ${device.tablet} {
      height: 6rem;
    }
  }
}

.text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: ${({theme}) => theme.font.secondaryText};

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: .85rem;
    letter-spacing: 0.15em;
    writing-mode: vertical-rl;
    color: inherit;

    @media ${device.tablet} {
      font-size: 1rem;
      padding: 0;
    }

  }
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 8rem;
    margin: 0px auto;
    background-color: ${({theme}) => theme.font.secondaryText};

    @media ${device.tablet} {
      height: 4rem;
    }
  }
}

`

export default GlobalStyle