import styled from "styled-components"

export const BtnWraperPink = styled.a`
  position: relative;
  font-size: 24px;
  margin: 0 auto;
  padding: 25px 50px;
  border-radius: 50px;
  background-color: #cd7f8b;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  margin-left: 25px;
  margin-top: 40px;
  transition: all 0.3s;
  :hover {
    background-color: #d25985;
  }
`
export const BtnWraperBlue = styled.a`
  position: relative;
  font-size: 24px;
  max-width: 280px;
  text-align: center;
  margin: 0 auto;
  padding: 15px 50px;
  border-radius: 50px;
  background-color: #3192a3;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  margin-left: 25px;
  margin-top: 15px;
  transition: all 0.3s;
  :hover {
    background-color: #2b808f;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`
