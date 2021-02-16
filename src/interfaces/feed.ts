export type ImagesOfFeedType = {
  'Poster Art': {
    url: string
    width: number
    height: number
  }
}

export type FeedType = {
  title: string
  description: string
  programType: 'series' | 'movie'
  images: ImagesOfFeedType
  releaseYear: number
}

export type FeedsType = {
  total: number
  entries: FeedType[]
}
