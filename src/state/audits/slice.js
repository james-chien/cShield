import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'

export const auditsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://s1.defiyield.info/',
  }),
  endpoints: (build) => ({
    getAudits: build.query({
      query: (args) => `audit?${qs.stringify(args)}`,
    }),
  }),
})

export const { useGetAuditsQuery } = auditsApi
