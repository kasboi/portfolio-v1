import styled from "styled-components";
import { device } from "./components/styles/Media";

const Container = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 40rem;
  color: ${({theme}) => theme.font.primaryText};

  .project__heading {
    position: relative;
    font-weight: 500;
    margin-bottom: 2rem;

    &::after {
      content: "";
      position: absolute;
      top: 45%;
      margin-left: 1rem;
      display: inline-block;
      height: 1px;
      width: 20rem;
      background-color: #dee2e6;
      opacity: .6;

      @media ${device.tablet} {
        width: 8rem;
      }
    }
  }

  #survey-form {
    padding: 3rem 5rem;
    text-align: left;
    border-radius: .4rem;

    @media ${device.tablet} {
        padding: 2rem;
    }
}

.form_input {
    border: none;
    outline: none;
    display: block;
    font-family: inherit;
    width: 100%;
    padding: .85rem 1rem;
    margin-top: .4rem;
    border-radius: .35rem;
    background-color: #f1f3f5;
}
.form-class {
    margin-bottom: 2rem;
}
.form-class_label {
    display: block;
    margin-bottom: .4rem;
}
.form_check {
    display: inline-block;
    margin-right: .8rem;
}

.form_submit {
    margin: 2rem 0;
    display: inline-block;
    width: 100%;
    padding: 1rem 0;
    border-radius: .35rem;
    border: none;
    cursor: pointer;

    font-family: inherit;
    color: #fff;
    background-color: #9c36b5;
}
`

const Contact = () => {
  return ( 
    <Container>
        <h2 className="project__heading">Lets connect</h2>
      <form action="https://formsubmit.co/dffac674e12d6f36acbc1d52ddc41b42" method="POST" id="survey-form">
          <div class="form-class">
              <label for="name" id="name-label">Name
                  <input type="text" id="name" name="name" class="form_input" placeholder="Enter your name" required />
              </label>
          </div>
          <div class="form-class">
              <label for="email" id="email-label">Email
                  <input type="email" name="email" id="email" class="form_input" placeholder="Enter your email" required />
              </label>
          </div>
          <div class="form-class">
              <textarea name="message" id="textarea" cols="30" rows="5" class="form_input" placeholder="Leave your message here"></textarea>
          </div>
          <div class="form-class">
              <button type="submit" class="form_submit" id="submit">Submit</button>
          </div>
      </form>
    </Container>
   );
}
 
export default Contact;