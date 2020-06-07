import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import Hit from './Hit.js'

import { SearchWrapper } from './styled'

const searchConfig = {
  appId: String(process.env.GATSBY_ALGOLIA_APP_ID),
  searchOnlyAPIKey: String(process.env.GATSBY_ALGOLIA_SEARCH_KEY),
  indexName: String(process.env.GATSBY_ALGOLIA_INDEX_NAME),
}

const searchClient = algoliasearch(searchConfig.appId, searchConfig.searchOnlyAPIKey)

const Search = () => (
  <SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={searchConfig.indexName}>
      <SearchBox autofocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats 
        translations={{ stats(nbHits, timeSpentMs){
          return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
        }}} 
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </SearchWrapper>
)

export default Search