import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import HomeServices from "../components/Home/HomeServices"
import AboutSection from "../components/AboutSection/AboutSection"
import ContactSection from "../components/ContactSection/ContactSection"

const Home = ({ data, pageContext }) => {
  console.log(`context`, pageContext)
  const page = data.page
  const siteData = data.siteData
  const featuredImage = {
    data: page.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: page.featuredImage?.node?.alt || ``,
  }
  const homeHeaderData = page.homeOptions.headerSection
  console.log(`data`, data)
  return (
    <Layout isHomePage>
      <Seo title="Home" />

      <div className="header-section">
        <Hero homeHeaderData={homeHeaderData} />
      </div>
      <div className="content-section">
        <HomeServices homeServicesData={page.homeOptions.servicesSection} />
        <AboutSection
          aboutSectionData={page.homeOptions.aboutSection}
          bgSectionData={page.homeOptions.bgSection}
        />
        <ContactSection
          contactSectionData={page.homeOptions.contactSection}
          allSiteData={siteData}
        />
      </div>
      {!!page.content && (
        <section itemProp="articleBody">
          {/* <div dangerouslySetInnerHTML={{ __html: page.content }} /> */}
        </section>
      )}
    </Layout>
  )
}
export default Home
export const homePageQuery = graphql`
  query HomePageById($id: String) {
    siteData: allWp {
      nodes {
        acfOptionsMainSettings {
          acfThemeSetting {
            contactNumber
            socialLinks {
              linkedinLink {
                target
                title
                url
              }
              instagramLink {
                target
                title
                url
              }
              facebookLink {
                target
                title
                url
              }
            }
          }
        }
      }
    }
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      homeOptions {
        headerSection {
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "1920", placeholder: BLURRED)
              }
            }
          }
        }
        servicesSection {
          button {
            target
            title
            url
          }
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "950", placeholder: BLURRED)
              }
            }
          }
        }
        contactSection {
          title
          fieldGroupName
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "788", placeholder: BLURRED)
              }
            }
          }
        }
        aboutSection {
          contentFirst
          contentSecond
          imageFirst {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "780", placeholder: BLURRED)
              }
            }
          }
          imageSecond {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "870", placeholder: BLURRED)
              }
            }
          }
        }
        bgSection {
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(sizes: "1920", placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
