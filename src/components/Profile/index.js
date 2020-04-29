import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, LinkTo, Author, Position, Description } from "./styles"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query My {
      site {
        siteMetadata {
          position
          description
          title
        }
      }
    }
  `)

  return (
    <Container>
      <LinkTo>
        <Avatar />
        <Author>{title}</Author>
        <Position>{position}</Position>
      </LinkTo>
      <Description>{description}</Description>
    </Container>
  )
}

export default Profile
