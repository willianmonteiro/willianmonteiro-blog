import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Container = styled.div`
  margin-bottom: 5px;
  
  ${media.lessThan('medium')`
    display: none;
  `}
`
export const NavMenuGroup = styled.div`
  display: flex;
`

export const NavMenuItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem; 
`

export const NavMenuLink = styled(AniLink)`
  display: block;
  
    &.active {
    span {
      color: var(--highlight);
    }
  }
`