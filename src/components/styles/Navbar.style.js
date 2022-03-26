import styled from 'styled-components';
import { device } from './Media';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  * {
    margin-right: 1.5rem;
  }

  ion-icon {
    font-size: 1.4rem;
    color: ${({theme}) => theme.font.secondaryText};
  }
`

const Nav = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 2.5rem 4rem;
  font-family: ${({ theme }) => theme.font.fontFamily};
  z-index: 99;
  
  @media ${device.tablet} {
      padding: 2.5rem 0;
    }
  @media ${device.mobileL} {
    padding-top: 2rem 1rem 0 1rem;
  }
`
const Logo = styled.img`
  content: ${({theme }) => theme.logo.img};
  display: inline-block;
  max-width: 4rem;
`
const SwitchContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;

  * {
    margin-right: .4rem;
  }
`
const Switch = styled.div`
  height: 18px;
  width: 34px;
  background: ${({theme}) => theme.color.switch};
  border-radius: 30rem;
  position: relative;

  span {
    display: block;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: .25s ease-in-out;

    &.switched {
      left: 16px;
    }
  }
`
const Menu = styled.div`
  width: 30px;
  height: 18px;
  position: relative;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.logo.color};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    @media ${device.mobileL} {
      height: 1px;
    }
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 8px;
  }

  span:nth-child(3) {
    top: 16px;

  }
  &.open span:nth-child(1) {
    top: 8px;
    transform: rotate(135deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }
  &.open span:nth-child(3) {
    top: 8px;
    transform: rotate(-135deg);
  }
`
const Stick = styled.div`
  width: 1px;
  height: 25px;
  background-color: ${({theme}) => theme.font.primaryText};
`
const NavStyle = {
  Container,
  Nav,
  Logo,
  SwitchContainer,
  Switch,
  Menu,
  Stick
}
export default NavStyle