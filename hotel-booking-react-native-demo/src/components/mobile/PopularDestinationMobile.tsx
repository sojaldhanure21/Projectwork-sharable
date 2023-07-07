import React from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import PopularCardMobile from './PopularCardMobile';
import {PopularDestination} from '../../data/PopularDestination';

const PopularDestinationMobile = () => {
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <Text style={styles.PopularText} dataSet={{media: ids.PopularText}}>
          Popular Destination
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            {PopularDestination.map((data, i) => {
              return <PopularCardMobile data={data} />;
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100vw',
        backgroundColor: '#FFFFFF',
        height: '32vh',
        marginTop: '2vh',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },
      PopularText: {
        marginTop: '2vh',
        marginLeft: '4vw',
        fontFamily: 'roboto',
        fontSize: 20,
        color: '#91A2A9',
      },
    },
  }),
});

export default PopularDestinationMobile;
