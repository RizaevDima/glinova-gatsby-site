import styled from "styled-components"

// export const StyledImg = styled(GatsbyImage)`
//   max-height: 1300px;
//   margin-bottom: 60px;
//   width: 100%;
// `

export const ServicesSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 15px;

  .services-section__box {
    margin: 0px -15px;
    display: flex;
    flex-wrap: wrap;
    .services-section__box-content {
      padding: 0px 15px;
      margin: 30px 0px 0px;
      width: 40%;
      h2 {
        font-size: 38px;
      }
      ul {
        font-size: 20px;
        margin-left: 50px;
        margin-top: 40px;
      }
    }
    .services-section__box-image {
      padding: 0px 15px;
      width: 60%;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 30px auto 55px;
    .services-section__box {
      flex-direction: column-reverse;
      .services-section__box-content {
        width: 100%;
      }
      .services-section__box-image {
        width: 100%;
        padding: 0px;
      }
    }
  }
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
    width: 1400px;
    display: flex;
    justify-content: flex-end;

    .header-section__content {
      max-width: 490px;
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
