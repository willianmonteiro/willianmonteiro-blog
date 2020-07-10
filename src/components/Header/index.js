import React from 'react'
import { Container } from './styled'
import Profile from '../Profile'
import MenuBar from '../MenuBar'

const Header = () => (
  <Container>
    <Profile />
    <MenuBar />
  </Container>
)

export default Header