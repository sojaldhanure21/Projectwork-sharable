import React, {useState} from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import RoomsViewMobile from './RoomsViewMobile';
import DetailsCardMobile from './DetailsCardMobile';
import NearByCardMobile from './NearByCardMobile'
import ReviewCardMobile from './ReviewCardMobile';

const HotelMenuBarMobile = (props: any) => {
  const [isActiveExploreRooms, setIsActiveExploreRooms] = useState(true);
  const [isActiveDetails, setIsActiveDetails] = useState(true);
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [isActiveNearBy, setIsActiveNearBy] = useState(true);
  
  console.log("PPP", props?.details?.descriptions)
  const {
    0: text,
   
  } = props?.details?.descriptions || []

  console.log("qqq" , text)

  function exploreRoom() {
    setIsActiveExploreRooms(true);
  }
  function exploreRoomFirst() {
    setIsActiveExploreRooms(false);
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
    <>
      <View>
        <View style={styles.MainContainer} dataSet={{media: ids.HotelMenuBar}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.SubContainer}>
            <View>
              {isActiveDetails ? (
                <Text
                  onPress={() => detailsFunFirst()}
                  style={styles.FirstField}>
                  DETAILS
                </Text>
              ) : (
                <Text
                  onPress={() => detailsFun()}
                  style={styles.FirstFieldActive}>
                  DETAILS
                </Text>
              )}
            </View>

            <View>
              {isActiveExploreRooms ? (
                <Text onPress={() => exploreRoomFirst()} style={styles.Field}>
                  EXPLORE ROOMS
                </Text>
              ) : (
                <Text onPress={() => exploreRoom()} style={styles.FieldActive}>
                  EXPLORE ROOMS
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
                  NEAR BY
                </Text>
              ) : (
                <Text onPress={() => nearByFun()} style={styles.FieldActive}>
                  NEAR BY
                </Text>
              )}
            </View>
          </ScrollView>
        </View>

        <View>
        <View>{!isActiveExploreRooms ? <RoomsViewMobile /> : null}</View>

        <View>{!isActiveDetails ? <DetailsCardMobile details={text?.text} /> : null}</View>

        <View>{!isActiveReview ?  <ReviewCardMobile /> : null}</View>

        <View>{!isActiveNearBy ?  <NearByCardMobile /> : null}</View>
      </View>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      HotelMenuBar: {
        width: '100%',
      },
      MainContainer: {
        width: '100%',
        height: '6vh',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 4,
        marginTop: 24,
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
        marginLeft: 30,
        marginVertical: 'auto',
        fontWeight: '400',
        color: '#91A2A9',
      },
      FirstFieldActive: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 30,
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
        marginLeft: 65,
        marginVertical: 'auto',
        fontWeight: '400',
        color: '#91A2A9',
      },
      FieldActive: {
        fontFamily: 'roboto',
        fontSize: 16,
        marginLeft: 65,
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

export default HotelMenuBarMobile;
