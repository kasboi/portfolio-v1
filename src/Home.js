import styled from "styled-components";
import { device } from "./components/styles/Media";

const Container = styled.div`
  display: block;
  margin: 3rem 2rem 0 2rem;
  max-width: 40rem;
  text-align: justify;
  color: ${({theme}) => theme.font.primaryText};

  @media ${device.tablet} {
    margin: 10rem 1rem 0 1rem;
  }

  h1 {
    color: ${({theme}) => theme.logo.color};
    font-size: 3rem;
    letter-spacing: .08em;
    margin-bottom: .5rem;
  }
  h4 {
    font-weight: 450;
    margin-bottom: 1.3rem;
  }
  p {
    line-height: 1.8rem;
  }
`

const CTA = styled.div`
  display: none;
  font-weight: 500;

  @media ${device.tablet} {
    display: block;
  }

  .cta__btn {
    font-size: 1.2rem;
    display: inline-block;
    border: none;
    color: ${({theme}) => theme.modal.primaryColor};
    margin: 3rem auto;
    padding: .8rem 1rem;
    background-color: ${({theme}) => theme.logo.color_2 || theme.logo.color};
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      background-color: ${({theme}) => theme.color.backgroundColor};
      transition: all .2s;

      position: absolute;
      top: -6px;
      left: -8px;
    }
  }
`

const Home = ({open, setOpen, modal, setModal}) => {
  return ( 
    <Container>
      <h1>Hello,<br /> I'm KAS</h1>
      <h4>Kolawole Abdullah Solahudeen</h4>
      <p>I provide front-end solutions using simple and reusable components to build fluid designs and experience. I enjoy writing clean and intuitive codes and when I'm not in front of the computer screen, I'm probably enjoying manga, anime, music or researching the new big thing in tech.<br /> I am available for contracts and full-time remote jobs.</p>

      <CTA>
      <button className="cta__btn"
        onClick={() => {
          if (open == '') {
            setOpen('open')
            setModal('open')}
          else {
            setOpen('')
            setModal('')}
        }}
      >
      Wanna know more?</button>
      </CTA>
    </Container>
   );
}
 
export default Home;