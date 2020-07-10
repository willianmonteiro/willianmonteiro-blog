import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Container = styled.div`
  margin-bottom: 5px;
  
  ${media.lessThan('medium')`
    background: var(--mediumBackground);
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    width: 100%;
    z-index: 9999;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  
    ${media.lessThan('medium')`
      justify-content: space-between;
    `}
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem; 
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  
    &.active {
    span {
      color: var(--highlight);
    }
  }
`