import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { Link } from 'gatsby';


export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  
  body#grid & {
    background-color: var(--background);
  }
  
  &:hover {
    color: var(--highlight);
  }
`;

export const Container = styled.section`
  align-items: flex-start;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  
  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

// export const PostItemThumb = styled(Img)`
//   width: 100%;
// `

export const PostItemThumb = styled.div`
  align-items: center;
  background: ${props => props.background || 'var(--highlight)'};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-width: 90px;
  min-height: 90px;
  margin-right: 20px;
  text-transform: uppercase;
  
   body#grid & {
    min-width: 100%;
    border-radius: 0;
    min-height: 180px;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //margin-left: 1.5rem;
  
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
  
  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.div`
  font-size: 0.9rem;
  opacity: .7
`;
export const PostItemTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`;

