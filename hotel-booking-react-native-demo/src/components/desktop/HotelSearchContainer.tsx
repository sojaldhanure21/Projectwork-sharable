import {Link, useNavigate} from 'react-router-dom';
import React, {FC, useEffect, useState} from 'react';
import {Button, Platform, Pressable, Text, TextInput, View} from 'react-native';
import {
  CalendarIcon,
  CancelDestinationIcon,
  CustomerCountIcon,
  DestinationIcon,
  LocationIcon,
  SearchIcon,
} from '../../assets/icons/IconsSvg';
import DateTimePicker from './DateTimePickerWeb';
import GuestModal from './modals/GuestModal';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import SearchDropDown from './modals/SearchDropDown';
import StyleSheet from 'react-native-media-query';
import {
  useInitHotelSearchMutation,
  useAutosuggestQuery,
} from '../../redux/api/hotelApi';
import {InitHotelSearchBody} from '../../../types';
import {useDispatch} from 'react-redux';
import { setSearchDestinationFromDate, setSearchDestinationText, setSearchDestinationToDate ,setAdultsCountRedux, setChildrenCountRedux} from '../../redux/hotelSlice';
import { FormatDateService } from '../../data/FormatDateService';
import { useAppSelector } from '../../redux/hooks';

const HotelSearchContainer = () => {
  const navigate = useNavigate();
  const [initHotelSearch] = useInitHotelSearchMutation();
  const [hideSearchDropDown, sethideSearchDropDown] = useState(false);
  const [guestModalFlag, setGuestModalFlag] = useState(false);
  const [fromDateFlag, setFromDateFlag] = useState(false);
  const [toDateFlag, setToDateFlag] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDateFrom, setSelectedDateFrom] = useState('');
  const [searchInputText, setSearchInputText] = useState('');
  // const [adultsCount, setadultCount] = useState(0);
  // const [childrenCount, setChildrenCount] = useState(0);
  const [locationId, setLocationId] = useState('');

  const adultsCount = useAppSelector((state:any) => state.hotel.adultsCount) 
  const childrenCount = useAppSelector((state: any) => state.hotel.childrenCount)

  useAutosuggestQuery(searchInputText);
  const dispatch = useDispatch();
  
  const searchButton = () => {
    dispatch(setSearchDestinationText(searchInputText));
    dispatch(setSearchDestinationFromDate(selectedDateFrom))
    dispatch(setSearchDestinationToDate(selectedDate))
    dispatch(setAdultsCountRedux(adultsCount));
    dispatch(setChildrenCountRedux(childrenCount))
    const payload: InitHotelSearchBody = {
      culture: 'en-us',
      currency: 'USD',
      checkIn: getFormatedDate(new Date(selectedDateFrom), 'MM/DD/YYYY'),
      checkOut: getFormatedDate(new Date(selectedDate), 'MM/DD/YYYY'),
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
    navigate('/hotel_search');
  };

  function dropDownHandeler() {
    setGuestModalFlag(false);
    setFromDateFlag(false);
    setToDateFlag(false);
  }

  function closeDropDownHandler() {
    sethideSearchDropDown(false);
    setSearchInputText('');
  }

  // useEffect(() => {
  //   if (searchInputText === '') {
  //     sethideSearchDropDown(false);
  //   } else {
  //     sethideSearchDropDown(true);
  //   }
  // }, [searchInputText]);

  function openGuestModal() {
    if (guestModalFlag === false) {
      setGuestModalFlag(true);
      setToDateFlag(false);
      setFromDateFlag(false);
      sethideSearchDropDown(false);
    } else {
      setGuestModalFlag(false);
      setToDateFlag(false);
      setFromDateFlag(false);
    }
  }

  function openDatePickerTo() {
    setToDateFlag(true);
    setFromDateFlag(false);
    setGuestModalFlag(false);
    sethideSearchDropDown(false);
  }

  function dateForToBookingTo(date: any) {
    setSelectedDate(date);
    setToDateFlag(false);
  }

  function openDatePickerFrom() {
    setFromDateFlag(true);
    setToDateFlag(false);
    setGuestModalFlag(false);
    sethideSearchDropDown(false);
  }

  function dateForToBookingFrom(date: any) {
    setSelectedDateFrom(date);
    setFromDateFlag(false);
  }

  const onInputSearch = (e: any) => {
    if (String(e)?.length) {
      sethideSearchDropDown(true);
    } else {
      sethideSearchDropDown(false);
    }
    setSearchInputText(e);
  };

  return (
    <View style={styles.MainContainer}>
      <Text
        style={styles.HotelSearchTitle}
        dataSet={{media: ids.HotelSearchTitle}}>
        Hotel deals, delivered
      </Text>
      <Text style={styles.DealLine} dataSet={{media: ids.DealLine}}>
        Save up to 50% off retail with our insider hotel deals
      </Text>
      <Pressable
        style={styles.HotelSearchContainer}
        onPress={() => dropDownHandeler()}>
        <Text style={{flex: 0.5, marginHorizontal: 6}}>
          <DestinationIcon />
        </Text>
        <TextInput
          onChangeText={e => onInputSearch(e)}
          placeholder="Enter Your Destination!"
          value={searchInputText}
          style={styles.HotelSearchInput}
          dataSet={{media: ids.HotelSearchInput}}></TextInput>
        <Pressable onPress={() => closeDropDownHandler()}>
          <Text style={{flex: 0.5, marginHorizontal: 6}}>
            <CancelDestinationIcon />
          </Text>
        </Pressable>
      </Pressable>

      {hideSearchDropDown ? (
        <View style={styles.HideDropDown} dataSet={{media: ids.HideDropDown}}>
          <SearchDropDown
            searchInputText={searchInputText}
            setSearchInputText={setSearchInputText}
            sethideSearchDropDown={sethideSearchDropDown}
            setLocationId={setLocationId}
          />
        </View>
      ) : null}

      <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
        <Pressable
          style={styles.DatePickerContainer}
          dataSet={{media: ids.DatePickerContainer}}
          onPress={() => openDatePickerFrom()}>
          <Text style={{flex: 0.5, marginHorizontal: 6}}>
            <CalendarIcon />
          </Text>
          <Text
            numberOfLines={1}
            style={styles.DateFromTo}
            dataSet={{media: ids.DateFromTo}}>
            {selectedDateFrom === '' ? 'Date From' : FormatDateService(selectedDateFrom)}
          </Text>
        </Pressable>

        {fromDateFlag ? (
          <View
            style={styles.DatePickerOne}
            dataSet={{media: ids.DatePickerOne}}>
            <DatePicker
              onSelectedChange={date => dateForToBookingFrom(date)}
              style={{zIndex: 1000}}
              mode={'calendar'}
            />
          </View>
        ) : null}

        <Pressable
          style={styles.DatePickerContainerSecond}
          dataSet={{media: ids.DatePickerContainerSecond}}
          onPress={() => openDatePickerTo()}>
          <Text style={{flex: 0.5, marginHorizontal: 6}}>
            <CalendarIcon />
          </Text>
          <Text
            numberOfLines={1}
            style={styles.DateFromTo}
            dataSet={{media: ids.DateFromTo}}>
            {selectedDate === '' ? 'Date To' : FormatDateService(selectedDate)}
          </Text>
        </Pressable>

        {toDateFlag ? (
          <View
            style={styles.DatePickerTwo}
            dataSet={{media: ids.DatePickerTwo}}>
            <DatePicker
              onSelectedChange={date => dateForToBookingTo(date)}
              style={{zIndex: 1000}}
              mode={'calendar'}
            />
          </View>
        ) : null}

        <Pressable
          onPress={() => openGuestModal()}
          style={styles.DatePickerContainerThird}
          dataSet={{media: ids.DatePickerContainerThird}}>
          <Text style={{flex: 0.1, marginHorizontal: 6}}>
            <CustomerCountIcon />
          </Text>
          <Text
            numberOfLines={1}
            style={styles.DateFromToLast}
            dataSet={{media: ids.DateFromToLast}}>
            {adultsCount === 0 && childrenCount === 0 ? "Customer Count" : `${adultsCount} Adult ${childrenCount !== 0 ? `${childrenCount} Children`:""}`}
          </Text>
        </Pressable>

        {guestModalFlag ? (
          <View style={styles.GuestModal} dataSet={{media: ids.GuestModal}}>
            <GuestModal />
          </View>
        ) : null}
      </View>

      <View style={styles.SearchConatiner}>
        <Pressable style={styles.SearchText} onPress={searchButton}>
          <Text style={styles.SearchTextInner}>
            <SearchIcon />
            <Text style={{marginLeft: 8}}>Search</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {},
      HotelSearchTitle: {
        color: '#FFFFFF',
        fontFamily: 'roboto',
        fontSize: 64,
        fontWeight: '200',
        '@media (max-width: 700px)': {
          fontSize: 45,
        },
        '@media (max-width: 430px)': {
          fontSize: 30,
          marginHorizontal: 'auto',
        },
      },
      DealLine: {
        color: '#FFFFFF',
        fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '800',
        '@media (max-width: 700px)': {
          fontSize: 16,
          marginHorizontal: 'auto',
        },
        '@media (max-width: 430px)': {
          fontSize: 14,
          marginHorizontal: 'auto',
        },
      },
      HotelSearchContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 6,
        backgroundColor: '#FFFFFF',
        height: '6vh',
        paddingVertical: '0.8vh',
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
      },
      HotelSearchInput: {
        flex: 10,
        height: '4vh',
        fontFamily: 'roboto',
        color: '#91A2A9',
        paddingHorizontal: 8,
        outlineStyle: 'none',
        '@media (max-width: 700px)': {
          paddingHorizontal: 4,
        },
        '@media (max-width: 430px)': {
          paddingHorizontal: 2,
        },
      },
      SubContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 430px)': {
          flexDirection: 'column',
        },
      },
      DatePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: '6vh',
        paddingVertical: '0.8vh',
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
        flex: 1,
        position: 'relative',
        marginRight: '1vw',
        '@media (max-width: 430px)': {
          marginBottom: 8,
          marginRight: 0,
        },
      },
      DatePickerContainerSecond: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: '6vh',
        paddingVertical: '0.8vh',
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
        flex: 1,
        position: 'relative',
        marginRight: '1vw',
        '@media (max-width: 430px)': {
          marginBottom: 8,
          marginRight: 0,
        },
      },
      DatePickerContainerThird: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: '6vh',
        paddingVertical: '0.8vh',
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
        flex: 1,
        position: 'relative',
        '@media (max-width: 430px)': {
          marginBottom: 8,
        },
      },
      DateFromTo: {
        color: '#91A2A9',
        fontFamily: 'roboto',
        fontSize: 14,
        marginVertical: 5,
      },
      DateFromToLast: {
        color: '#91A2A9',
        fontFamily: 'roboto',
        fontSize: 14,
        marginVertical: 5,
        '@media (max-width: 430px)': {
          marginHorizontal: 'auto',
        },
      },
      SearchConatiner: {
        marginTop: 25,
        zIndex: -1,
      },
      SearchText: {
        margin: 'auto',
        color: '#FFFFFF',
        fontFamily: 'roboto',
        fontSize: 18,
        fontWeight: '700',
        backgroundColor: '#0B8ABB',
        paddingHorizontal: '6vw',
        paddingVertical: '2.8vh',
        borderRadius: 6,
      },
      SearchTextInner: {
        color: '#FFFFFF',
        fontFamily: 'roboto',
        fontSize: 18,
        fontWeight: '700',
        backgroundColor: '#0B8ABB',
        borderRadius: 6,
      },
      HideDropDown: {
        position: 'absolute',
        width: '99%',
        top: '23vh',
        zIndex: 1,
        marginHorizontal: '0.5%',
        '@media (max-width: 700px)': {
          top: '19.5vh',
        },
        '@media (max-width: 430px)': {
          top: '18.5vh',
        },
      },
      DatePickerOne: {
        width: '18vw',
        position: 'absolute',
        top: '6.5vh',
        left: '0vw',
        '@media (max-width: 1100px)': {
          width: '22vw',
        },
        '@media (max-width: 1000px)': {
          width: '25vw',
        },
        '@media (max-width: 800px)': {
          width: '30vw',
        },
        '@media (max-width: 700px)': {
          width: '40vw',
        },
        '@media (max-width: 430px)': {
          width: '80vw',
          top: 0,
          zIndex: 100,
        },
      },
      DatePickerTwo: {
        width: '18vw',
        position: 'absolute',
        top: '6.5vh',
        left: '13vw',
        '@media (max-width: 1100px)': {
          width: '22vw',
          left: '16vw',
        },
        '@media (max-width: 1000px)': {
          width: '25vw',
          left: '18vw',
        },
        '@media (max-width: 800px)': {
          width: '30vw',
          left: '25vw',
        },
        '@media (max-width: 700px)': {
          width: '40vw',
          left: '18vw',
        },
        '@media (max-width: 430px)': {
          width: '80vw',
          left: '0vw',
          top: 0,
          zIndex: 100,
        },
      },
      GuestModal: {
        position: 'absolute',
        width: '25vw',
        backgroundColor: '#FFFFFF',
        right: '-11vw',
        top: '6.5vh',
        height: '20vh',
        zIndex: 1,
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 6,
        '@media (max-width: 1100px)': {
          right: '-4vw',
          width: '30vw',
        },
        '@media (max-width: 900px)': {
          right: '-4vw',
          width: '35vw',
        },
        '@media (max-width: 700px)': {
          right: '-4vw',
          width: '45vw',
        },
        '@media (max-width: 650px)': {
          right: '-4vw',
          width: '55vw',
        },
        '@media (max-width: 430px)': {
          right: '-2vw',
          width: '80vw',
        },
      },
    },
  }),
});

export default HotelSearchContainer;
