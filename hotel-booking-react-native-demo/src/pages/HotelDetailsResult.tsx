import React, {FC, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import HotelDetailsPreview from '../components/desktop/HotelDetailsPreview';
import AvilabilityContainer from '../components/desktop/AvilabilityContainer';
import HotelMenuBar from '../components/desktop/HotelMenuBar';
import {BacktoSearchIcon} from '../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import StyleSheet from 'react-native-media-query';
import {useGetHotelDetailsQuery} from '../redux/api/hotelApi';
import AsyncStorage from '@react-native-community/async-storage';
import {useAppSelector} from '../redux/hooks';
import {hotelData} from '../data/hotelData';
import {useDispatch} from 'react-redux';
import {setHotelDetailsAxios} from '../redux/hotelSlice';
import { getHotelDetails } from '../data/getHotelDetails';

const HotelDetailsResult: FC = () => {
  // const [hotel, setHotel] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotelId = useAppSelector(state => state.hotel.hotelDetailsId);

  // useEffect(() => {
  //   const data = hotelData(hotelId).then(data => setHotel(data.hotel));
  // }, []);

  useGetHotelDetailsQuery(hotelId)
   const hotel = useAppSelector((state) => state?.hotel?.hotelDetails)
  // dispatch(setHotelDetailsAxios(hotel));
  // console.log("rrrrr", useAppSelector((state)=> state.hotel.hotelDetailsAxios))

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.subMainContainer}>
          <Pressable
            onPress={() => {
              navigate('/hotel_search');
            }}>
            <View style={styles.BacktoSearchContainer}>
              <Text style={styles.BackArrow}>
                <BacktoSearchIcon />
              </Text>
              <Text style={styles.BackToSearchText}>Back to search</Text>
            </View>
          </Pressable>
          <View
            style={styles.HotelsPreViewContainer}
            dataSet={{media: ids.HotelsPreViewContainer}}>
            <HotelDetailsPreview details={hotel} />
            <AvilabilityContainer />
          </View>
          <View>
            <HotelMenuBar details={hotel}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const {ids, styles} = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    backgroundColor: '#F4F5F9',
  },
  subMainContainer: {
    width: '90vw',
    marginHorizontal: '5vw',
    justifyContent: 'center',
    marginTop: 5,
  },
  BacktoSearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 9,
    marginBottom: 14,
  },
  HotelsPreViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
  BackArrow: {
    color: '#5D6771',
    fontSize: 18,
  },
  BackToSearchText: {
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#5D6771',
    fontSize: 18,
  },
});

export default HotelDetailsResult;
