import appConfig from '../../../app.json'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAppSelector } from '../hooks'

//const userSession = useAppSelector((state) => state.hotel.user_session_key)
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: appConfig.apiBase,
        prepareHeaders: async (headers) => {
            headers.set('Accept', 'application/json'),
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include',
    }),
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['Hotel'],
})