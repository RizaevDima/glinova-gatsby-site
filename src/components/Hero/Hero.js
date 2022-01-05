import React from "react"
import { getImage } from "gatsby-plugin-image"
import BlueBtn from "../Buttons/BlueBtn"
// import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"

const Hero = ({ homeHeaderData }) => {
  // const {
  //   wpPage: { ACF_HomePage: data },
  // } = useHeroQuery()
  const homeHeaderDataImage = homeHeaderData.image.localFile
    ? homeHeaderData.image.localFile
    : {}
  const imageData = getImage(homeHeaderDataImage)
  console.log(`homeHeaderData`, homeHeaderData)
  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero Image" />
      <HeaderWrapper>
        <div className="header-section__block">
          <div
            className="header-section__content"
            dangerouslySetInnerHTML={{ __html: homeHeaderData.content }}
          />
          <div className="header-section__btn-row">
            <BlueBtn link="/" text="Безкоштовна консультація" />
          </div>
        </div>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
