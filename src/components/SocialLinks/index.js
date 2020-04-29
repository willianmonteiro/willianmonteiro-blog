import React from "react"
import Icons from "./icons"
import links from "./content"

import {
  Container,
  SocialList,
  SocialItem,
  SocialLink,
  IconWrapper,
} from "./styles"

const SocialLinks = () => (
  <Container>
    <SocialList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <SocialItem key={i}>
            <SocialLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreffer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLink>
          </SocialItem>
        )
      })}
    </SocialList>
  </Container>
)

export default SocialLinks
