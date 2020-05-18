import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments';
import { CommentsWrapper, CommentsTitle } from './styled.js'

const Comments = ({ url, title }) => {
  const postUrl = `https://willianmonteiro.com.br${url}`

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      
      <ReactDisqusComments
        shortname='willianmonteiro-com-br'
        identifier={postUrl}
        title={title}
        url={postUrl}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments