import React, {useEffect, useState} from 'react';
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
} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';
import {useAutosuggestQuery} from '../../redux/api/hotelApi';
import {useDispatch} from 'react-redux';
import { setLocationId, setSearchDestinationText } from '../../redux/hotelSlice';

const SearchDestinationMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [hide, setHide] = useState(false);

  function backToSearch() {
    navigate('/');
  }

  useEffect(() => {
    if (value == '') {
      setHide(false);
    }
  }, [value]);

  const destination = useAppSelector(
    state => state.hotel.autoSuggestResponse?.locations,
  );

  function destinationInput(e: any) {
    setValue(e);
    if (destination) {
      setHide(true);
    }
  }

  useAutosuggestQuery(value);

  const Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View
          style={styles.BackToContainer}
          dataSet={{media: ids.BackToContainer}}>
          <Pressable onPress={() => backToSearch()}>
            <BacktoSearchIconMobile />
          </Pressable>
          <Text
            style={styles.EnterLocation}
            dataSet={{media: ids.EnterLocation}}>
            Enter Location
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Destination"
            style={styles.InputSearch}
            value={value}
            onChangeText={e => destinationInput(e)}
            dataSet={{media: ids.InputSearch}}
            placeholderTextColor="#475054"
          />
        </View>
        {hide ? (
          <View
            style={{marginTop: '2vh', width: '90vw', marginHorizontal: 'auto'}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: '90vh'}}>
              {destination.map((data, i) => {
                return (
                  <Pressable
                    onPress={() => {
                      dispatch(setSearchDestinationText(data.fullName));
                      dispatch(setLocationId(data.id))
                      navigate('/')
                    }}
                    style={styles.SearchDropDown}
                    dataSet={{media: ids.SearchDropDown}}>
                    <Text style={{marginVertical: 'auto'}}>
                      <LocationIconMobile />
                    </Text>
                    <Text
                      style={styles.DropDownText}
                      dataSet={{media: ids.DropDownText}}>
                      {data.fullName}
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

export default SearchDestinationMobile;
