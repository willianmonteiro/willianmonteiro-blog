import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import GlobalStyles from "../../styles/global"
import { LayoutWrapper, Main } from "./styles"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
