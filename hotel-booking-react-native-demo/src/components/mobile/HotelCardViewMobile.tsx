import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import HotelCardMobile from './HotelCardMobile';
import {useAppSelector} from '../../redux/hooks';
import { useGetHotelResultQuery, useInitFilterResultMutation } from '../../redux/api/hotelApi';
import { getHotelDetails } from '../../data/getHotelDetails';
import { useDispatch } from 'react-redux';
import { setHotelDetailsAxios } from '../../redux/hotelSlice';

const HotelCardViewMobile = () => {
  const dispatch = useDispatch()
  const [Filter] = useInitFilterResultMutation();
  const {searchId, searchTracingKey, apiKey, hotels} = useAppSelector(
    (state: any) => state.hotel,
  );

  useGetHotelResultQuery({
    searchId: searchId,
    searchTracingKey: searchTracingKey,
    apiKey: apiKey,
  });


  const low = useAppSelector(state => state?.hotel?.lowestPrice)
  const high = useAppSelector(state => state?.hotel?.highestPrice)
  const searchIdFilter = useAppSelector(state => state?.hotel?.searchId);
  const sessionKeyFilter = useAppSelector(
    state => state?.hotel?.user_session_key,
  );
  const minDistanceHotel = useAppSelector(state => state?.hotel?.minDistanceHotel)
  const maxDistanceHotel = useAppSelector(state => state?.hotel?.maxDistanceHotel)
  const starRating = useAppSelector(state => state?.hotel?.starRating);
  const setFacilityId = useAppSelector(state => state.hotel.facilityId)
  const payload: any = {
    filterOne: {
      filters: {
        priceGroups: [
          {
            minPrice: low,
            maxPrice: high === 0 ? 400 : high,
          },
        ],
        startRatings: starRating,
        minDistance: minDistanceHotel,
        maxDistance: maxDistanceHotel,
        facilityIds: setFacilityId,
      },
    },
    searchId: searchIdFilter,
    sessionKey: sessionKeyFilter,
  };

  useEffect(() => {
    Filter({payload});
  },[low,high,minDistanceHotel,maxDistanceHotel,starRating,setFacilityId])
  
  
  const Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1];

  return (
    <View>
      {hotels?.map((hotel: any, i) => {
        return <HotelCardMobile hotel={hotel} />;
      })}
    </View>
  );
};

export default HotelCardViewMobile;
