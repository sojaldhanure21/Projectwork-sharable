import React, {FC} from 'react';
import {ActivityIndicator, Image, Platform, Text, View} from 'react-native';
import {
  HeartIcon,
  LocationIcon,
  NineDotIcon,
  ShareIcon,
} from '../../assets/icons/IconsSvg';
import StyleSheet from 'react-native-media-query';

const HotelDetailsPreview = (props: any) => {
  const {
    0: image,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
  } = props?.details?.images || [];
  // console.log("===>>",image?.url, image1?.url,image2?.url,image3?.url,image4?.url)
  // console.log("hotels",props.details)
  // console.log( props.details?.images[0].url)

  // props.details?.images[0]?.url

  return (
    <View>
      <View
        style={styles.MainImageContainer}
        dataSet={{media: ids.MainImageContainer}}>
        <View
          style={styles.FirstImageContainer}
          dataSet={{media: ids.FirstImageContainer}}>
          <Image
            style={styles.ImageFirst}
            dataSet={{media: ids.ImageFirst}}
            source={{uri: image?.url}}
            // source={require('../../assets/images/destination/chicago.jpg')}
          />
          <Text
            style={styles.showAllPhotos}
            dataSet={{media: ids.showAllPhotos}}>
            <Text>
              <NineDotIcon />
            </Text>
            <Text style={{paddingLeft: 6}}>Show all photos</Text>
          </Text>
        </View>
        <View
          style={styles.ImageContainer}
          dataSet={{media: ids.ImageContainer}}>
          <View
            style={styles.SubImageContainer}
            dataSet={{media: ids.SubImageContainer}}>
            <View>
              <Image
                style={styles.ImageSecond}
                dataSet={{media: ids.ImageSecond}}
                source={{uri: image1?.url}}
                // source={require('../../assets/images/destination/chicago.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageThird}
                dataSet={{media: ids.imageThird}}
                source={{uri: image2?.url}}
                // source={require('../../assets/images/destination/chicago.jpg')}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                style={styles.imageForth}
                dataSet={{media: ids.imageForth}}
                source={{uri: image3?.url}}
                // source={require('../../assets/images/destination/chicago.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageFifth}
                dataSet={{media: ids.imageFifth}}
                source={{uri: image4?.url}}
                // source={require('../../assets/images/destination/chicago.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
        <View
          style={styles.HotelNameContainer}
          dataSet={{media: ids.HotelNameContainer}}>
          <Text style={styles.HotelName} dataSet={{media: ids.HotelName}} numberOfLines={2}>
            {props?.details?.name}
          </Text>
          <View style={styles.LikeAndShare} dataSet={{media: ids.LikeAndShare}}>
            <View>
              <ShareIcon />
            </View>
            <View>
              <HeartIcon />
            </View>
          </View>
        </View>
        <Text
          style={styles.HotelAddressContainer}
          dataSet={{media: ids.HotelAddressContainer}}>
          <Text
            style={styles.HotelAddressSymbol}
            dataSet={{media: ids.HotelAddressSymbol}}>
            <LocationIcon />
          </Text>
          <Text style={styles.HotelAddress} dataSet={{media: ids.HotelAddress}} numberOfLines={1}>
            {props?.details?.contact?.address?.line1}{' '}
            {props?.details?.contact?.address?.line2}{' '}
            {props?.details?.contact?.address?.city}{' '}
            {props?.details?.contact?.address?.postalCode}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90vw',
      },
      ImageContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      SubImageContainer: {
        display: 'flex',
        flexDirection: 'column',
      },
      FirstImageContainer: {
        position: 'relative',
        height: '50.5vh',
        width: '38vw',
        '@media (max-width: 1000px)': {
          width: '50vw',
        },
      },
      ImageFirst: {
        height: '50.5vh',
        width: '38vw',
        borderRadius: 4,
        '@media (max-width: 1000px)': {
          width: '50vw',
        },
      },
      showAllPhotos: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 14,
        backgroundColor: '#0B8ABB',
        color: '#FFFFFF',
        width: '10vw',
        height: '5vh',
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingTop: 8,
        paddingLeft: 8,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        '@media (max-width: 1300px)': {
          width: '12vw',
        },
        '@media (max-width: 1100px)': {
          width: '14vw',
        },
        '@media (max-width: 930px)': {
          width: '16vw',
        },
        '@media (max-width: 830px)': {
          width: '18vw',
        },
      },
      ImageSecond: {
        height: '25vh',
        width: '14vw',
        borderRadius: 4,
        marginLeft: 3,
        marginBottom: '0.5vh',
        '@media (max-width: 1000px)': {
          width: '20vw',
        },
      },
      imageThird: {
        height: '25vh',
        width: '14vw',
        borderRadius: 4,
        marginLeft: 3,
        '@media (max-width: 1000px)': {
          width: '20vw',
        },
      },
      imageForth: {
        height: '25vh',
        width: '14vw',
        borderRadius: 4,
        marginLeft: 3,
        marginBottom: '0.5vh',
        '@media (max-width: 1000px)': {
          width: '20vw',
        },
      },
      imageFifth: {
        height: '25vh',
        width: '14vw',
        borderRadius: 4,
        marginLeft: 3,
        '@media (max-width: 1000px)': {
          width: '20vw',
        },
      },
      SubContainer: {
        marginTop: 25,
        '@media (max-width: 1000px)': {
          position: 'relative',
          width: '90vw',
        },
      },
      HotelNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        width: '66vw',
        '@media (max-width: 1000px)': {
          width: '90vw',
        },
      },
      HotelName: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 32,
        marginTop: 9,
        width:'50vw'
      },
      LikeAndShare: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
      },
      Share: {
        marginTop: 4,
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        paddingTop: 10,
        borderRadius: 50,
      },
      Like: {
        marginLeft: 10,
        marginTop: 4,
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderColor: '#91A2A9',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
      },

      HotelAddressContainer: {
        marginTop: 14,
      },
      HotelAddressSymbol: {
        fontSize: 18,
      },
      HotelAddress: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 18,
        color: '#91A2A9',
        marginLeft: 12,
      },
    },
  }),
});

export default HotelDetailsPreview;
