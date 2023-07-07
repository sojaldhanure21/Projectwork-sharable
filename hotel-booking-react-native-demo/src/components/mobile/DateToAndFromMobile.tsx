import React, {useEffect, useState} from 'react';
import {Platform, Pressable, ScrollView, Text, View} from 'react-native';
import DatepickerRange from 'react-native-range-datepicker';
import StyleSheet from 'react-native-media-query';
import {BacktoSearchIconMobile} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
  setSearchDestinationFromDate,
  setSearchDestinationToDate,
} from '../../redux/hotelSlice';
const DateToAndFromMobile = () => {
  const [dates, setDates] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function backToSearch() {
    navigate('/');
  }

  function getMonth(month) {
    let realMonth = month + 1;
    if (realMonth <= 9) {
      return `0${realMonth}`;
    } else {
      return `${realMonth}`;
    }
  }

  useEffect(() => {
    dispatch(
      setSearchDestinationFromDate(
        `${getMonth(checkInDate?.$M)}/${checkInDate?.$D}/${checkInDate?.$y}`,
      ),
    );
    dispatch(
      setSearchDestinationToDate(
        `${getMonth(checkOutDate?.$M)}/${checkOutDate?.$D}/${checkOutDate?.$y}`,
      ),
    );
    // console.log(
    //   'from =>' +
    //     `${getMonth(checkInDate?.$M)}/${checkInDate?.$D}/${checkInDate.$y}` +
    //     'To =>' +
    //     `${getMonth(checkOutDate?.$M)}/${checkOutDate?.$D}/${checkOutDate?.$y}`,
    // );
    
  }, [dates]);

  const [checkInDate, setCheckInDate] = useState({});
  const [checkOutDate, setCheckOutDate] = useState({});

  function selectedDates(startDate, untilDate) {
    setDates({startDate, untilDate});
    setCheckInDate(startDate);
    setCheckOutDate(untilDate);
  }

  return (
    <>
      <View>
        <View
          style={styles.BackToContainer}
          dataSet={{media: ids.BackToContainer}}>
          <Pressable onPress={() => backToSearch()}>
            <BacktoSearchIconMobile />
          </Pressable>
          <Text
            style={styles.EnterLocation}
            dataSet={{media: ids.EnterLocation}}>
            Calendar
          </Text>
        </View>
        <ScrollView
          style={styles.CalendarContainer}
          dataSet={{media: ids.CalendarContainer}}>
          <DatepickerRange
            showClose={false}
            showButton={false}
            selectedBackgroundColor={'#0B8ABB'}
            placeHolderStart={'Start Date'}
            placeHolderUntil={'Until Date'}
            onSelect={(startDate, untilDate) =>
              selectedDates(startDate, untilDate) 
            }
          />
        </ScrollView>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      BackToContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2vh',
        paddingLeft: '2vh',
      },
      EnterLocation: {
        fontSize: 18,
        fontFamily: 'roboto',
        fontWeight: '600',
        marginLeft: '36vw',
      },
      CalendarContainer: {},
    },
  }),
});

export default DateToAndFromMobile;
