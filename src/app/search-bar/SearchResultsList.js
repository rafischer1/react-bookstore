import React from 'react'

const SearchResultsList = ({results}) => {
  console.log("search result list:", results)
  if (results === undefined) {
    console.log("search results are undefined")
  }
  
  return (
    <div>
    Search Results! {results}
    </div>
  )
}

export default SearchResultsList