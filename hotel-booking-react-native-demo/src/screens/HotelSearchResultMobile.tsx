import React, {useState} from 'react';
import {Image, Platform, Pressable, ScrollView, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  BackToList,
  BacktoSearchIconMobile,
  ShowMapViewIcon,
} from '../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import ModifySearchMobile from '../components/mobile/ModifySearchMobile';
import HotelCardViewMobile from '../components/mobile/HotelCardViewMobile';
import HotelOnMapMobile from '../components/mobile/HotelOnMapMobile';

const HotelSearchResultMobile = () => {
  const navigate = useNavigate();
  const [showOnMap, setShowOnMap] = useState(true);
  function backToSearch() {
    navigate('/');
  }
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
          <Pressable
            style={{zIndex: 1, position: 'absolute', left: '2vw', top: '4.5vh'}}
            onPress={() => backToSearch()}>
            <BacktoSearchIconMobile />
          </Pressable>
          <View
            style={styles.BackToContainer}
            dataSet={{media: ids.BackToContainer}}>
            <View style={styles.SearchContainer}>
              <ModifySearchMobile />
            </View>
          </View>
        </View>

        {showOnMap ? (
          <View
            style={styles.ImageContainer}
            dataSet={{media: ids.ImageContainer}}>
            <Image
              source={require('../assets/images/MapImage.png')}
              style={styles.Image}
              dataSet={{media: ids.Image}}
            />
            <Pressable
              style={styles.ViewMap}
              dataSet={{media: ids.ViewMap}}
              onPress={() => setShowOnMap(false)}>
              View Map{' '}
              <Text style={{transform: [{translateY: 2}], marginLeft: 4}}>
                <ShowMapViewIcon />
              </Text>
            </Pressable>
          </View>
        ) : (
          <View
            style={styles.ImageContainer}
            dataSet={{media: ids.ImageContainer}}>
            <Image
              source={require('../assets/images/BackToList.png')}
              style={styles.ImageTwo}
              dataSet={{media: ids.Image}}
            />
            <Pressable
              style={styles.ViewMap}
              dataSet={{media: ids.ViewMap}}
              onPress={() => setShowOnMap(true)}>
              View List{' '}
              <Text style={{transform: [{translateY: 1}], marginLeft: 6}}>
                <BackToList />
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      {showOnMap ? (
        <View style={{height: '68vh'}}>
          <Text
            style={{
              height: '4vh',
              paddingVertical: 4,
              fontFamily: 'roboto',
              color: '#222222',
              fontSize: 16,
              marginLeft: '2vw',
            }}>
            Count Properties
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{height: '64vh', width: '100vw'}}>
            <HotelCardViewMobile />
          </ScrollView>
        </View>
      ) : (
        <HotelOnMapMobile />
      )}
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {},
      BackToContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2vh',
        paddingLeft: '2vh',
        height: '8vh',
        marginHorizontal: 'auto',
      },
      SearchContainer: {
        marginVertical: 'auto',
        marginLeft: '-4vw',
      },
      SubContainer: {
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        paddingBottom: '2vh',
      },
      ImageContainer: {
        width: '100vw',
        height: '10vh',
        position: 'relative',
      },
      Image: {
        width: '100vw',
        height: '10vh',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },
      ImageTwo: {
        width: '100vw',
        height: '10vh',
      },
      ViewMap: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'roboto',
        backgroundColor: '#0B8ABB',
        color: '#FFFFFF',
        paddingHorizontal: '2vw',
        paddingVertical: '1vh',
        borderRadius: 10,
        left: '40vw',
        top: '2.2vh',
      },
    },
  }),
});

export default HotelSearchResultMobile;
