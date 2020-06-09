import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from "gatsby"

export const Container = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const Redirect = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  
  ${media.lessThan('large')`
    display: flex;
    text-align: left;  
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const Author = styled.h1`
  font-size: 1.6rem;
  
  ${media.lessThan('large')`
    font-size: 1rem;
  `}
`

export const Position = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  
  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  
  ${media.lessThan('large')`
    display: none;
  `}
`
