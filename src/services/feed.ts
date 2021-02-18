import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query'
import { server } from '@config'

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api` }),
  entityTypes: [],
  endpoints: (build) => ({
    getFeeds: build.query({
      query: () => '/feed',
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetFeedsQuery } = feedApi
