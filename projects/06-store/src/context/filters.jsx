import { useState, createContext } from 'react'

export const FiltersContext = createContext()

export function FiltersProviders ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 30
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
