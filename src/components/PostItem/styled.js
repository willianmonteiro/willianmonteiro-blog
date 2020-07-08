import styled from 'styled-components'
import media from 'styled-media-query'
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
  flex-direction: row;
  padding: 2rem 3rem;
  width: 100%;
  position: relative;
  
    body#grid & {
      border: none;
      padding: 2rem 1rem;
      flex-direction: column;
    }
`;

export const PostThumbnail = styled.img`
  max-width: 200px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;

    body#grid & {
      max-width: 100%;
      max-height: 300px;
      min-height: 300px;
    }

    ${media.lessThan('medium')`
      body#list & { 
        display: none;
      }
    `}
`

export const PostThumbnailCopyright = styled.small`
  font-size: 10px;
  background: #fff;
  margin-top: -14px;
  margin-left: -2px;
  padding: 2px 8px;
  
    body#list & { 
      position: absolute;
      bottom: 2.5rem;
      border-radius: 15px;
      margin-left: 0;
      
      ${media.lessThan('medium')`
        display: none;
      `}
    }
`

export const PostItemTag = styled.div`
  background: ${props => props.background || 'var(--highlight)'};
  width: fit-content;
  border-radius: 4px;
  padding: 2px 4px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: .6rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
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

