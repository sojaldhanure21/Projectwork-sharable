import {api} from './stApi';
import {
  autoSuggest,
  Context,
  getHotelResult,
  getRoomData,
  InitHotelSearch,
  InitHotelSearchBody,
} from '../../../types';
import AsyncStorage from '@react-native-community/async-storage';

export const hotelApi = api.injectEndpoints({
  endpoints: build => ({
    getContext: build.query<Context, void>({
      providesTags: ['Hotel'],
      query: () =>
        'api/context?accountid=zentrum-demo-account&channelid=demo-channel',
    }),
    getHotelResult: build.query<getHotelResult, any>({
      providesTags: ['Hotel'],
      query: initObj => {
        return {
          url: `api/hotels/search/result/${initObj.searchId}?limit=20&offset=1`,
          headers: {
            cookie: initObj.apiKey,
            'search-tracing-key': initObj.searchTracingKey,
          },
        };
      },
    }),
    initHotelSearch: build.mutation<
      InitHotelSearch,
      {payload: InitHotelSearchBody}
    >({
      invalidatesTags: ['Hotel'],
      query: ({payload}) => ({
        body: {
          ...payload,
        },
        method: 'POST',
        url: 'api/hotels/search/init',
      }),
    }),
    initFilterResult: build.mutation<any, any>({
      query: ({payload}) => ({
        body: {
          ...payload.filterOne,
        },
        method: 'POST',
        url: `api/hotels/search/result/${payload.searchId}?limit=20&offset=0`,
        headers: {
          'user-session-key': payload.sessionKey,
          'Content-Type': 'application/json',
        },
      }),
    }),
    autosuggest: build.query<autoSuggest, string>({
      providesTags: ['Hotel'],
      query: searchParam => ({
        url: `api/content/autosuggest?term=${searchParam}`,
      }),
    }),
    autoSuggestHotel: build.query<any, any>({
      providesTags: ['Hotel'],
      query: config => ({
        url:
          `api/hotels/search/result/${config.searchId}/suggest/` + config.text,
        headers: {
          'user-session-key': config.sessionKey,
        },
      }),
    }),
    getHotelDetails: build.query<any, any>({
      providesTags: ['Hotel'],
      query: config => `api/hotels/${config}/content`,
    }),
    
    getRoomData: build.query<getRoomData, any>({
      providesTags: ['Hotel'],
      query: (roomData) => {
        return {
           url: `api/hotels/search/result/${roomData.searchId}/${roomData.hotelId}/rooms`
        };
      },
    })
  }),
  overrideExisting: false,
});

export const {
  useGetContextQuery,
  useGetHotelResultQuery,
  useInitHotelSearchMutation,
  useInitFilterResultMutation,
  useAutosuggestQuery,
  useAutoSuggestHotelQuery,
  useGetHotelDetailsQuery,
  useGetRoomDataQuery
} = hotelApi;
