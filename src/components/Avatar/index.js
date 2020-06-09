import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AvatarWrapper } from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <AvatarWrapper fixed={avatarImage.childImageSharp.fluid} alt='Avatar' />
  )
}

export default Avatar
