import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query'
import { server } from '@config'
import { FeedsType } from '../interfaces'
import { sortByTitleCollection } from '@/utils/filter-collection'

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api` }),
  entityTypes: [],
  endpoints: (build) => ({
    getFeeds: build.query({
      query: () => '/feed',
      transformResponse: ({ total, entries }: FeedsType) => {
        return {
          total,
          entries: sortByTitleCollection(entries),
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetFeedsQuery } = feedApi
