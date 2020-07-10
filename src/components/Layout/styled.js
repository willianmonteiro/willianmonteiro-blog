import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.section`
  background: var(--background);
  min-height: 100vh;
  padding: 0 6rem;
  transition: background, color 0.5s;
  width: 100%;
  
    body#grid & {
      grid-template-areas: 
        "posts" 
        "pagination";
    }
    
    ${media.lessThan('large')`
      padding: 4.125rem 0 3rem 0;
    `}
    
    ${media.lessThan('medium')`
      padding: 1rem 0 3rem 0;
    `}
`

export const LayoutWrapper = styled.section`
  ${media.lessThan('large')`
    flex-direction: column;  
  `}
  
  ${media.lessThan('medium')`
    margin-bottom: 20px;  
  `}
`
