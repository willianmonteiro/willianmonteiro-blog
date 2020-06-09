import React from 'react'
import { PaginationWrapper } from './styled'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <PaginationWrapper>
    {!isFirst && (
      <AniLink 
        cover
        bg='var(--background)'
        direction='right'
        duration={0.6}
        to={prevPage}
      >
        ← página anterior
      </AniLink>
    )}
    <p>{currentPage} de {numPages}</p>
    {!isLast && (
      <AniLink 
        cover
        bg='var(--background)'
        direction='left'
        duration={0.6}
        to={nextPage}
      >
        proxima página →
      </AniLink>
    )}
  </PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination;