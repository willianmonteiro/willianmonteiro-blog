import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import MenuBar from '../MenuBar'

import GlobalStyles from '../../styles/global'
import { LayoutWrapper, Main } from './styled'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <MenuBar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
