import React from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {HeartIcon, HeartIconMobile} from '../../assets/icons/IconsSvg';
import {useNavigate} from 'react-router-dom';
import {Rating} from 'react-simple-star-rating';
import { useDispatch } from 'react-redux';
import { setHotelDetailsId } from '../../redux/hotelSlice';
const HotelCardMobile = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function goToHotelDetails() {
    // console.log("gggg",props?.hotel?.id)
    dispatch(setHotelDetailsId(props?.hotel?.id))
    navigate('/hotel_detail');
  }
  const perNightPrice = props?.hotel?.rate?.perNightTotal
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <Pressable onPress={() => goToHotelDetails()}>
          <View
            style={styles.ImageContainer}
            dataSet={{media: ids.ImageContainer}}>
            <View
              style={styles.HotelContainer}
              dataSet={{media: ids.HotelContainer}}>
              <Text
                numberOfLines={1}
                style={styles.HotelName}
                dataSet={{media: ids.HotelName}}>
                {props.hotel.name}
              </Text>
              <Text style={{marginVertical: 'auto', marginLeft: '18vw'}}>
                <HeartIconMobile />
              </Text>
            </View>
            <Image
              style={styles.Image}
              dataSet={{media: ids.Image}}
              source={props.hotel.heroImage}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                paddingLeft: '2vw',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                width: '100%',
              }}>
              <Rating
                initialValue={props.hotel?.starRating}
                size={18}
                allowFraction={true}
                readonly={true}
              />
            </Text>
          </View>
          <View
            style={{
              height: '8vh',
              width: '100%',
            }}>
            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Text
                numberOfLines={1}
                style={{marginVertical: 'auto', flex: 1, marginLeft: '2vw'}}>
                {props.hotel?.address}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: '2vw',
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontFamily: 'roboto',
                    fontSize: 18,
                    color: '#222222',
                    fontWeight: '600',
                  }}>
               ${perNightPrice ? perNightPrice?.toFixed(2) : "N/A"}
                </Text>
                <Text
                  style={{
                    fontFamily: 'roboto',
                    color: '#91A2A9',
                    fontSize: 12,
                  }}>
                  Final price taxes included
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        height: '40vh',
        marginHorizontal: '2vw',
        marginTop: '2vh',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 10,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      ImageContainer: {
        width: '100%',
        height: '32vh',
        position: 'relative',
      },
      HotelContainer: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        height: '8vh',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
      },
      HotelName: {
        width: '70%',
        fontFamily: 'roboto',
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 'auto',
        marginLeft: '2vw',
        fontWeight: '600',
      },
      Image: {
        width: '100%',
        height: '32vh',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
    },
  }),
});

export default HotelCardMobile;
