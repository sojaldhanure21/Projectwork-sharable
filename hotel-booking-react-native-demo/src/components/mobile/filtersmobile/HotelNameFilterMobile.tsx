import React, {useState} from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  BacktoSearchIconMobile,
  LocationIcon,
  LocationIconMobile,
} from '../../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {useAutoSuggestHotelQuery} from '../../../redux/api/hotelApi';
import {useAppSelector} from '../../../redux/hooks';

const HotelNameFilterMobile = () => {
  const [auto, setAuto] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const config = {
    text: suggestion,
    searchId: useAppSelector(state => state?.hotel?.searchId),
    sessionKey: useAppSelector(state => state?.hotel?.user_session_key),
  };
  useAutoSuggestHotelQuery(config);
  const onInputTextChange = (e: string) => {
    suggestion !== '' ? setAuto(true) : setAuto(false);
    setSuggestion(e);
  };
  const Array = useAppSelector(state => state?.hotel?.HotelNameAutoSuggest);

  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View>
          <TextInput
            placeholder=" Enter Hotel Name!"
            value={suggestion}
            style={styles.InputSearch}
            onChangeText={e => onInputTextChange(e)}
            dataSet={{media: ids.InputSearch}}
            placeholderTextColor="#475054"
          />
        </View>
        {auto ? (
          <View
            style={{marginTop: '2vh', width: '90vw', marginHorizontal: 'auto'}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: '50vh'}}>
              {Array.map((data, i) => {
                return (
                  <Pressable
                    onPress={() => {
                      setSuggestion(data);
                      setAuto(false);
                    }}
                    style={styles.SearchDropDown}
                    dataSet={{media: ids.SearchDropDown}}>
                    <Text style={{marginVertical: 'auto'}}>
                      <LocationIconMobile />
                    </Text>
                    <Text
                      style={styles.DropDownText}
                      dataSet={{media: ids.DropDownText}}>
                      {data}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100vw',
      },
      BackToContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2vh',
        paddingLeft: '2vh',
      },
      EnterLocation: {
        fontSize: 22,
        fontFamily: 'roboto',
        fontWeight: '600',
        marginLeft: '32vw',
      },
      InputSearch: {
        marginTop: '2vh',
        width: '95vw',
        marginHorizontal: 'auto',
        paddingHorizontal: '2vw',
        paddingVertical: '2vh',
        fontFamily: 'roboto',
        fontSize: 22,
        color: '#222222',
        borderColor: '#222222',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        outlineStyle: 'none',
      },
      SearchDropDown: {
        display: 'flex',
        flexDirection: 'row',
        height: '8vh',
        // borderBottomColor:'#5D6771',
        // borderBottomWidth:1,
        // borderStyle:'solid'
      },
      DropDownText: {
        marginVertical: 'auto',
        marginLeft: '4vw',
        fontFamily: 'roboto',
        fontSize: 22,
        color: '#222222',
      },
    },
  }),
});

export default HotelNameFilterMobile;
