import { useState, useEffect } from 'react'
import { FeedsType } from '../interfaces'

/**
 * The hook of collection data for filter
 * @param data Base collection data
 * @param isSuccess Response status
 */
const useCollection = (data: FeedsType | undefined, isSuccess: boolean) => {
  const [collection, setCollection] = useState<FeedsType | undefined>(undefined)

  useEffect(() => {
    if (isSuccess) {
      setCollection(data)
    }
  }, [isSuccess, data])

  return { collection, setCollection }
}

export default useCollection
