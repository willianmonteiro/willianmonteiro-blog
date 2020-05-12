import React from 'react'
import PropTypes from 'prop-types'

import { 
  PostItemLink, 
  Container, 
  PostItemThumb, 
  PostItemInfo, 
  PostItemDate, 
  PostItemTitle, 
  PostItemDescription 
} from './styled'

const PostItem = ({slug, background, category, date, timeToRead, title, description }) => (
  <PostItemLink to={slug}>
    <Container>
      <PostItemThumb background={background}>{category}</PostItemThumb>
      <PostItemInfo>
        <PostItemDate>{date} • {timeToRead} min de leitura</PostItemDate>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDescription>{description}</PostItemDescription>
      </PostItemInfo>
    </Container>
  </PostItemLink>
);

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