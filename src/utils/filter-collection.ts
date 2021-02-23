import { FeedsType } from '@interfaces'

export const sortByTitleCollection = (data: FeedsType) => {
  const sortedEntries = data.entries.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  return {
    total: sortedEntries.length,
    entries: sortedEntries,
  }
}

export const filterByProgramType = (
  data: FeedsType,
  programType: 'series' | 'movie' = 'series'
) => {
  console.log({ programType })
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
