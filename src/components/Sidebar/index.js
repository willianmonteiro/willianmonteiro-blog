import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import { Container } from "./styled"

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialLinks />
  </Container>
)

export default Sidebar
