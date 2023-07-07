import React from 'react';
import {Platform, Pressable, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  CalendarIconBlueMobile,
  CustomerCountIconMobile,
  ModifySearchIconMobile,
  SearchIconMobile,
} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { InitHotelSearchBody } from '../../../types';
import { useInitHotelSearchMutation } from '../../redux/api/hotelApi';

const HotelSearchContainerMobile = () => {
  const navigate = useNavigate();
  const [initHotelSearch] = useInitHotelSearchMutation();
  const searchDestinationText = useAppSelector(
    (state: any) => state.hotel.searchDestinationText,
  );
  const searchDestinationFromDate = useAppSelector(
    (state: any) => state.hotel.searchDestinationFromDate,
  );
  const searchDestinationToDate = useAppSelector(
    (state: any) => state.hotel.searchDestinationToDate,
  );

  const locationId = useAppSelector((state: any) => state.hotel.locationId)

  const adultsCount = useAppSelector((state:any) => state.hotel.adultsCount);
  const childrenCount = useAppSelector((state:any) => state.hotel.childrenCount);

  function searchResults() {
    const payload: InitHotelSearchBody = {
      culture: 'en-us',
      currency: 'USD',
      checkIn: getFormatedDate(new Date(searchDestinationFromDate), 'MM/DD/YYYY'),
      checkOut: getFormatedDate(new Date(searchDestinationToDate), 'MM/DD/YYYY'),
      rooms: [
        {
          adults: adultsCount,
          children: childrenCount,
          childAges: [],
        },
      ],
      countryOfResidence: 'US',
      nationality: 'US',
      locationId: locationId,
      fullName: searchDestinationText,
      channelId: '',
    };
    initHotelSearch({payload});
    navigate('/hotel_search');
  }

  function searchDestination() {
    navigate('search_destination');
  }

  function openCalendar() {
    navigate('date_to_and_from');
  }

  function openGuest() {
    navigate('guest_count');
  }

  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
          <Text style={styles.HotelDeals} dataSet={{media: ids.HotelDeals}}>
            Unlock Private Hotel Deals
          </Text>
          <Text style={styles.Offers} dataSet={{media: ids.Offers}}>
            Get 30-75% off the best publicaly available rate
          </Text>
          <View
            style={styles.SearchContainer}
            dataSet={{media: ids.SearchContainer}}>
            <Text
              numberOfLines={1}
              onPress={() => searchDestination()}
              style={styles.SearchField}
              dataSet={{media: ids.SearchField}}>
              <ModifySearchIconMobile />
              <Text style={{marginLeft: '4vw'}}>
                {searchDestinationText === ''
                  ? 'Search'
                  : searchDestinationText}
              </Text>
            </Text>
            <Text
              onPress={() => openCalendar()}
              style={styles.SearchField}
              dataSet={{media: ids.SearchField}}>
              <CalendarIconBlueMobile />
              <Text style={{marginLeft: '4vw'}} numberOfLines={1}>{ `From ${searchDestinationFromDate} To ${searchDestinationToDate}`}</Text>
            </Text>
            <Text
              onPress={() => openGuest()}
              style={styles.SearchField}
              dataSet={{media: ids.SearchField}}>
              <CustomerCountIconMobile />
              <Text style={{marginLeft: '4vw'}} numberOfLines={1}>{adultsCount === 0 ? "Guest" : `${adultsCount} Adult, ${childrenCount} children` }</Text>
            </Text>
          </View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              textAlign: 'right',
              marginRight: '6vw',
            }}>
            Clear
          </Text>
        </View>

        <Pressable
          onPress={() => searchResults()}
          style={styles.SearchTabConatiner}
          dataSet={{media: ids.SearchTabConatiner}}>
          <Text style={{marginVertical: 'auto'}}>
            <SearchIconMobile />
          </Text>
          <Text style={styles.SearchText} dataSet={{media: ids.SearchText}}>
            Search
          </Text>
        </Pressable>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '90%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        marginHorizontal: 'auto',
        marginTop: '4%',
        borderRadius: 25,
        height: '60vh',
      },
      SubContainer: {
        marginTop: 20,
      },
      HotelDeals: {
        fontFamily: 'roboto',
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: '4%',
      },
      Offers: {
        marginLeft: '4%',
        fontFamily: 'roboto',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 10,
      },
      SearchContainer: {
        marginHorizontal: '4%',
        marginTop: 5,
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
      },
      SearchTabConatiner: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: '4vh',
        marginTop: '2vh',
        height: '8vh',
        backgroundColor: '#0B8ABB',
        justifyContent: 'center',
        borderRadius: 30,
      },
      SearchText: {
        color: '#FFFFFF',
        fontFamily: 'roboto',
        fontSize: 24,
        marginLeft: '2vw',
        marginVertical: 'auto',
      },
    },
  }),
});

export default HotelSearchContainerMobile;
