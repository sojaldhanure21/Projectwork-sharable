import React, {FC} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import RoomsCardsMobile from './RoomsCardsMobile';

const RoomsViewMobile = () => {
  return (
    <>
      <View style={styles.mainContainer} dataSet={{media: ids.mainContainer}}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}>
          <RoomsCardsMobile />
          <RoomsCardsMobile />
          <RoomsCardsMobile />
         
        </ScrollView>
      </View>
    </>
  );
};

const {ids, styles}  = StyleSheet.create({
    ...Platform.select({
      web: {
        mainContainer: {
          width: '100vw',
          flexDirection: 'column',
    },    
      },
    }),
  });

export default RoomsViewMobile;
