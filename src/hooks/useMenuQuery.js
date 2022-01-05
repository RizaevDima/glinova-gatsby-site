import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      siteData: allWp {
        nodes {
          acfOptionsMainSettings {
            acfThemeSetting {
              contactNumber
            }
          }
        }
      }
      menu: wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return data
}
