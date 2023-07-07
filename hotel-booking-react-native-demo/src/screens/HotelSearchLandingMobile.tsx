import React from 'react';
import {ImageBackground, Platform, ScrollView, Text, View} from 'react-native';
import HotelSearchContainerMobile from '../components/mobile/HotelSearchContainerMobile';
import StyleSheet from 'react-native-media-query';
import PopularDestinationMobile from '../components/mobile/PopularDestinationMobile';


const HotelSearchLandingMobile = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.BackgroundImageContainer}
        dataSet={{media: ids.BackgroundImageContainer}}>
        <ImageBackground
          source={require('../assets/images/BackgroundImageMobile.jpg')}
          resizeMode={'cover'}
          style={styles.BackgroundImage}>
          <View>
            <HotelSearchContainerMobile />
          </View>
          <View>
            <PopularDestinationMobile />
          </View>
        </ImageBackground>
      </ScrollView>   
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      BackgroundImageContainer: {
        width: '100%',
        height:'90vh'
      },
      BackgroundImage: {
        width: '100%',
        height: '100vh',
      },
    },
  }),
});

export default HotelSearchLandingMobile;
