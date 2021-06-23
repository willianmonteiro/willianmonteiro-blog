import React from 'react'
import PropTypes from 'prop-types'

import { 
  PostItemLink, 
  Container, 
  PostThumbnail,
  PostThumbnailCopyright,
  PostItemTag,
  PostItemInfo, 
  PostItemDate, 
  PostItemTitle, 
  PostItemDescription 
} from './styled'

const PostItem = ({slug, background, featuredImage, imageCopyright, category, date, timeToRead, title, description }) => {

  return (
    <PostItemLink to={slug}>
      <Container>
        <PostThumbnail src={`/${featuredImage}`} text={`${title} - Photo by ${imageCopyright} on Unsplash`} />
        <PostThumbnailCopyright>Photo by {imageCopyright} on Unsplash</PostThumbnailCopyright>
        <PostItemInfo>
          <PostItemTag background={background}>{category}</PostItemTag>
          <PostItemDate>{timeToRead} min de leitura</PostItemDate>
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
  featuredImage: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem;
