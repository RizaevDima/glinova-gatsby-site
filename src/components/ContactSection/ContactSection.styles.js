import styled from "styled-components"

export const ContactWraper = styled.div`
  position: relative;
  max-width: 1260px;
  margin: 30px auto 100px;
  padding: 0 15px;

  .section__box {
    margin: 0px -15px;
    display: flex;
    flex-wrap: wrap;
    .contact-section__box-image {
      padding: 0px 15px;
      width: 45%;
      /* @media only screen and (max-width: 768px) {
        padding: 0px;
        width: 100%;
      } */
    }
    .contact-section__box-content {
      padding: 0px 15px;
      margin: 80px 0px 0px;
      width: 55%;

      h2 {
        font-size: 38px;
        text-align: center;
      }
      /* @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 15px;
      } */
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
    .section__box .contact-section__box-image {
      padding: 0px;
      width: 100%;
    }
    .section__box .contact-section__box-content {
      width: 100%;
      margin-top: 15px;
    }
  }
`

export const ContactFormWrapper = styled.div`
  position: relative;
  margin: 35px 50px;

  .field {
    margin-bottom: 25px;
    input,
    textarea {
      width: 100%;
      background-color: #ececec;
      border-radius: 12px;
      font-size: 20px;
      font-weight: 500;
      padding: 10px 15px;
      border-color: transparent;
    }
    textarea {
      resize: none;
    }
  }
  .sign-field-submit {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 768px) {
    margin: 35px 0px;
    .sign-field-submit {
      justify-content: center;
    }
  }
`
export const BtnWraperPink = styled.button`
  position: relative;
  font-size: 24px;
  padding: 25px 50px;
  border-radius: 50px;
  background-color: #cd7f8b;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #d25985;
  }
`
export const SocialWrapper = styled.div`
  position: relative;
  margin-top: 65px;
  p {
    font-size: 26px;
    text-align: center;
    margin-bottom: 10px;
  }
  .social--box {
    display: flex;
    justify-content: center;
    img {
      width: 70px;
      margin: 10px 25px;
    }
  }
`
