import React from 'react';
import {Platform, Pressable, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  FilterMobile,
  ModifySearchIconMobile,
} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';

const ModifySearchMobile = () => {
  const navigate = useNavigate();

  function modifySearch() {
    navigate('/');
  }

  function filterHotel() {
    navigate('/HotelFilter');
  }

  const searchDestinationText = useAppSelector(
    (state: any) => state.hotel.searchDestinationText,
  );
  const searchDestinationFromDate = useAppSelector(
    (state: any) => state.hotel.searchDestinationFromDate,
  );
  const searchDestinationToDate = useAppSelector(
    (state: any) => state.hotel.searchDestinationToDate,
  );
  const adultsCount = useAppSelector((state: any) => state.hotel.adultsCount);
  const childrenCount = useAppSelector(
    (state: any) => state.hotel.childrenCount,
  );

  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
          <Pressable
            onPress={() => modifySearch()}
            style={styles.SearchContainer}
            dataSet={{media: ids.SearchContainer}}>
            <ModifySearchIconMobile />
          </Pressable>
          <View
            style={styles.DestinationConatiner}
            dataSet={{media: ids.DestinationConatiner}}>
            <View>
              <Text
                style={styles.Destination}
                dataSet={{media: ids.Destination}}
                numberOfLines={1}>
                {searchDestinationText}
              </Text>
            </View>
            <View
              style={styles.DateGuestConatiner}
              dataSet={{media: ids.DateGuestConatiner}}>
              <Text numberOfLines={1} style={styles.FieldText} dataSet={{media: ids.FieldText}}>
                {searchDestinationFromDate} To {searchDestinationToDate}
              </Text>
              <Text numberOfLines={1} style={styles.FieldText} dataSet={{media: ids.FieldText}}>
                Rooms ,
              </Text>
              <Text numberOfLines={1} style={styles.FieldText} dataSet={{media: ids.FieldText}}>
                {adultsCount} adults{' '}
                {childrenCount !== 0 ? `${childrenCount} children` : null}
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => filterHotel()}
            style={styles.FilterContainer}
            dataSet={{media: ids.FilterContainer}}>
            <FilterMobile />
          </Pressable>
        </View>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        height: '8vh',
        marginHorizontal: '10vw',

        bagroundColor: '#FFFFFF',
        shadowColor: '#ccc',
        shadowOffset: {width: 5, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 40,
        paddingLeft: '4vw',
        paddingRight: '4vw',
      },
      SubContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 'auto',
      },
      SearchContainer: {
        marginVertical: 'auto',
      },
      DestinationConatiner: {
        marginLeft: '12vw',
      },
      DateGuestConatiner: {
        display: 'flex',
        flexDirection: 'row',
      },
      FilterContainer: {
        marginVertical: 'auto',
        marginLeft: '12vw',
      },
      FieldText: {
        fontFamily: 'roboto',
        color: '#5D6771',
        fontSize: 12,
      },
      Destination: {
        fontFamily: 'roboto',
        color: '#222222',
        fontSize: 16,
        fontWeight: '600',
        width: '40vw',
      },
    },
  }),
});

export default ModifySearchMobile;
