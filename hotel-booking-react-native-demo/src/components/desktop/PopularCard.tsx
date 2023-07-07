import React, {FC} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import { PopularDestination } from '../../data/PopularDestination';

const PopularCard = (props:any) => {
  return (
    <View>
      <View style={styles.SubContainer}>
        <View>
          <Image
            source={require(`../../assets/images/destination/${props.data.ImagePath}.jpg`)}
            style={styles.Image}
          />
        </View>
        <View style={{marginTop:'2.6vh',marginLeft:10}} >
          <Text style={styles.DestinationText} dataSet={{media: ids.DestinationText}}>{props.data.Place}</Text>
        </View>    
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      SubContainer: {
        backgroundColor: '#FFFFFF',
        width: '20vw',
        height: '35vh',
        borderRadius: 20,
        position: 'relative',
        shadowColor: '#ccc',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius:5,
        marginBottom:10,
        marginRight:'2vw',
        zIndex:-1,
        '@media (max-width: 700px)': {
          borderRadius: 10,
      },

      },
      Image: {
        width: '20vw',
        height: '25vh',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      DestinationText:{
        fontFamily:'roboto',
        fontSize:18,
        fontWeight:'800',
        '@media (max-width: 700px)': {
          fontSize: 12,
          paddingTop:6
      },
      }
    },
  }),
});

export default PopularCard;
