import React, {FC} from 'react';
import {Platform, Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';
import {MenuBarMobile, SmarterTravelSmall} from '../../assets/icons/IconsSvg';

const HeaderMobile = () => {
  return (
    <>
      <View style={styles.MainContainer} dataSet={{media: ids.MainContainer}}>
        <View style={styles.SmarterContainer} dataSet={{media: ids.SmarterContainer}}>
          <SmarterTravelSmall />
        </View>
        <View style={styles.MenuContainer} dataSet={{media: ids.MenuContainer}}>
            <Text style={styles.Currency} dataSet={{media: ids.Currency}}>USD</Text>
            <View style={styles.MenuBar} dataSet={{media: ids.MenuBar}}>
                <MenuBarMobile />
            </View>
        </View>
        
      </View>
    </>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        height: '10vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor:'#DDEFF5',
        borderBottomWidth:1,
        borderStyle:'solid'

      },
      SmarterContainer:{
        width:'75vw',
        marginVertical:'auto',
        paddingLeft:'2vw'
      },
      MenuContainer:{
        display:'flex',
        flexDirection:'row'
      },
      Currency:{
        width:'8vw',
        marginHorizontal:'auto',
        marginVertical:'auto',
        color:'#FFFFFF',
        backgroundColor:'#222222',
        height:'5vh',
        textAlign:'center',
        paddingVertical:'1vh',
        fontFamily:'roboto',
        fontSize:16,
        borderRadius:8,
        fontWeight:'500',
        '@media (max-width: 400px)': {
            fontSize:12,
            paddingVertical:'1.5vh',
          },
      },
      MenuBar:{
        width:'10vw',
        margin:'auto',
        padding:'auto'
      }
    },
  }),
});

export default HeaderMobile;
