import React from 'react'
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem 
    slug={hit.fields.slug} 
    timeToRead={hit.timeToRead} 
    background={hit.background}
    category={hit.category} 
    title={hit.title} 
    description={hit.description} 
    date={hit.date} 
  />
)

export default Hit