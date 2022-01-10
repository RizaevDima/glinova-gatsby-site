import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
  const { site, menu, siteData } = useMenuQuery()
  const sitePhoneNumber =
    siteData.nodes[0].acfOptionsMainSettings.acfThemeSetting.contactNumber
  console.log(`menu`, menu)
  return (
    <Wrapper>
      <Content>
        <Navigation menu={menu.menuItems.nodes} />
        <a href={`tel:${sitePhoneNumber}`} className="header-phone-link">
          {"тел. " + sitePhoneNumber}
        </a>
      </Content>
    </Wrapper>
  )
}

export default Header
