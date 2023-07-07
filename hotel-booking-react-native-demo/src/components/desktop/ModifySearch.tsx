import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  CalendarIconBlue,
  MapIcon,
  ModifySearchIcon,
  VerticalBar,
} from '../../assets/icons/IconsSvg';
import SearchDropDown from './modals/SearchDropDown';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import GuestModal from './modals/GuestModal';
import { useAutosuggestQuery, useGetHotelResultQuery, useInitHotelSearchMutation } from '../../redux/api/hotelApi';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setSearchDestinationFromDate, setSearchDestinationText, setSearchDestinationToDate } from '../../redux/hotelSlice';
import { FormatDateService } from '../../data/FormatDateService';
import { InitHotelSearchBody } from '../../../types';

const ModifySearch = () => {
  const dispatch = useDispatch()
  const [hideSearchDropDown, sethideSearchDropDown] = useState(false);
  const [searchInputText, setSearchInputText] = useState('');
  const [startDate, setStartDate] = useState('14 Nov 2022');
  const [endDate, setEndDate] = useState('18 Nov 2022');
  const [fromDateFlag, setFromDateFlag] = useState(false);
  const [toDateFlag, setToDateFlag] = useState(false);
  const [guestModalFlag, setGuestModalFlag] = useState(false);
  const [locationId, setLocationId] = useState("");
  
  const searchDestinationText = useAppSelector((state:any)=> state.hotel.searchDestinationText)
  const searchDestinationFromDate = useAppSelector((state:any) => state.hotel.searchDestinationFromDate)
  const searchDestinationToDate = useAppSelector((state: any) => state.hotel.searchDestinationToDate)
  const adultsCount = useAppSelector((state:any) => state.hotel.adultsCount)
  const childrenCount = useAppSelector((state:any) => state.hotel.childrenCount)


  useAutosuggestQuery(searchInputText);
  const [initHotelSearch] = useInitHotelSearchMutation();
  const {
    searchId,
    searchTracingKey,
    apiKey,
    hotels
  } = useAppSelector((state:any) => state.hotel);

  function modifySearch(){
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
      fullName: searchInputText,
      channelId: '',
    };
    initHotelSearch({payload});
    useGetHotelResultQuery({searchId: searchId, searchTracingKey: searchTracingKey, apiKey: apiKey});
  }

  function onHideEveryting() {
    setFromDateFlag(false);
    setToDateFlag(false);
    setGuestModalFlag(false);
  }

  function changeSearchText(e: any) {
    sethideSearchDropDown(true);
    dispatch(setSearchDestinationText(e))
    // setSearchInputText(e);
    setFromDateFlag(false);
    setToDateFlag(false);
    setGuestModalFlag(false);
    if(String(e)?.length){
      sethideSearchDropDown(true);
    }
    else{
      sethideSearchDropDown(false);
    }
    setSearchInputText(e);
  }

  function dateForBookingFrom(date: any) {
    dispatch(setSearchDestinationFromDate(date))
    // setStartDate(date);
    setFromDateFlag(false);
  }

  function openStartDatePicker() {
    if (fromDateFlag === false) {
      setFromDateFlag(true);
      sethideSearchDropDown(false);
      setToDateFlag(false);
      setGuestModalFlag(false);
    } else {
      setFromDateFlag(false);
    }
  }

  function dateForFromBookingFrom(date: any) {
    dispatch(setSearchDestinationToDate(date))
    setEndDate(date);
    setToDateFlag(false);
  }

  function openEndDatePicker() {
    if (toDateFlag === false) {
      setToDateFlag(true);
      sethideSearchDropDown(false);
      setFromDateFlag(false);
      setGuestModalFlag(false);
    } else {
      setToDateFlag(false);
    }
  }

  function onHideGuestModal() {
    if (guestModalFlag === false) {
      setGuestModalFlag(true);
      sethideSearchDropDown(false);
      setFromDateFlag(false);
      setToDateFlag(false);
    } else {
      setGuestModalFlag(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.ContentContainer}>
        <View style={styles.headers}>
          <View style={styles.subContainer}>
            <Pressable
              style={styles.textInput}
              onPress={() => onHideEveryting()}>
              <View style={{position: 'absolute', top: 4, paddingLeft: 30}}>
                <MapIcon />
              </View>
              <TextInput
                style={styles.TextInputFirst}
                dataSet={{media:ids.TextInputFirst}}
                onChangeText={e => changeSearchText(e)}
                value={searchDestinationText}
                placeholder="Enter Your Destination !"
                placeholderTextColor="#475054"
              />
            </Pressable>
            {hideSearchDropDown ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  width: '40vw',
                  top: '6vh',
                }}>
                <SearchDropDown
                  searchInputText={searchInputText}
                  setSearchInputText={setSearchInputText}
                  sethideSearchDropDown={sethideSearchDropDown}
                  setLocationId={setLocationId}
                />
              </View>
            ) : null}

            <View style={styles.datePicker}>
              <Text style={{position: 'absolute', top: 2, left: 6}}>
                <CalendarIconBlue />
              </Text>
              <Text
                onPress={() => openStartDatePicker()}
                style={styles.CalendarDateFirst} dataSet={{media:ids.CalendarDateFirst}}>
                {FormatDateService(searchDestinationFromDate)}
              </Text>
              <Text style={{marginVertical: 'auto', marginLeft: '6%'}}>
                <VerticalBar />
              </Text>
              <Text
                onPress={() => openEndDatePicker()}
                style={styles.CalendarDateSecond} dataSet={{media:ids.CalendarDateSecond}}>
                {FormatDateService(searchDestinationToDate)}
              </Text>
            </View>

            {fromDateFlag ? (
              <View
                style={styles.CalendarFirst} dataSet={{media: ids.CalendarFirst}}>
                <DatePicker
                  onSelectedChange={date => dateForBookingFrom(date)}
                  style={{zIndex: 1000}}
                  mode={'calendar'}
                />
              </View>
            ) : null}

            {toDateFlag ? (
              <View
                style={styles.CalendarSecond} dataSet={{media: ids.CalendarSecond}}>
                <DatePicker
                  onSelectedChange={date => dateForFromBookingFrom(date)}
                  style={{zIndex: 1000}}
                  mode={'calendar'}
                />
              </View>
            ) : null}

            <Pressable
              style={styles.GuestCount} dataSet={{media: ids.GuestCount}}
              onPress={() => onHideGuestModal()}>
              <Text style={styles.BookingPersons} dataSet={{media: ids.BookingPersons}}>{adultsCount === 0 && childrenCount === 0 ? "Customer Count" : `${adultsCount} Adult ${childrenCount !== 0 ? `${childrenCount} Children`:""}`}</Text>
            </Pressable>

            {guestModalFlag ? (
              <View style={styles.GuestModal} dataSet={{media: ids.GuestModal}}>
                <GuestModal />
              </View>
            ) : (
              false
            )}

            <Pressable onPress={()=> modifySearch()} style={styles.modifySearch} dataSet={{media: ids.modifySearch}}>
              <Text>
                <ModifySearchIcon />
              </Text>
              <Text style={styles.ModifyText} dataSet={{media: ids.ModifyText}} numberOfLines={1}>Modify</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const {ids,styles} = StyleSheet.create({
  container: {
    height: '12vh',
    backgroundColor: '#E4F1F6',
    width: '100vw',
  },
  ContentContainer: {
    width: '90vw',
    marginHorizontal: '5vw',
    transform: [{translateY: -3}],
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CalendarDateFirst:{    
      marginVertical: 'auto',
      marginLeft: '18%',
      fontFamily: 'roboto',
      fontSize: 14,
      color: '#475054',
      fontWeight: '500',   
      '@media (max-width: 800px)': {
        fontSize: 12,
      }, 
  },
  CalendarDateSecond:{
    marginVertical: 'auto',
    marginLeft: '6%',
    fontFamily: 'roboto',
    fontSize: 14,
    color: '#475054',
    fontWeight: '500',
    '@media (max-width: 800px)': {
      fontSize: 12,
    },
  },
  CalendarFirst:{
    width: '18vw',
    position: 'absolute',
    top: '6.5vh',
    left: '34vw',
    '@media (max-width: 1100px)': {
      width: '26vw',
    },
    '@media (max-width: 800px)': {
      width: '30vw',
    },
  },
  CalendarSecond:{
    width: '18vw',
    position: 'absolute',
    top: '6.5vh',
    left: '52vw',
    '@media (max-width: 1100px)': {
      width: '26vw',
    },
    '@media (max-width: 800px)': {
      width: '30vw',
    },
  },
  datePicker: {
    // marginRight: 70,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 16,
    position: 'relative',
    ...Platform.select({
      web: {
        height: '100%',
        width: '22.5%',
        textAlign: 'center',
        borderRadius: 5,
      },
      android: {
        width: '50%',
      },
    }),
  },
  GuestCount: {
    backgroundColor: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
    position: 'relative',
    ...Platform.select({
      web: {
        height: '100%',
        width: '18%',
        textAlign: 'center',
        borderRadius: 5,

      },
      android: {
        width: '50%',
      },
    }),
  },
  GuestModal: {
    position: 'absolute',
    width: '25vw',
    left: '58vw',
    backgroundColor: '#FFFFFF',
    top: '6.5vh',
    height: '20vh',
    zIndex: 1,
    borderRadius: 6,
    '@media (max-width: 1100px)': {
      width: '30vw',
    },
    '@media (max-width: 950px)': {
      width: '35vw',
      left: '50vw',
    },
    '@media (max-width: 800px)': {
      width: '40vw',
      left: '50vw',
    },
    '@media (max-width: 730px)': {
      width: '45vw',
      left: '50vw',
    },
    '@media (max-width: 630px)': {
      width: '50vw',
      left: '45vw',
    },
  },
  datePickerStyle: {
    marginTop: -38,
    backgroundColor: 'white',
    ...Platform.select({
      web: {
        marginTop: -38,
      },
      android: {
        width: '100%',
      },
    }),
  },
  text: {
    fontSize: 35,
    ...Platform.select({
      web: {
        fontSize: 35,
      },
      android: {
        width: '100%',
      },
    }),
  },
  headers: {
    // backgroundColor: '#C3E8BD',
    ...Platform.select({
      web: {
        height: '10%',
        width: '100%',
        padding: 10,
        marginTop: '1%',
        //  alignItems:"center"
      },
      android: {
        width: '10%',
      },
    }),
  },
  BookingPersons: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#475054',
    transform: [{translateY: 10}],
    '@media (max-width: 730px)': {
      fontSize: 14,
    },
  },
  textInput: {
    fontFamily: 'Roboto',
    position: 'relative',
    backgroundColor: '#FFFFFF',
    textAlign: 'left',
    fontSize: 16,
    ...Platform.select({
      web: {
        width: '40vw',
        borderStyle: 'solid',
        borderColor: '#B1E1F7',
        borderWidth: 1,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
      },
      android: {
        width: '50%',
      },
    }),
  },
  TextInputFirst: {
    paddingLeft: '6vw',
    width: '100%',
    outlineStyle: 'none',
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '500',
    color: '#475054',
    '@media (max-width: 920px)': {
      paddingLeft: '10vw',
    },
    '@media (max-width: 700px)': {
      fontSize: 14,
    },
  },
  datePicker1: {
    backgroundColor: 'white',
    marginRight: 70,
    ...Platform.select({
      web: {
        height: 38,
        width: '20%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 0,
      },
      android: {
        width: '50%',
      },
    }),
  },
  modifySearch: {
    backgroundColor: '#0B8ABB',
    fontFamily: 'roboto',
    color: '#FFFFFF',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '2vw',
    ...Platform.select({
      web: {
        height: 38,
        width: '10%',
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 10,
        '@media (max-width: 1150px)': {
          paddingLeft: '1vw',
        },
        '@media (max-width: 900px)': {
          paddingLeft: 2,
          fontSize: 12,
        },
        '@media (max-width: 780px)': {
          paddingLeft: 2,
          fontSize: 8,
        },
      },
      android: {
        width: '50%',
      },
    }),
  },
  ModifyText:{
    fontFamily:'roboto',
    fontSize:16,
    color:'#FFFFFF',
    marginLeft:6,
    '@media (max-width: 1150px)': {
      marginLeft:0,
    },
    '@media (max-width: 780px)': {
      paddingLeft: 2,
      fontSize: 13,
    },
  }
});

export default ModifySearch;
