import { filterByProgramType, sortCollection } from '@/utils/filter-collection'
import { server } from '@config'
import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query'
import { FeedsType } from '../interfaces'

export const feedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api` }),
  endpoints: (build) => ({
    getSeries: build.query({
      query: () => '/feed',
      transformResponse: (data: FeedsType) =>
        filterByProgramType(sortCollection(data, 'title')),
    }),
    getMovies: build.query({
      query: () => '/feed',
      transformResponse: (data: FeedsType) =>
        filterByProgramType(sortCollection(data, 'title'), 'movie'),
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetSeriesQuery, useGetMoviesQuery } = feedApi
