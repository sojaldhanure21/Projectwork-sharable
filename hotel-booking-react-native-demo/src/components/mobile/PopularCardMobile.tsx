import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';

const PopularCardMobile = (props: any) => {
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <Image
          source={require(`../../assets/images/destination/${props.data.ImagePath}.jpg`)}
          style={styles.Image} dataSet={{media: ids.Image}} />
        <Text style={styles.Places} dataSet={{media: ids.Places}}>{props.data.Place}</Text>
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '40vw',
        height: '20vh',
        backgroundColor: '#222222',
        marginLeft: '4vw',
        marginTop: 10,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
      },
      Image:{
        width:'100%',
        height:'15vh',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
      },
      Places:{
        fontFamily:'roboto',
        color: '#FFFFFF',
        fontSize:18,
        marginLeft:'4vw',
        marginTop:6
      }
    },
  }),
});

export default PopularCardMobile;
