import styled from 'styled-components'
import media from 'styled-media-query'


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5rem 10rem;


  ${media.lessThan('large')`
    padding: 1rem 2rem;
  `}

  ${media.lessThan('medium')`
    padding: 0;
    flex-direction: column;
    align-items: center;
  `}

`