import React, {useEffect, useState} from 'react';
import {Platform, Pressable, Text, View} from 'react-native';
import HotelImageContainerMobile from '../components/mobile/HotelImageContainerMobile';
import StyleSheet from 'react-native-media-query';
import {
  CalendarIconBlueMobile,
  CustomerCountIconMobile,
  HeartIcon,
  LocationIconMobileDetails,
  ShareIcon,
} from '../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import HotelMenuBarMobile from '../components/mobile/HotelMenuBarMobile';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../redux/hooks';
import {hotelData} from '../data/hotelData';
import {setHotelDetailsAxios} from '../redux/hotelSlice';
import { getHotelDetails } from '../data/getHotelDetails';
import { useGetHotelDetailsQuery } from '../redux/api/hotelApi';
const HotelDetailsResultMobile = () => {
  const navigate = useNavigate();

  function openCalendar() {
    navigate('/date_to_and_from');
  }

  function openGuest() {
    navigate('/guest_count');
  }
  // const [hotel, setHotel] = useState<any>({});

  const dispatch = useDispatch();
  const hotelId = useAppSelector(state => state.hotel.hotelDetailsId);

  // useEffect(() => {
  //   const data = hotelData(hotelId).then(data => setHotel(data.hotel));
  // }, []);

  // dispatch(setHotelDetailsAxios(hotel));
  useGetHotelDetailsQuery(hotelId)

  const hotel = useAppSelector((state) => state?.hotel?.hotelDetails)

  return (
    <>
      <View>
        <View style={styles.ImageConatiner}>
          <HotelImageContainerMobile hotel={hotel?.images} />
        </View>
        <View style={styles.LikeConatiner}>
          <ShareIcon />
          <HeartIcon />
        </View>
        <View style={styles.HotelNameConatiner}>
          <Text style={styles.HotelName} numberOfLines={1}>
            {hotel?.name}
          </Text>
          <Text style={styles.HotelAddress} numberOfLines={1}>
            {' '}
            <LocationIconMobileDetails />{' '}
            <Text style={{marginLeft: '1vw'}}>
              {hotel?.contact?.address?.line1}{" "}
              {hotel?.contact?.address?.line2}{" "}
              {hotel?.contact?.address?.city}{" "}
              {hotel?.contact?.address?.postalCode}
            </Text>
          </Text>
        </View>

        <View>
          <Text style={{marginTop: '2vh', marginHorizontal: 'auto'}}>
            <Text style={styles.Price}>Price</Text>
            <Text style={styles.PriceText}>Starting from</Text>
          </Text>

          <Text style={styles.TextModule}>Check-in | Check-out</Text>

          <Text
            onPress={() => openCalendar()}
            style={styles.SearchField}
            dataSet={{media: ids.SearchField}}>
            <CalendarIconBlueMobile />
            <Text style={{marginLeft: '4vw'}}>Calendar</Text>
          </Text>

          <Text style={styles.TextModule}>Guests</Text>

          <Text
            onPress={() => openGuest()}
            style={styles.SearchField}
            dataSet={{media: ids.SearchField}}>
            <CustomerCountIconMobile />
            <Text style={{marginLeft: '4vw'}}>Guest</Text>
          </Text>

          <Pressable style={styles.CheckText}>
            <Text style={styles.CheckTextInner}>Check Availablity</Text>
          </Pressable>

          <HotelMenuBarMobile details={hotel}/>
        </View>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      ImageConatiner: {
        height: '44vh',
        width: '100%',
      },
      LikeConatiner: {
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row-reverse',
      },
      HotelNameConatiner: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      },
      HotelName: {
        fontFamily: 'roboto',
        fontSize: 28,
        color: '#222222',
        fontWeight: '700',
        marginLeft: '2vw',
      },
      HotelAddress: {
        marginLeft: '2vw',
        fontFamily: 'roboto',
        color: '#91A2A9',
        fontSize: 20,
        marginTop: '0.5vh',
      },
      SearchField: {
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        height: '8vh',
        borderRadius: 8,
        fontFamily: 'roboto',
        fontSize: 24,
        paddingLeft: '4vw',
        paddingVertical: '1.5vh',
        borderColor: '#222222',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '98%',
        marginHorizontal: 'auto',
      },
      Price: {
        fontFamily: 'roboto',
        fontSize: 24,
        color: '#222222',
        fontWeight: '600',
      },
      PriceText: {
        fontFamily: 'roboto',
        fontSize: 14,
        marginLeft: 2,
        fontStyle: 'italic',
        color: '#91A2A9',
      },
      TextModule: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: '2vw',
        color: '#91A2A9',
      },
      CheckText: {
        backgroundColor: '#222222',
        width: '50%',
        paddingVertical: '1.5vh',
        fontFamily: 'roboto',
        fontSize: 18,
        marginHorizontal: 'auto',
        marginTop: '1vh',
        borderRadius: 10,
      },
      CheckTextInner: {
        marginHorizontal: 'auto',
        fontFamily: 'roboto',
        fontSize: 18,
        color: '#FFFFFF',
      },
    },
  }),
});

export default HotelDetailsResultMobile;
