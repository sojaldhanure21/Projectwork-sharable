import React, {useState} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {
  BacktoSearchIconMobile,
  BacktoSearchIconMobileSecond,
  ChevronLeft,
  ChevronRight,
} from '../../assets/icons/IconsSvg';
import {PopularDestination} from '../../data/PopularDestination';
import {useNavigate} from 'react-router-dom';

const HotelImageContainerMobile = (props: any) => {
  console.log('eeee', props);
  const {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
  } = props?.hotel || [];
  console.log(
    '===>>',
    image0?.url,
    image1?.url,
    image2?.url,
    image3?.url,
    image4?.url,
  );
  const navigate = useNavigate();
  function backToResult() {
    navigate('/hotel_search');
  }
  const [next, setNext] = useState(2);
  function nextImage() {
    if (next < 5) {
      setNext(next + 1);
    }else{
      setNext(1)
    }
  }
  function previousImage() {
    if (next < 5) {
      setNext(next + 1);
    }else{
      setNext(1)
    }
  }
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <Text
          onPress={() => backToResult()}
          style={styles.BackButton}
          dataSet={{media: ids.BackButton}}>
          <BacktoSearchIconMobileSecond />
        </Text>
        <Text
          onPress={() => previousImage()}
          style={styles.LeftIcon}
          dataSet={{media: ids.LeftIcon}}>
          <ChevronLeft />
        </Text>
        <Text
          onPress={() => nextImage()}
          style={styles.RightIcon}
          dataSet={{media: ids.RightIcon}}>
          <ChevronRight />
        </Text>
        {next === 1 ? (
          <Image
            source={{uri: image0?.url}}
            style={styles.ImageHotel}
            dataSet={{media: ids.ImageHotel}}
          />
        ) : null}
        {next === 2 ? (
          <Image
            source={{uri: image1?.url}}
            style={styles.ImageHotel}
            dataSet={{media: ids.ImageHotel}}
          />
        ) : null}
        {next === 3 ? (
          <Image
            source={{uri: image2?.url}}
            style={styles.ImageHotel}
            dataSet={{media: ids.ImageHotel}}
          />
        ) : null}
        {next === 4 ? (
          <Image
            source={{uri: image3?.url}}
            style={styles.ImageHotel}
            dataSet={{media: ids.ImageHotel}}
          />
        ) : null}
        {next === 5 ? (
          <Image
            source={{uri: image4?.url}}
            style={styles.ImageHotel}
            dataSet={{media: ids.ImageHotel}}
          />
        ) : null}
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100%',
        height: '44vh',
        position: 'relative',
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.6,
      },
      BackButton: {
        position: 'absolute',
        left: '2vw',
        top: '2vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 30,
        zIndex: 1,
      },
      ImageHotel: {
        position: 'absolute',
        width: '100%',
        height: '44vh',
      },
      LeftIcon: {
        position: 'absolute',
        zIndex: 1,
        top: '18vh',
        left: '1vw',
        opacity: 0.7,
      },
      RightIcon: {
        position: 'absolute',
        zIndex: 1,
        top: '18vh',
        right: '1vw',
        opacity: 0.7,
      },
    },
  }),
});

export default HotelImageContainerMobile;
