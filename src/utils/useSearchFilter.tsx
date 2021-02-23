import { filterBySearchText } from '@/utils/filter-collection'
import { FeedsType } from '@interfaces'
import { Dispatch, SetStateAction, useEffect } from 'react'

/**
 * The hook of Search by title filter
 * @param baseCollection Base collection
 * @param setFilteredCollection Set filtered collection func
 * @param searchText Search term
 */
const useSearchFilter = (
  baseCollection: FeedsType | undefined,
  setFilteredCollection: Dispatch<SetStateAction<FeedsType | undefined>>,
  searchText: string
) => {
  useEffect(() => {
    if (searchText.length >= 3) {
      const filteredSeries = filterBySearchText(baseCollection, searchText)
      setFilteredCollection(filteredSeries)
    } else {
      setFilteredCollection(baseCollection)
    }
  }, [searchText, baseCollection, setFilteredCollection])
}

export default useSearchFilter
