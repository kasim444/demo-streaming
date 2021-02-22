import { FeedType } from '@interfaces'

export const sortByTitleCollection = (entries: FeedType[]) =>
  entries.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
