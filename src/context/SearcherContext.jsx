import { createContext, useState } from 'react'

export const SearcherContext = createContext({})

export function SearcherContextProvider ({ children }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState(false)

  return (
    <SearcherContext.Provider value={{ query, setQuery, sort, setSort }}>
      {children}
    </SearcherContext.Provider>
  )
}
