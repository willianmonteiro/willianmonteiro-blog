import styled from 'styled-components';
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Container = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`
export const MenuItem = styled.li`
  padding: 0.5rem 0;
  
  .active {
    color: #1fa1f3;
  }
`
export const MenuLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  
  &:hover {
    color: var(--highlight);
  }
`
