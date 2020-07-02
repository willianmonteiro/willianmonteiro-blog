import React from 'react'
import { Container } from './styled'
import Profile from '../Profile'
import NavMenu from '../NavMenu'

const Header = () => (
  <Container>
    <Profile />
    <NavMenu />
  </Container>
)

export default Header