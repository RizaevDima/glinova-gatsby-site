import React from "react"
// import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PinkBtn from "../Buttons/PinkBtn"
import BlueBtn from "../Buttons/BlueBtn"
// import Navigation from "../Navigation/Navigation"
// import Logo from "../../images/logo.svg"
// import { useMenuQuery } from "../../hooks/useMenuQuery"
import { ServicesSection, Content } from "./HomeServices.styles"

const HomeServices = ({ homeServicesData }) => {
  //   const { site, menu, siteData } = useMenuQuery()
  const imageData = getImage(homeServicesData.image.localFile)
  console.log(`servicesData`, homeServicesData)
  return (
    <ServicesSection>
      <div className="services-section__box">
        <div className="services-section__box-content">
          <div
            className="header-section__content"
            dangerouslySetInnerHTML={{ __html: homeServicesData.content }}
          />
          <div className="header-section__btn-row">
            <PinkBtn
              link={homeServicesData.button.url}
              text={homeServicesData.button.title}
            />
          </div>
        </div>
        <div className="services-section__box-image">
          <GatsbyImage
            image={imageData}
            alt="Послуги"
            style={{ marginBottom: 50 }}
          />
        </div>
      </div>
    </ServicesSection>
  )
}

export default HomeServices
