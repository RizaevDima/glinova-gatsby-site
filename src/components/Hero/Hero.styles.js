import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 1300px;
  margin-bottom: 60px;
  width: 100%;
  @media screen and (max-width: 980px) {
    margin-bottom: 35px;
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  .header-section__block {
    width: 100%;

    max-width: 1240px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;

    .header-section__content {
      max-width: 490px;
      color: #fff;
      h2 {
        color: #000;
      }
    }
  }
  .header-section__btn-row {
    width: 100%;
    max-width: 490px;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: left;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 980px) {
    position: relative;
    .header-section__block {
      .header-section__content {
        max-width: 100%;
        color: #000;
        padding: 0px 15px;
        h1,
        h2 {
          display: none;
        }
      }
    }
  }
`
export const MobileHeaderContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 210px;
  flex-direction: column;
  padding: 30px 0px 0px;
  h1 {
    font-size: 30px;
    color: #fff;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 980px) {
    display: none;
  }
`
