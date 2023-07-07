import React, {FC} from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import HotelSearchContainer from '../components/desktop/HotelSearchContainer';
import PopularCard from '../components/desktop/PopularCard';
import StyleSheet from 'react-native-media-query';
import { useGetContextQuery } from '../redux/api/hotelApi';
import { PopularDestination } from '../data/PopularDestination';
import ReviewCard from '../components/desktop/ReviewCard';
//import Cookies from 'js-cookie'

const HotelSearchLanding: FC = () => {
  useGetContextQuery();
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../assets/images/BackgroundImage.jpg')}
          resizeMode="cover"
          style={styles.BackgroundImage}>
          <View style={styles.HotelSearchContainer}>
            <HotelSearchContainer />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.PopularMainContainer}>
        <Text style={styles.PopularText} dataSet={{ media: ids.PopularText }}>Popular Destination</Text>
        <View
          style={{
            width: '90vw',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'row',
            zIndex: -1,
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            {PopularDestination.map((data, i) => {
              return <PopularCard data={data} />;
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      BackgroundImage: {
        height: '90.5vh',
      },
      HotelSearchContainer: {
        marginHorizontal: 'auto',
        marginTop: '14vh',
      },
      PopularMainContainer: {
        marginTop: 20,
      },
      PopularText: {
        marginLeft: '5vw',
        fontFamily: 'roboto',
        fontSize: 20,
        fontWeight: '800',
        color: '#222222',
        marginBottom: 15,
        '@media (max-width: 700px)': {
          fontSize: 14,
      },
      },
    },
  }),
});

export default HotelSearchLanding;
