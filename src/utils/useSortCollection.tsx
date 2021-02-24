import { Dispatch, SetStateAction, useEffect } from 'react'
import { SortTypes, FeedsType } from '@interfaces'
import { sortCollection } from '@/utils/filter-collection'

const useSortCollection = (
  collection: FeedsType | undefined,
  setCollection: Dispatch<SetStateAction<FeedsType | undefined>>,
  sortType: SortTypes | string | null | undefined
) => {
  useEffect(() => {
    if (collection && sortType) {
      switch (sortType) {
        case 'yearDecr':
          setCollection(sortCollection(collection, 'releaseYear', 'desc'))
          break
        case 'yearInc':
          setCollection(sortCollection(collection, 'releaseYear'))
          break
        case 'titleAZ':
          setCollection(sortCollection(collection, 'title'))
          break
        case 'titleZA':
          setCollection(sortCollection(collection, 'title', 'desc'))
          break

        default:
          break
      }
    }
  }, [collection, setCollection, sortType])
}

export default useSortCollection
