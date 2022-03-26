import styled from "styled-components";
import { device } from "./components/styles/Media";

const Container = styled.div`
  padding: 5rem 7rem;
  color: ${({theme}) => theme.font.primaryText};
  font-size: .8rem;
  max-width: 75rem;

  @media ${device.laptop} {
    padding: 3rem 4rem;
  }
  @media ${device.tablet} {
    padding: 2rem;
    margin-top: 4rem;
  }
  @media ${device.mobileL} {
    padding: 2rem 1rem;
  }

  .heading {
    margin-bottom: 1rem;
  }

  .background {
    display: flex;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      flex-direction: column;
      max-width: 40rem;
    }
  }
  .background__heading {
    font-size: 1rem;
    margin-right: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme }) => theme.logo.color};
    letter-spacing: 1px;
    flex-basis: 20%;
  }

  .background__paragraph {
    font-size: .8rem;
    text-align: justify;
    
    @media ${device.tablet} {
      font-size: .85rem;
    }
  }

  .background__paragraph :not(p:last-child) {
    margin-bottom: 1.5rem;
  }

  .skills {
    display: flex;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      flex-direction: column;
    }
  
    &__heading {
      font-size: 1rem;
      margin-right: 2.5rem;
      text-transform: uppercase;
      font-weight: 700;
      color: ${({theme }) => theme.logo.color};
      letter-spacing: 1px;
      flex-basis: 20%;
    }

    &__activity {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      
      @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
      }
    }

    &__header {
      font-size: .85rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: .5rem;
    }

  }
  .experience {
      display: flex;

      @media ${device.tablet} {
      flex-direction: column;
    }
      &__header {
        font-size: 1rem;
        margin-right: 2.5rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${({theme }) => theme.logo.color};
        letter-spacing: 1px;
        flex-basis: 20%;
      }

      &__activity {
        width: 100%;
      }

      .job {
        margin-bottom: 1.5rem;
      }

      .job__duration {
        display: flex;
      }
      .job__work {
        font-size: .85rem;
        margin-bottom: .2rem;
        font-weight: 600;
        margin-right: auto;
      }
    }
`

const Home = () => {
  return ( 
    <Container>
    <div className="background">
      <div className="background__heading heading">Background</div>
      <div className="background__paragraph">
        <p>I'm currently an Intern at ALX africa, building things for the web with some awesome people. I am also enrolled in the Federal university of agriculture, Abeokuta studying computer science.</p>
        <p>As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
      </div>
    </div>
    <div className="skills">
      <div className="skills__heading heading">Skills</div>
      <div className="skills__activity">
        <ul className="skills__languages">
          <li className="skills__header">Languages</li>
          <li className="language__list">JavaScript (ES6)</li>
          <li className="language__list">HTML</li>
          <li className="language__list">CSS/SCSS</li>
        </ul>
        <ul className="skills__frameworks">
          <li className="skills__header heading">Frameworks / library</li>
          <li className="framework__list">React</li>
          <li className="framework__list">Styled Components</li>
          <li className="framework__list">Material UI</li>
          <li className="framework__list">Node</li>
          <li className="framework__list">Firebase</li>
        </ul>
        <ul className="skills__tools">
          <li className="skills__header">Tools</li>
          <li className="tools__list">Git & Github</li>
          <li className="tools__list">Chrome DevTools</li>
          <li className="tools__list">Bash</li>
        </ul>
      </div>
    </div>
    <div className="experience">
      <div className="experience__header heading">Experience</div>
      <div className="experience__activity">
      <div className="job">
          <div className="job__duration">
            <span className="job__work">ALX Africa</span>
            <span className="job__year">Feb. 2022 - Present</span>
          </div>
          <div className="job__title">Software Engineer Intern</div>
        </div>
        <div className="job">
          <div className="job__duration">
            <span className="job__work">PricewaterhouseCoopers Nigeria (PwC)</span>
            <span className="job__year">Mar 2019 - Feb. 2020</span>
          </div>
          <div className="job__title">Advisory Intern</div>
        </div>
        <div className="job">
          <div className="job__duration">
            <span className="job__work">Yemtech (SIWES)</span>
            <span className="job__year">Jan. 2018 - May 2020</span>
          </div>
          <div className="job__title">Web Designer</div>
        </div>
      </div>
    </div>
    </Container>
   );
}
 
export default Home;