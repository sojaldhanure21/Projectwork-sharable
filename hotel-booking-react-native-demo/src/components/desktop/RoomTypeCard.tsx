import React, {FC} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import StyleSheet from 'react-native-media-query';

const RoomTypeCard  = (props:any) => {
  // const roomImages  = props.roomImages.map((data) => {return data } )
  // const roomImagesUrl = roomImages.map(( rooms : any )=>{ return rooms[0]?.url})  
   console.log("roomtypes",props.roomImages)
   console.log("roomtypes",props.roomRecommendations)   
  return (
    <View>
      <View style={styles.subContainer} dataSet={{media: ids.subContainer}}>
        <View>
          {/* { roomImages.map((url) => {
            return <Image
              source={{ uri: url[0]?.url }}
              style={styles.HotelImage}
            />
          })} */}
        </View>
        <View style={styles.HotelDetailsContainer}>
          <Text style={styles.HotelName}>Room Type</Text>
          <View style={styles.Amenities}>
            <Text style={styles.BedroomType}>Bedroom Type</Text>
            <Text style={styles.AmenitiesName}> · amenities</Text>
            <Text style={styles.AmenitiesName}> · amenities</Text>
            <Text style={styles.AmenitiesName}> · amenities</Text>
          </View>

          <View style={styles.Cancelation}>
            <Text style={styles.CancelationText}>Cancellation Policies</Text>
            <Text style={styles.Policies}>All policies details</Text>
            <Text style={styles.PoliciesFirst}>✓ Refundable</Text>
            <Text style={styles.PoliciesSecond}>✓ Free Breakfast</Text>
          </View>

          <View style={styles.ReserveContainer}>
            <View style={styles.PriceContainer}>
              <Text style={styles.Price}>$40.00</Text>
              <Text style={styles.PerStay}>/night</Text>
            </View>
            <Text style={styles.PriceTaxes}>$50.00 taxes & fees included</Text>
            <Text style={styles.PriceTaxes}>For 2 guest</Text>
            <Text style={styles.PriceDetails}>Price Details</Text>
            <Text style={styles.ReserveText}>Reserve</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      subContainer: {
        width: '24vw',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 6,
        marginVertical: 24,
        backgroundColor: '#FFFFFF',
        marginRight: '1.7vw',
        '@media (max-width: 1000px)': {
          width: '28vw',
          },
      },
      HotelImage: {
        height: '24vh',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
      },
      HotelDetailsContainer: {
        width: '23vw',
        marginHorizontal: 8,
        marginTop: 16,
        paddingHorizontal: 8,
      },
      HotelName: {
        fontFamily: 'roboto',
        fontWeight: '600',
        fontSize: 24,
        color: '#000000',
      },
      Amenities: {
        borderBottomColor: '#D9D9D9',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginTop: 8,
      },
      BedroomType: {
        fontFamily: 'roboto',
        color: '#5D6771',
        fontSize: 16,
        fontWeight: '500',
      },
      AmenitiesName: {
        fontFamily: 'roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
        paddingVertical: 3,
      },
      Cancelation: {
        marginTop: 20,
      },
      CancelationText: {
        fontFamily: 'roboto',
        fontWeight: '600',
        fontSize: 16,
        color: '#444444',
      },
      Policies: {
        marginVertical: 20,
        fontFamily: 'roboto',
        fontSize: 14,
        color: '#0B8ABB',
      },
      PoliciesFirst: {
        fontFamily: 'roboto',
        fontSize: 16,
        color: '#00A642',
        paddingBottom: 20,
        borderBottomColor: '#D9D9D9',
        borderStyle: 'solid',
        borderBottomWidth: 1,
      },
      PoliciesSecond: {
        marginTop: 20,
        fontFamily: 'roboto',
        fontSize: 16,
        color: '#000000',
        paddingBottom: 20,
      },
      ReserveContainer: {
        marginTop: 70,
        position: 'relative',
        marginBottom: 20,
      },
      PriceContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      Price: {
        fontFamily: 'roboto',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222222',
      },
      PerStay: {
        fontFamily: 'roboto',
        fontSize: 22,
        color: '#222222',
      },
      PriceTaxes: {
        fontFamily: 'roboto',
        fontSize: 16,
        color: '#5D6771',
        paddingVertical: 4,
      },
      PriceDetails: {
        fontFamily: 'roboto',
        fontSize: 14,
        color: '#0B8ABB',
        textDecorationLine: 'underline',
        paddingVertical: 8,
      },
      ReserveText: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: '#FFFFFF',
        backgroundColor: '#0B8ABB',
        fontFamily: 'roboto',
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 6,
      },
    },
  }),
});

export default RoomTypeCard;
