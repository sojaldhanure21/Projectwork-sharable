import {PayloadAction} from '@reduxjs/toolkit';
import {hotelApi, useAutosuggestQuery} from './api/hotelApi';
import * as toolkitRaw from '@reduxjs/toolkit';
import {autoSuggest} from '../../types';
import { Action } from '@remix-run/router';
const {createSlice} = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;

interface initialState {
  hotels: any;
  apiKey: string;
  autoSuggestResponse: autoSuggest;
  user_session_key: string;
  searchTracingKey: string;
  searchId: string;
  searchDestinationText: string;
  searchDestinationFromDate: string;
  searchDestinationToDate: string;
  adultsCount: number;
  childrenCount: number;
  locationId: any;
  hotelDetailsId:any;
  hotelDetails:any,
  hotelDetailsAxios:any,
  starRating: any,
  maxDistanceHotel: any,
  minDistanceHotel:any,
  HotelNameAutoSuggest:any,
  lowestPrice:any,
  highestPrice:any,
  facilityId:any,
  hotelRooms:any,
  reloadFlag:any
}

const initialState: initialState = {
  hotels: [],
  apiKey: '',
  autoSuggestResponse: {locations: [], status: ''},
  user_session_key: '',
  searchTracingKey: '',
  searchId: '',
  searchDestinationText: '',
  searchDestinationFromDate: '',
  searchDestinationToDate: '',
  adultsCount: 0,
  childrenCount: 0,
  locationId: '',
  hotelDetailsId: "",
  hotelDetails:[],
  hotelDetailsAxios:[],
  starRating:[],
  minDistanceHotel:0,
  maxDistanceHotel: 20,
  HotelNameAutoSuggest :[],
  lowestPrice: 0,
  highestPrice: 0,
  facilityId: [],
  hotelRooms:{},
  reloadFlag:""
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: initialState,
  reducers: {
    setSearchDestinationText: (state, action: PayloadAction<string>) => {
      state.searchDestinationText = action.payload;
    },
    setSearchDestinationFromDate: (state, action: PayloadAction<string>) => {
      state.searchDestinationFromDate = action.payload;
    },
    setSearchDestinationToDate: (state, action: PayloadAction<string>) => {
      state.searchDestinationToDate = action.payload;
    },
    setAdultsCountRedux: (state, action: PayloadAction<number>) => {
      state.adultsCount = action.payload;
    },
    setChildrenCountRedux: (state, action: PayloadAction<number>) => {
      state.childrenCount = action.payload;
    },
    setLocationId: (state, action: PayloadAction<any>) => {
      state.locationId = action.payload;
    },
    setHotelDetailsId: (state, action: PayloadAction<any>) => {
      state.hotelDetailsId = action.payload
    },
    setHotelDetailsAxios:(state,action: PayloadAction<any>)=>{
      state.hotelDetailsAxios = action.payload
    },
    setStarRating:(state, action: PayloadAction<any>)=>{
      state.starRating = action.payload
    },
    setMaxDistanceHotel:(state, action: PayloadAction<any>) => {
      state.maxDistanceHotel = action.payload
    },
    setMinDistanceHotel:(state, action: PayloadAction<any>) => {
      state.minDistanceHotel = action.payload
    },
    setLowestPrice: (state, action: PayloadAction<any>) => {
      state.lowestPrice = action.payload
    },
    setHighestPrice: (state, action: PayloadAction<any>) => {
      state.highestPrice = action.payload
    },
    setFacilityId: (state, action: PayloadAction<any>) => {
      state.facilityId = action.payload
    }
  
  },
  extraReducers: builder => {
    builder.addMatcher(
      hotelApi.endpoints.initHotelSearch.matchFulfilled,
      (state, {payload}: any) => {
        if (payload.status) {
          state.searchId = payload.searchId;
          state.searchTracingKey = payload.searchTracingKey;
        }
      },
    ),
      builder.addMatcher(
        hotelApi.endpoints.getContext.matchFulfilled,
        (state, {payload}: any) => {
          state.user_session_key = payload.sessionKey;
          state.apiKey = payload.apiKey;
        },
      ),
      builder.addMatcher(
        hotelApi.endpoints.autosuggest.matchFulfilled,
        (state, {payload}: any) => {
          if (payload.status) {
            state.autoSuggestResponse.locations = payload.locations;
            state.autoSuggestResponse.status = payload.status;
          }
        },
      ),
      builder.addMatcher(
        hotelApi.endpoints.autoSuggestHotel.matchFulfilled,
        (state,{payload}:any) => {
          if(payload.status){
            state.HotelNameAutoSuggest = payload.response;
          }
        }
      )
      builder.addMatcher(
        hotelApi.endpoints.getHotelResult.matchFulfilled,
        (state, {payload}: any) => {
          if (payload.status) {
            state.hotels = payload.hotels;
            state.reloadFlag = payload.searchStatus
          }        
        },
      ),
      builder.addMatcher(
        hotelApi.endpoints.initFilterResult.matchFulfilled,
        (state, {payload}:any) => {
          if(payload.status){
            state.hotels = payload.hotels;
            state.reloadFlag = payload.searchStatus            
          }
         
        }
      )
      builder.addMatcher(
        hotelApi.endpoints.getHotelDetails.matchFulfilled,
         (state,{payload}:any) => {
          if(payload.status){
            state.hotelDetails = payload.hotel
            state.reloadFlag = payload.searchStatus 
          }
        }
      ),
      builder.addMatcher(
        hotelApi.endpoints.getRoomData.matchFulfilled,
        (state, {payload}:any) => {
          if(payload.status){
          state.hotelRooms = payload.groups
          }
        }
      )
  },
});

export const {
  setSearchDestinationText,
  setSearchDestinationFromDate,
  setSearchDestinationToDate,
  setAdultsCountRedux,
  setChildrenCountRedux,
  setLocationId,
  setHotelDetailsId,
  setHotelDetailsAxios,setStarRating,
  setMaxDistanceHotel,
  setMinDistanceHotel,
  setLowestPrice,
  setHighestPrice,
  setFacilityId
} = hotelSlice.actions;
export default hotelSlice.reducer;
