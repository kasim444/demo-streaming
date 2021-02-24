/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { FeedsType } from '@interfaces'

type OrderTypes = 'asc' | 'desc'

export const compareValues = (key: string, order: OrderTypes = 'asc') => {
  return function innerSort(a: { [x: string]: any }, b: { [x: string]: any }) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }

    return order === 'desc' ? comparison * -1 : comparison
  }
}

export const sortCollection = (
  data: FeedsType,
  key: string,
  order: OrderTypes = 'asc'
) => {
  const sortedEntries = data.entries.slice().sort(compareValues(key, order))

  return {
    total: sortedEntries.length,
    entries: sortedEntries,
  }
}

export const filterByProgramType = (
  data: FeedsType,
  programType: 'series' | 'movie' = 'series'
) => {
  const series = data.entries.filter(
    (entrie) => entrie.programType === programType
  )

  return {
    total: series.length,
    entries: series,
  }
}

export const filterBySearchText = (
  data: FeedsType | undefined,
  searchText: string
) => {
  if (!data) {
    return
  }

  const filteredData = data.entries.filter((entrie) =>
    entrie.title.toLocaleLowerCase().includes(searchText.toLowerCase())
  )

  return {
    total: filteredData.length,
    entries: filteredData,
  }
}
