import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { ContactWraper, SocialWrapper } from "./ContactSection.styles"
import ContactForm from "./ContactForm"

import facebookIcon from "../../images/facebook-icon.svg"
import instagramIcon from "../../images/instagram-icon.svg"

const ContactSection = ({ contactSectionData, allSiteData }) => {
  console.log(`contactSectionData`, contactSectionData)
  console.log(`allSiteData`, allSiteData)
  const socialData =
    allSiteData.nodes[0].acfOptionsMainSettings.acfThemeSetting.socialLinks
  const imageData = getImage(contactSectionData.image.localFile)

  console.log(`socialData`, socialData)

  return (
    <ContactWraper>
      <div className="section__box">
        <div className="contact-section__box-image">
          <GatsbyImage
            image={imageData}
            alt="Послуги"
            style={{ marginBottom: 50 }}
          />
        </div>
        <div className="contact-section__box-content">
          <h2>{contactSectionData.title}</h2>
          <ContactForm />
          <SocialWrapper>
            <p>Підписуйтесь на соціальні мережі.</p>
            <div className="social--box">
              {socialData.facebookLink ? (
                <a href={socialData.facebookLink.url}>
                  <img src={facebookIcon} alt={socialData.facebookLink.title} />
                </a>
              ) : null}
              {socialData.instagramLink ? (
                <a href={socialData.instagramLink.url}>
                  <img
                    src={instagramIcon}
                    alt={socialData.instagramLink.title}
                  />
                </a>
              ) : null}
            </div>
          </SocialWrapper>
        </div>
      </div>
    </ContactWraper>
  )
}

export default ContactSection
