import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { 
  PostItemLink, 
  Container, 
  PostItemThumb, 
  PostItemInfo, 
  PostItemDate, 
  PostItemTitle, 
  PostItemDescription 
} from './styled'

const PostItem = ({slug, background, featuredImage, category, date, timeToRead, title, description }) => {
  console.log(featuredImage);
  // let featuredImgFluid = image.childImageSharp.fluid

  return (
    <PostItemLink to={slug}>
      <Container>
        {/* <PostItemThumb fluid={featuredImage} alt={title} /> */}
        <img src={`/${featuredImage}`} />
        {/* <PostItemThumb background={background}>{category}</PostItemThumb> */}
        <PostItemInfo>
          <PostItemDate>{date} • {timeToRead} min de leitura</PostItemDate>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </Container>
    </PostItemLink>
  );
}
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem;