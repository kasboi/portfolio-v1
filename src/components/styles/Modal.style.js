import styled from "styled-components";
import { device } from "./Media";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  width: 90vw;
  background-color: ${({theme }) => theme.modal.primaryColor};
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity .35s ease-in-out;
  z-index: 98;

  @media ${device.tablet} {
    padding: 3rem 2rem;
  }

  &.open {
    visibility: visible;
    opacity: 1;
    padding: 3rem 4rem;
    margin: -1rem 0;
    height: auto;
  }
`
const Card = styled.div`
display: flex;
flex-direction: column;
background-color: ${({theme }) => theme.modal.secondaryColor};
margin: 1.5rem auto;
overflow: hidden;
border-radius: .5rem .5rem 0 0;

  @media ${device.tablet} {
    max-width: 30rem;
  }

.imgContainer {
  img {
    width: 100%;
  }
}

.card_details {
  color: ${({theme }) => theme.font.primaryText};
  padding: .5rem 1.5rem 1rem 1.5rem;

  * {
    margin-bottom: .6rem;
  }
}
`
export const ModalStyle = { Container, Card }
