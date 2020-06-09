import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Redirect, Author, Position, Description } from './styled'
import Avatar from '../Avatar'

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
      <Redirect to='/about'>
        <Avatar />
        <div>
          <Author>{title}</Author>
          <Position>{position}</Position>
        </div>
      </Redirect>
      <Description>{description}</Description>
    </Container>
  )
}

export default Profile
