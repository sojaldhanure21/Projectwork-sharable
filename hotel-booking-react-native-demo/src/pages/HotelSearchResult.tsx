import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import HotelCard from '../components/desktop/HotelCard';
import ModifySearch from '../components/desktop/ModifySearch';
import SortByFilter from '../components/desktop/SortByFilter';
import AppliedFilter from '../components/desktop/AppliedFilter';
import MapView from 'react-native-maps';
import HotelSearchFilter from '../components/desktop/HotelSearchFilter';
import {useGetHotelResultQuery} from '../redux/api/hotelApi';
import {useAppSelector} from '../redux/hooks';
import {getHotelDetails} from '../data/getHotelDetails';
import {useDispatch} from 'react-redux';
import {setHotelDetailsAxios} from '../redux/hotelSlice';

const HotelSearchResult = () => {
  const {searchId, searchTracingKey, apiKey, hotels} = useAppSelector(
    (state: any) => state.hotel,
  );
  
//   const searchStatus = useAppSelector( state=> state.hotel.reloadFlag)

// console.log("searchId",searchId,)
//  useEffect(() => {
// //  setHotelData(hotels)
// },
//   [searchStatus,searchId])
// console.log("searchIdsearchIdsearchId",searchId)
  useGetHotelResultQuery({searchId: searchId, searchTracingKey: searchTracingKey, apiKey: apiKey});
  const [showOnMap, setShowOnMap] = useState(true);
  // const dispatch = useDispatch();

  console.log("===>>>>>>>>>>>>",useAppSelector(state => state?.hotel?.reloadFlag))
  // const [hook, setHook] = useState(true);
  // useEffect(() => {
  //   getHotelDetails({
  //     searchId: searchId,
  //     searchTracingKey: searchTracingKey,
  //     apiKey: apiKey,
  //   }).then(data => setNewData(data.hotels));
  //   const data = dispatch(setHotelDetailsAxios(newData));
  //   console.log('data', data);

  //   // if(newData.length == 0){
  //   //   setHook(false)
  //   // }else(
  //   //   setHook(true)
  //   // )
  // }, []);
  // const [newData, setNewData] = useState([]);

  // console.log("zzzzz",newData)
  // const hotelAxios = useAppSelector(state => state.hotel.hotelDetailsAxios);

  // console.log('axios', hotelAxios, 'state', newData);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.modifySearchContainer}>
          <ModifySearch />
        </View>
        <View style={styles.subMainContainer}>
          <View style={styles.subContainer}>
            <View>
              <HotelSearchFilter
                showOnMap={showOnMap}
                setShowOnMap={setShowOnMap}
              />
            </View>
            <View>
              {showOnMap ? (
                <View>
                  <SortByFilter />
                  <AppliedFilter />
                  <ScrollView
                    style={{height: '147vh'}}
                    showsVerticalScrollIndicator={false}>
                    {hotels?.map((hotel: any) => (
                      <HotelCard
                        hotel={hotel}
                        heroImage={hotel.heroImage}
                        key={hotel.id}
                      />
                    ))}
                  </ScrollView>
                </View>
              ) : (
                <View style={{marginLeft: 5}}>
                  <MapView
                    style={{width: '68.5vw', height: '80vh'}}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    backgroundColor: '#F4F5F9',
  },
  modifySearchContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  subMainContainer: {
    width: '90vw',
    marginHorizontal: '5vw',
    justifyContent: 'center',
    marginTop: 5,
    zIndex: -1,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: '10px',
    width: '90vw',
  },
});

export default HotelSearchResult;
