import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  Image,
  Platform,
  Text,
  TextInput,
  View,
  CheckBox,
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  BackToList,
  ResetIcon,
  ShowMapViewIcon,
} from '../../assets/icons/IconsSvg';
import Thumb from '../common/Thumb';
import Rail from '../common/Rail';
import RailSelected from '../common/RailSelected';
import Label from '../common/Label';
import Notch from '../common/Notch';
// import CheckBox from '@react-native-community/checkbox';
import Slider from 'rn-range-slider';
import {useAppSelector} from '../../redux/hooks';
import {
  useAutoSuggestHotelQuery,
  useInitFilterResultMutation,
} from '../../redux/api/hotelApi';
import {useDispatch} from 'react-redux';
import {
  setMaxDistanceHotel,
  setMinDistanceHotel,
  setStarRating,
} from '../../redux/hotelSlice';
import HotelNameSearch from './modals/HotelNameSearch';
const HotelSearchFilter = (props: any) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(400);
  // const [starRating, setStarRating] = useState(['1', '2', '3', '4', '5']);
  const renderThumb = useCallback(() => <Thumb name={'high'} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const [Filter] = useInitFilterResultMutation();
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const [auto, setAuto] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [brandAuto, setBrandAuto] = useState(false)
  const [brands ,setBrands] = useState('')

  function listAndMap() {
    if (props.showOnMap === true) {
      props.setShowOnMap(false);
    } else {
      props.setShowOnMap(true);
    }
  }

  const dispatch = useDispatch();
  const searchIdFilter = useAppSelector(state => state.hotel.searchId);
  const sessionKeyFilter = useAppSelector(
    state => state.hotel.user_session_key,
  );

  const handleDistanceChange = useCallback((low, high) => {
    dispatch(setMinDistanceHotel(low));
    dispatch(setMaxDistanceHotel(high));
  }, []);

  const starRating = useAppSelector(state => state?.hotel?.starRating);
  const minDistanceHotel = useAppSelector(
    state => state?.hotel?.minDistanceHotel,
  );
  const maxDistanceHotel = useAppSelector(
    state => state?.hotel?.maxDistanceHotel,
  );
  // console.log("aaaaabbbb",searchIdFilter,sessionKeyFilter)
  const [facility, setFacility] = useState<any>([]);
  const payload: any = {
    filterOne: {
      filters: {
        priceGroups: [
          {
            minPrice: low,
            maxPrice: high,
          },
        ],
        startRatings: starRating,
        minDistance: minDistanceHotel,
        maxDistance: maxDistanceHotel,
        facilityIds: facility,
      },
    },
    searchId: searchIdFilter,
    sessionKey: sessionKeyFilter,
  };
  const [isPool, setPool] = useState(false);
  const [isSpa, setSpa] = useState(false);
  const [isWifi, setWifi] = useState(false);
  const [isAC, setAC] = useState(false);
  const [isResto, setResto] = useState(false);
  const [isLibrary, setLibrary] = useState(false);
  const [isFitness, setFitness] = useState(false);
  const [isLaundry, setLaundry] = useState(false);
  const [isBar, setBar] = useState(false);
  const [isSClub, setClub] = useState(false);
  const [isSelected, setSelection] = useState(false);
  useEffect(() => {
    Filter({payload});
  }, [
    low,
    high,
    starRating,
    minDistanceHotel,
    maxDistanceHotel,
    isPool,
    isSpa,
    isWifi,
    isAC,
    isResto,
    isLibrary,
    isFitness,
    isLaundry,
    isBar,
    isSClub,
    isSelected,
  ]);

  //Aminityes

  // useEffect(() => {
  //   if (isPool === true) {
  //     setFacility(facility.push('13'));
  //     console.log('==>>>>', facility);
  //   }
  // }, [isPool]);

  function resetFilter() {
    setLow(0);
    setHigh(400);
    dispatch(setStarRating([]));
    dispatch(setMinDistanceHotel(0));
    dispatch(setMaxDistanceHotel(20));
    setFacility([]);
    setPool(false);
    setSpa(false);
    setWifi(false);
    setAC(false);
    setResto(false);
    setLibrary(false);
    setFitness(false);
    setLaundry(false);
    setBar(false);
    setClub(false);
    setSelection(false);
    setSuggestion("")
    setAuto(false)
    setBrands('')
    setBrandAuto(false)
  }
 
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

  const onInputBrandChange = (e: string) => {
    brands !== '' ? setBrandAuto(true) : setBrandAuto(false);
    setBrands(e)
  }

  return (
    <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
      <View
        style={styles.FilterMainContainer}
        dataSet={{media: ids.FilterMainContainer}}>
        <View
          style={styles.ImageContainer}
          dataSet={{media: ids.ImageContainer}}>
          <Image
            source={require(props.showOnMap === true
              ? '../../assets/images/MapImage.png'
              : '../../assets/images/BackToList.png')}
            style={styles.MapImage}
            dataSet={{media: ids.MapImage}}
          />
          <View
            style={styles.ShowOnMapView}
            dataSet={{media: ids.ShowOnMapView}}>
            <Text
              style={styles.ShowOnMapText}
              dataSet={{media: ids.ShowOnMapText}}
              onPress={() => listAndMap()}>
              {props.showOnMap === true ? 'Show Map View' : 'Show List View'}{' '}
              {props.showOnMap === true ? (
                <Text
                  style={styles.ShowMapViewIcon}
                  dataSet={{media: ids.ShowMapViewIcon}}>
                  <ShowMapViewIcon />
                </Text>
              ) : (
                <Text
                  style={styles.BackToList}
                  dataSet={{media: ids.BackToList}}>
                  <BackToList />
                </Text>
              )}
            </Text>
          </View>
        </View>
        <Text
          numberOfLines={1}
          style={styles.FilterTextStyle}
          dataSet={{media: ids.FilterTextStyle}}>
          Filters{' '}
          <Text
            onPress={() => resetFilter()}
            numberOfLines={1}
            style={styles.ResetTest}
            dataSet={{media: ids.ResetTest}}>
            <ResetIcon /> Reset All
          </Text>
        </Text>
        <View style={styles.hairline} dataSet={{media: ids.hairline}} />
        <View
          style={styles.HotelSearchView}
          dataSet={{media: ids.HotelSearchView}}>
          <Text
            numberOfLines={1}
            style={styles.HotelSearchText}
            dataSet={{media: ids.HotelSearchText}}>
            Hotel Name
          </Text>
          <TextInput
            numberOfLines={1}
            onChangeText={e => onInputTextChange(e)}
            style={styles.HotelSearchInput}
            dataSet={{media: ids.HotelSearchInput}}
            placeholder=" Enter Hotel Name!"
            value={suggestion}
          />
          {auto ? <HotelNameSearch setSuggestion={setSuggestion} setAuto={setAuto}/> : null}
          <Text
            numberOfLines={1}
            style={styles.HotelSearchText}
            dataSet={{media: ids.HotelSearchText}}>
            Brand Hotels
          </Text>
          <TextInput
            numberOfLines={1}
            style={styles.HotelSearchInput}
            dataSet={{media: ids.HotelSearchInput}}
            onChangeText={e => onInputBrandChange(e)}
            placeholder=" Select By Brand Name"
            value={brands}
          />
           {brandAuto ? <HotelNameSearch setSuggestion={setBrands} setAuto={setBrandAuto}/> : null}
        </View>
        <View style={styles.DefaultView} dataSet={{media: ids.DefaultView}}>
          <Text
            style={styles.HotelSearchText}
            dataSet={{media: ids.HotelSearchText}}>
            Price
          </Text>
          <View style={styles.hairlineOne} dataSet={{media: ids.hairlineOne}} />
          <Text
            style={styles.HotelSearchText}
            dataSet={{media: ids.HotelSearchText}}>
            ${low} to ${high}
          </Text>

          <Slider
            style={styles.slider}
            min={0}
            max={400}
            step={20}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
        </View>
        <View style={styles.DefaultView} dataSet={{media: ids.DefaultView}}>
          <Text
            numberOfLines={1}
            style={styles.HotelSearchText}
            dataSet={{media: ids.HotelSearchText}}>
            Hotel Star Rating
          </Text>
          <View style={styles.hairlineOne} dataSet={{media: ids.hairlineOne}} />
          <View
            style={styles.ContainerButton}
            dataSet={{media: ids.ContainerButton}}>
            <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
              <Button
                title="3 ☆"
                onPress={() => {
                  dispatch(setStarRating(['3']));
                }}
              />
            </View>
            <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
              <Button
                title="4 ☆"
                onPress={() => {
                  dispatch(setStarRating(['4']));
                }}
              />
            </View>
            <View style={styles.RealButton} dataSet={{media: ids.RealButton}}>
              <Button
                title="5 ☆"
                onPress={() => {
                  dispatch(setStarRating(['5']));
                }}
              />
            </View>
          </View>
          <View style={styles.DefaultView} dataSet={{media: ids.DefaultView}}>
            <Text
              numberOfLines={1}
              style={styles.HotelSearchText}
              dataSet={{media: ids.HotelSearchText}}>
              Distatnce
            </Text>
            <View
              style={styles.hairlineOne}
              dataSet={{media: ids.hairlineOne}}
            />

            <Text
              style={styles.HotelSearchText}
              dataSet={{media: ids.HotelSearchText}}>
              {minDistanceHotel} to {maxDistanceHotel} km
            </Text>

            <Slider
              style={styles.slider}
              min={0}
              max={20}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleDistanceChange}
            />
            {/* <View
              style={styles.ContainerButtonOne}
              dataSet={{media: ids.ContainerButtonOne}}>
              <View
                style={styles.RealButtonOne}
                dataSet={{media: ids.RealButtonOne}}>
                <Button title="4 km" onPress={() => {
                  dispatch(setMaxDistanceHotel(4));
                }} />
              </View>
              <View
                style={styles.RealButtonOne}
                dataSet={{media: ids.RealButtonOne}}>
                <Button title="8 km" onPress={() => {
                  dispatch(setMaxDistanceHotel(8));
                }} />
              </View>
              <View
                style={styles.RealButtonOne}
                dataSet={{media: ids.RealButtonOne}}>
                <Button title="12 km" onPress={() => {
                  dispatch(setMaxDistanceHotel(12));
                }}/>
              </View>
              <View
                style={styles.RealButtonOne}
                dataSet={{media: ids.RealButtonOne}}>
                <Button title="16 km" onPress={() => {
                  dispatch(setMaxDistanceHotel(16));
                }}/>
              </View>
            </View> */}
          </View>
          <View style={styles.DefaultView} dataSet={{media: ids.DefaultView}}>
            <Text
              numberOfLines={1}
              style={styles.HotelSearchText}
              dataSet={{media: ids.HotelSearchText}}>
              Amenities
            </Text>
            <View
              style={styles.hairlineOne}
              dataSet={{media: ids.hairlineOne}}
            />

            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isPool}
                onValueChange={() => {
                  if (isPool) {
                    setPool(false);
                    facility.pop('13');
                  } else {
                    setPool(true);
                    facility.push('13');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Pool
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isSpa}
                onValueChange={() => {
                  if (isSpa) {
                    setSpa(false);
                    facility.pop('9');
                  } else {
                    setSpa(true);
                    facility.push('9');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Spa
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isWifi}
                onValueChange={() => {
                  if (isWifi) {
                    setWifi(false);
                    facility.pop('16');
                  } else {
                    setWifi(true);
                    facility.push('16');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Wifi
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isAC}
                onValueChange={() => {
                  if (isAC) {
                    setAC(false);
                    facility.pop('11');
                  } else {
                    setAC(true);
                    facility.push('11');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Television
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isResto}
                onValueChange={() => {
                  if (isResto) {
                    setResto(false);
                    facility.pop('14');
                  } else {
                    setResto(true);
                    facility.push('14');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Restaurant
              </Text>
            </View>
          </View>
          <View style={styles.DefaultView} dataSet={{media: ids.DefaultView}}>
            <Text
              numberOfLines={1}
              style={styles.HotelSearchText}
              dataSet={{media: ids.HotelSearchText}}>
              Accomodations
            </Text>
            <View
              style={styles.hairlineOne}
              dataSet={{media: ids.hairlineOne}}
            />
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isLibrary}
                onValueChange={() => {
                  if (isLibrary) {
                    setLibrary(false);
                    facility.pop('38');
                  } else {
                    setLibrary(true);
                    facility.push('38');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Library
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isFitness}
                onValueChange={() => {
                  if (isFitness) {
                    setFitness(false);
                    facility.pop('17');
                  } else {
                    setFitness(true);
                    facility.push('17');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Fitness Facility
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isLaundry}
                onValueChange={() => {
                  if (isLaundry) {
                    setLaundry(false);
                    facility.pop('12');
                  } else {
                    setLaundry(true);
                    facility.push('12');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Laundry Services
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isBar}
                onValueChange={() => {
                  if (isBar) {
                    setBar(false);
                    facility.pop('8');
                  } else {
                    setBar(true);
                    facility.push('8');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Bar
              </Text>
            </View>
            <View
              style={styles.CheckBoxView}
              dataSet={{media: ids.CheckBoxView}}>
              <CheckBox
                value={isSClub}
                onValueChange={() => {
                  if (isSClub) {
                    setClub(false);
                    facility.pop('36');
                  } else {
                    setClub(true);
                    facility.push('36');
                  }
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.CheckBoxText}
                dataSet={{media: ids.CheckBoxText}}>
                Night Club
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
      },
      FilterMainContainer: {
        width: '20vw',
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        paddingBottom: '6.5vh',
        bagroundColor: '#FFFFFF',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      ImageContainer: {
        width: '20vw',
        marginTop: '4px',
        marginHorizontal: '4px',
        position: 'relative',
      },
      MapImage: {
        width: '19vw',
        height: '80px',
        borderRadius: 8,
      },
      ShowOnMapView: {
        position: 'absolute',
        top: '28px',
        width: '19vw',
        paddingHorizontal: '4.5vw',
        '@media (max-width: 1100px)': {
          top: '22px',
        },
        '@media (max-width: 820px)': {
          top: '20px',
        },
      },
      ShowOnMapText: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        color: '#F5F5F5',
        backgroundColor: '#0B8ABB',
        paddingVertical: '4px',
        paddingLeft: '4px',
        paddingRight: '20px',
        width: '10vw',
        textAlign: 'center',
        borderRadius: 4,
        position: 'relative',
        fontSize: 16,
        '@media (max-width: 1400px)': {
          fontSize: 14,
        },
        '@media (max-width: 1240px)': {
          fontSize: 12,
        },
      },
      ShowMapViewIcon: {
        position: 'absolute',
        top: 5,
        right: 8,
        '@media (max-width: 1100px)': {
          top: 9,
        },
        '@media (max-width: 820px)': {
          top: 16,
        },
      },
      BackToList: {
        position: 'absolute',
        top: 4,
        '@media (max-width: 1100px)': {
          top: 8,
        },
        '@media (max-width: 820px)': {
          top: 15,
        },
      },
      FilterTextStyle: {
        fontFamily: 'Roboto',
        color: '#222222',
        Align: 'Left',
        fontWeight: '600',
        width: '100%',
        fontSize: 20,
        paddingTop: '13px',
        paddingLeft: 10,
        '@media (max-width: 900px)': {
          fontSize: 16,
          paddingTop: '16px',
        },
      },
      ResetTest: {
        fontFamily: 'Poppins',
        position: 'absolute',
        right: 12,
        transform: [{translateY: 5}],
        fontSize: 14,
        color: '#0B8ABB',
        '@media (max-width: 900px)': {
          fontSize: 12,
          transform: [{translateY: 2}],
        },
      },
      hairline: {
        backgroundColor: '#ADCED9',
        width: '100%',
        marginTop: '13px',
        height: 1,
      },
      HotelSearchView: {},
      HotelSearchText: {
        fontFamily: 'Roboto',
        color: '#5D6771',
        fontSize: 16,
        Align: 'Left',
        textAlignVertical: 'center',
        marginTop: 12,
        transform: [{translateX: 10}],
      },
      HotelSearchInput: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#91A2A9',
        height: 30,
        borderColor: '#91A2A9',
        borderWidth: 1,
        width: '90%',
        marginVertical: 8,
        borderRadius: 4,
        paddingVertical: 16,
        paddingLeft: 20,
        transform: [{translateX: 10}],
        '@media (max-width: 950px)': {
          paddingLeft: 10,
        },
        '@media (max-width: 900px)': {
          paddingLeft: 5,
          fontSize: 12,
        },
        '@media (max-width: 750px)': {
          paddingLeft: 5,
          fontSize: 10,
        },
      },
      DefaultView: {
        marginTop: 10,
      },
      hairlineOne: {
        backgroundColor: '#919698',
        width: '90%',
        marginTop: 4,
        height: 1,
        marginHorizontal: 10,
      },
      ContainerButton: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'left',
        // justifyContent: 'left',
        paddingTop: 10,
        marginLeft: 6,
      },
      RealButton: {
        fontFamily: 'Inter',
        marginLeft: '4px',
        width: 65,
        '@media (max-width: 1100px)': {
          width: 50,
        },
        '@media (max-width: 900px)': {
          width: 40,
        },
        '@media (max-width: 700px)': {
          width: 32,
        },
        '@media (max-width: 600px)': {
          width: 28,
        },
      },
      ContainerButtonOne: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'left',
        paddingTop: 10,
        marginLeft: 8,
      },
      RealButtonOne: {
        width: 60,
        marginHorizontal: 1,
        marginLeft: '1px',
        '@media (max-width: 1350px)': {
          width: 50,
        },
        '@media (max-width: 1100px)': {
          width: 46,
        },
        '@media (max-width: 1020px)': {
          width: 42,
        },
        '@media (max-width: 930px)': {
          width: 34,
        },
        '@media (max-width: 750px)': {
          width: 24,
        },
        '@media (max-width: 580px)': {
          width: 20,
        },
      },
      CheckBoxView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
      },
      CheckBoxText: {
        paddingLeft: 14,
        fontFamily: 'Roboto',
        color: '#475054',
        fontSize: 14,
      },
      slider: {
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 4,
      },
    },
  }),
});

export default HotelSearchFilter;
