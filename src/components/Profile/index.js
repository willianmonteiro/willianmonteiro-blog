import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Redirect, Author, ProfileInfo, Description } from './styled'
import Avatar from '../Avatar'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description },
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
      <Author to='/'>{title}</Author>
      <ProfileInfo>
        <Redirect to='/about'>
          <Avatar />
        </Redirect>
        <Description>{description}</Description>
      </ProfileInfo>
      
    </Container>
  )
}

export default Profile
