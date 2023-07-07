import React, {FC} from 'react';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import RoomTypeCard from './RoomTypeCard';
import StyleSheet from 'react-native-media-query';
import {useAppSelector} from '../../redux/hooks';
import { UsageState } from 'webpack';

const ExploreRoomsCard = () => {
  // const [RoomType ,loadRoomType ] = useStat
const Roomdatas = useAppSelector( state => state.hotel.RoomsData)
const data = Roomdatas;
  let hotelsRoomDatas : any = []
  let hotelRooms  
  // hotelsRoomDatas = data?.map( (rooms : any) => { return rooms?.recommendations?  rooms?.recommendations: null   })
    
  // for(let i = 0 ; i < hotelsRoomDatas.length() ; i++)
  // {
    // hotelRooms = hotelsRoomDatas?.map((elem) => { return elem.roomGroup? elem.roomGroup : null  })
    // if (i > hotelsRoomDatas.lenght) { loadRoomType(true) }
  // }
    console.log("RoomdatasRoomdatas",data)
   
  // let groupId =  data?.map( (rooms : any) => { return rooms.groupId})
  
  
    
  // hotelRooms  = hotelsRoomDatas?.map((elem)=> {return elem} )
      
        console.log("RoomdatasRoomdatasss",hotelsRoomDatas)
  
    // console.log("RoomdatasRoomdatass",groupId)
  
    
    console.log("RoomdatasRoomdatasssss",hotelRooms)
    
   
  
  
  // const roomsrecommendations = recommendations.map((rooms)=> {return rooms} )
  
  // const roomRecommendations = data?.map( (rooms : any) => { return rooms?.recommendations.roomGroup})
  
  return (
    <View style={styles.mainContainer} dataSet={{media: ids.mainContainer}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        {/* <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard /> */}
      </ScrollView>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      mainContainer: {
        width: '66.5vw',
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 1000px)': {
          width: '90vw',
        },
      },
    },
  }),
});

export default ExploreRoomsCard;
