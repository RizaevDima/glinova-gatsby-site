import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import logo1 from "../../images/cosmetics-1.svg"
import logo2 from "../../images/cosmetics-2.svg"
import logos from "../../images/Logos-8.svg"
import {
  ContentWrapper,
  FullWidthContainer,
  LogosWrapper,
} from "../Layout/Layout.styles"

const AboutSection = ({ aboutSectionData, bgSectionData }) => {
  const imageData1 = getImage(aboutSectionData.imageFirst.localFile)
  const imageData2 = getImage(aboutSectionData.imageSecond.localFile)

  const image = getImage(bgSectionData.image.localFile)

  // Use like this:
  const bgImage = convertToBgImage(image)
  return (
    <section>
      <ContentWrapper>
        <div className="section__box">
          <div className="section__box-4">
            <GatsbyImage image={imageData1} alt="about" />
          </div>
          <div className="section__box-6">
            <img src={logo1} alt="" />
            <div
              className="header-section__content"
              dangerouslySetInnerHTML={{
                __html: aboutSectionData.contentFirst,
              }}
            />
            <img src={logo2} alt="" />
          </div>
        </div>
        <div className="section__box mt90">
          <div className="section__box-5">
            <div
              className="header-section__content"
              dangerouslySetInnerHTML={{
                __html: aboutSectionData.contentSecond,
              }}
            />
          </div>
          <div className="section__box-5">
            <GatsbyImage image={imageData2} alt="about" />
          </div>
        </div>
      </ContentWrapper>
      <FullWidthContainer className="bg-grey logos-title-box">
        <h2>Професійна косметика</h2>
        <h4>тільки від офіційних представників</h4>
      </FullWidthContainer>
      <ContentWrapper>
        <LogosWrapper>
          <img
            src={logos}
            alt="Професійна косметика тільки від офіційних представників"
          />
        </LogosWrapper>
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          className="about-bg-section"
          {...bgImage}
          preserveStackingContext
        >
          <div
            className="bg-section__content"
            dangerouslySetInnerHTML={{
              __html: bgSectionData.content,
            }}
          />
          {/* <div style={{ minHeight: 1000, minWidth: 1000 }}>
            <GatsbyImage image={image} alt={"testimage"} />
          </div> */}
        </BackgroundImage>
      </ContentWrapper>
    </section>
  )
}

export default AboutSection
