import React, {FC, useState} from 'react';
import {Platform, Text, View} from 'react-native';
import ExploreRoomsCard from './ExploreRoomsCard';
import DetailsCard from './DetailsCard';
import ReviewCard from './ReviewCard';
import NearByCard from './NearByCard';
import StyleSheet from 'react-native-media-query';
import { useAppSelector } from '../../redux/hooks';
import { useGetRoomDataQuery } from '../../redux/api/hotelApi';
import { useNavigate } from 'react-router-dom';

const HotelMenuBar = (props: any) => {
  const [isActiveExploreRooms, setIsActiveExploreRooms] = useState(true);
  const [isActiveDetails, setIsActiveDetails] = useState(false);
  const [isActiveReview, setIsActiveReview] = useState(true);
  const [isActiveNearBy, setIsActiveNearBy] = useState(true);
  const searchIdFilter = useAppSelector(state => state.hotel.searchId)
  const hotelId = useAppSelector(state => state.hotel.hotelDetailsId);
  const searchTracingKey = useAppSelector(state => state.hotel.searchTracingKey)
  const sessionKeyFilter = useAppSelector(
    state => state.hotel.user_session_key,
  );
  
  console.log("PPP", props?.details?.descriptions)


  const {
    0: text,
   
  } = props?.details?.descriptions || []


  const {
    0: phone,
  } = props?.details?.contact?.phones || 'NA'

  const {
    0: emails,
  } = props?.details?.contact?.emails || 'NA'

  const website = props?.details?.contact?.website || 'NA'

  console.log("qqqaa" , phone,emails,website)


  useGetRoomDataQuery({searchId:searchIdFilter,hotelId: hotelId,sessionKey: sessionKeyFilter,searchTracingKey:searchTracingKey});

const RoomDatas = useAppSelector( state => state.hotel.RoomsData)
 console.log("RoomDatas",RoomDatas)
function exploreRoom() {
    setIsActiveExploreRooms(true);
  }
  function exploreRoomFirst() {
    if(RoomDatas !=="undefined")
   {setIsActiveExploreRooms(false);}
    setIsActiveDetails(true);
    setIsActiveReview(true);
    setIsActiveNearBy(true);
  }

  function detailsFun() {
    setIsActiveDetails(true);
  }
  function detailsFunFirst() {
    setIsActiveDetails(false);
    setIsActiveExploreRooms(true);
    setIsActiveReview(true);
    setIsActiveNearBy(true);
  }

  function reviewFun() {
    setIsActiveReview(true);
  }
  function reviewFunFirst() {
    setIsActiveReview(false);
    setIsActiveExploreRooms(true);
    setIsActiveDetails(true);
    setIsActiveNearBy(true);
  }

  function nearByFun() {
    setIsActiveNearBy(true);
  }
  function nearByFunFirst() {
    setIsActiveNearBy(false);
    setIsActiveExploreRooms(true);
    setIsActiveDetails(true);
    setIsActiveReview(true);
  }

  return (
    <View style={styles.HotelMenuBar} dataSet={{media: ids.HotelMenuBar}}>
      <View style={styles.MainContainer} dataSet={{media: ids.HotelMenuBar}}>
        <View style={styles.SubContainer}>
          <View>
            {isActiveExploreRooms ? (
              <Text
                onPress={() => exploreRoomFirst()}
                style={styles.FirstField}>
                EXPLORE ROOMS
              </Text>
            ) : (
              <Text
                onPress={() => exploreRoom()}
                style={styles.FirstFieldActive}>
                EXPLORE ROOMS
              </Text>
            )}
          </View>

          <View>
            {isActiveDetails ? (
              <Text onPress={() => detailsFunFirst()} style={styles.Field}>
                DETAILS
              </Text>
            ) : (
              <Text onPress={() => detailsFun()} style={styles.FieldActive}>
                DETAILS
              </Text>
            )}
          </View>

          <View>
            {isActiveReview ? (
              <Text onPress={() => reviewFunFirst()} style={styles.Field}>
                REVIEWS
              </Text>
            ) : (
              <Text onPress={() => reviewFun()} style={styles.FieldActive}>
                REVIEWS
              </Text>
            )}
          </View>

          <View>
            {isActiveNearBy ? (
              <Text onPress={() => nearByFunFirst()} style={styles.Field}>
                Contact Us
              </Text>
            ) : (
              <Text onPress={() => nearByFun()} style={styles.FieldActive}>
                Contact Us
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* After Selection Cards */}
      <View>
        <View>{!isActiveExploreRooms ? <ExploreRoomsCard /> : null}</View>

        <View>{!isActiveDetails ? <DetailsCard details={text?.text}/> : null}</View>

        <View>{!isActiveReview ? <ReviewCard /> : null}</View>

        <View>{!isActiveNearBy ? <NearByCard phone={phone} emails={emails} website={website}/> : null}</View>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      HotelMenuBar: {
        width: '66.8vw',
        '@media (max-width: 1000px)': {
          width: '90vw',
          },
      },
      MainContainer: {
        width: '66.5vw',
        height: '6vh',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 4,
        marginTop: 24,
        '@media (max-width: 1000px)': {
          width: '90vw',
          },
      },
      SubContainer: {
        backgroundColor: '#FFFFFF',
        height: '6vh',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
      },
      FirstField: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 20,
        marginVertical: 'auto',
        fontWeight: '400',
        color: '#91A2A9',
      },
      FirstFieldActive: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 20,
        // marginVertical: 'auto',
        paddingTop: '1.5vh',
        paddingBottom: '0.85vh',
        fontWeight: '500',
        color: '#222222',
        borderBottomColor: '#222222',
        borderBottomWidth: 3,
        borderStyle: 'solid',
      },
      Field: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 60,
        marginVertical: 'auto',
        fontWeight: '400',
        color: '#91A2A9',
      },
      FieldActive: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 60,
        // marginVertical: 'auto',
        paddingTop: '1.5vh',
        paddingBottom: '0.85vh',
        fontWeight: '500',
        color: '#222222',
        borderBottomColor: '#222222',
        borderBottomWidth: 3,
        borderStyle: 'solid',
      },
    },
  }),
});

export default HotelMenuBar;
