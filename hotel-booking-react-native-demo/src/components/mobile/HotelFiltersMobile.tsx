import React, {useState} from 'react';
import {Platform, Pressable, ScrollView, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {BacktoSearchIconMobile} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import HotelNameFilterMobile from './filtersmobile/HotelNameFilterMobile';
import BrandHotelFilterMobile from './filtersmobile/BrandHotelFilterMobile';
import PriceFilterMobile from './filtersmobile/PriceFilterMobile';
import StarRatingFilterMobile from './filtersmobile/StarRatingFilterMobile';
import GuestRatingFilterMobile from './filtersmobile/DistanceFilterMobile';
import AccomodationsFilterMobile from './filtersmobile/AccomodationsFilterMobile';
import AmenitiesFilterMobile from './filtersmobile/AmenitiesFilterMobile';
import DistanceFilterMobile from './filtersmobile/DistanceFilterMobile';

const HotelFilterMobile = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('hotel');

  function backToResults() {
    navigate('/hotel_search');
  }

  function clearAllFilter(){

  }

  function applySelectedFilters(){
    navigate('/hotel_search')
  }

  return (
    <>
      <View>
        <View
          style={styles.BackToContainer}
          dataSet={{media: ids.BackToContainer}}>
          <Pressable onPress={() => backToResults()}>
            <BacktoSearchIconMobile />
          </Pressable>
          <Text
            style={styles.EnterLocation}
            dataSet={{media: ids.EnterLocation}}>
            Filters by
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.FilterContainer}
          dataSet={{media: ids.FilterContainer}}>
          <Pressable
            onPress={() => setActiveFilter('hotel')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Hotel Name
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('brand')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Brand Hotels
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('price')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Price
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('star')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Star Rating
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('guest')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Distance
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('amenities')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Amenities
          </Pressable>
          <Pressable
            onPress={() => setActiveFilter('accomodations')}
            style={styles.FilterButtons}
            dataSet={{media: ids.FilterButtons}}>
            Accomodations
          </Pressable>
        </ScrollView>

        <View style={styles.FiltersMainContainer} dataSet={{media: ids.FiltersMainContainer}}>
          {activeFilter === 'hotel' ? <HotelNameFilterMobile /> : null}
          {activeFilter === 'brand' ? <BrandHotelFilterMobile /> : null}
          {activeFilter === 'price' ? <PriceFilterMobile /> : null}
          {activeFilter === 'star' ? <StarRatingFilterMobile /> : null}
          {activeFilter === 'guest' ? <DistanceFilterMobile /> : null}
          {activeFilter === 'amenities' ? <AmenitiesFilterMobile /> : null}
          {activeFilter === 'accomodations' ? (
            <AccomodationsFilterMobile />
          ) : null}
        </View>


        <View style={styles.ApplyFilter} dataSet={{media: ids.ApplyFilter}}>
            <Text onPress={() => clearAllFilter()} style={styles.ClearFilter} dataSet={{media: ids.ClearFilter}}>
                Clear
            </Text>
            <Text onPress={() => applySelectedFilters()} style={styles.ApplyFiltersBottom} dataSet={{media: ids.ApplyFiltersBottom}}>
                APPLY
            </Text>

        </View>
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
        marginLeft: '4vw',
      },
      EnterLocation: {
        fontSize: 18,
        fontFamily: 'roboto',
        fontWeight: '600',
        marginLeft: '36vw',
      },
      FilterContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '8vh',
        marginVertical: '2vh',
      },
      FilterButtons: {
        backgroundColor: '#0B8ABB',
        color: '#FFFFFF',
        textAlign:'center',
        paddingVertical: '1.5vh',
        height: '6vh',
        marginVertical: 'auto',
        marginLeft: '2vw',
        fontFamily: 'roboto',
        fontSize: 16,
        borderRadius: 15,
        fontWeight: '600',
        width:'20vw'
      },
      FiltersMainContainer: {
        backgroundColor: '#F8F9F9',
        width: '100%',
        height: '64vh',
      },
      ApplyFilter:{
        display:'flex',
        flexDirection:'row',
        height:'8vh',
        width:'100%'
      },
      ClearFilter:{
        flex:1,
        marginVertical:'auto',
        marginLeft:'4vw',
        fontFamily:'roboto',
        fontSize:16,
        fontWeight:'400',
        textDecorationLine:'underline'
      },
      ApplyFiltersBottom:{
        display:'flex',
        flexDirection:'row-reverse',
        marginVertical:'auto',
        marginRight:'4vw',
        fontFamily:'roboto',
        fontSize:18,
        fontWeight:'600',
        backgroundColor:'#5D6771',
        color:'#FFFFFF',
        paddingHorizontal:'10vw',
        paddingVertical:'1vh',
        borderRadius:10
      }
    },
  }),
});

export default HotelFilterMobile;
