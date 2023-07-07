import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Rating} from 'react-simple-star-rating';
import { setHotelDetailsId } from '../../redux/hotelSlice';
import AsyncStorage from '@react-native-community/async-storage';
const HotelCard = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
// console.log('zzzz',props?.hotel?.rate?.perNightTotal)
 const perNightPrice = props?.hotel?.rate?.perNightTotal

 

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={props.hotel.heroImage} />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.leftContainer}>
          <Text style={styles.hotelName} numberOfLines={2}>
            {props.hotel.name}
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 7}}>
            <Rating initialValue={props.hotel?.starRating} size={18} allowFraction={true} readonly={true}/>
            {/* <Text style={{color: '#FFD700'}}>{props.hotel?.starRating}</Text> */}
          </View>

          <Text style={styles.addressMini} numberOfLines={1}>{props.hotel?.address}</Text>
        </View>
        <View style={styles.priceTag}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            ${perNightPrice ? perNightPrice?.toFixed(2) : "N/A"}
          </Text>
          <View style={styles.selectButton}>
            <Button
              title="Select Hotel"
              onPress={() => {
                dispatch(setHotelDetailsId(props.hotel.id))
                navigate('/hotel_detail');                 
               
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    marginLeft: 20,
    backgroundColor: '#FFFFFF',
    // width: '66.30%',
    width: '68vw',
    height: '24vh',
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#ADCED9', //
    borderWidth: 1,
    // shadowColor: '#171717',
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  imageStyle: {
    flex: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: '100%',
    // width:  Platform.OS === 'web' ? "25%" : "20%",
    maxWidth: '30%',
    opacity: 0.9,
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  hotelName: {
    flex: 1,
    width: '40vw',
    paddingHorizontal: 11,
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '600',
    transform: [{translateY: -25}],
  },
  addressMini: {
    width:'34vw',
    flex: 3,
    marginTop: 5,
    fontFamily: 'Roboto',
    paddingHorizontal: 11,
    marginVertical: 5,
    fontSize: 14,
    color: '#5D6771',
    transform: [{translateY: 20}],
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3CB371',
    padding: 5,
    borderRadius: 7,
    marginBottom: 8,
    marginRight: 10,
  },
  leftContainer: {
    flexDirection: 'column',
    flex: 1,
    color: '#222222',
  },
  priceTag: {
    height: 60,
    width: 140,
    position: 'absolute',
    right: 10,
    borderTopRightRadius: 15,
    fontFamily: 'Roboto',
    fontWeight: 700,
    borderBottomLeftRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    transform: [{translateY: 5}],
  },
  selectButton: {
    transform: [{translateY: 25}],
  },
});

export default HotelCard;
