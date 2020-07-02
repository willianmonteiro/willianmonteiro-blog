import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


export const Container = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileInfo = styled.div`
  display: flex;
`

export const Redirect = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  text-align: left;  
  
  border: 1px solid #ddd;
  padding: 4px;
  border-radius: 100%;

  &:hover {
    color: var(--highlight);
  }
`

export const Author = styled(AniLink)`
  
  color: var(--texts);
  text-decoration: none;
  font-size: 1.6rem;
  padding: 10px 0 20px 0;
  
  ${media.lessThan('large')`
    font-size: 1rem;
  `}
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  padding: 10px;
  max-width: 500px;
  opacity: .7;
  
  ${media.lessThan('large')`
    display: none;
  `}
`
