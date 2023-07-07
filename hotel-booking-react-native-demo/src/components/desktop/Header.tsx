import React, {FC} from 'react';
import {Platform, Text, View} from 'react-native';
import {SmarterTravalLarge} from '../../assets/icons/IconsSvg';
import StyleSheet from 'react-native-media-query';

const Header: FC = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.SubContainer} dataSet={{media: ids.SubContainer}}>
        <SmarterTravalLarge />
      </View>
      <View style={styles.SubMenuContainer}>
        <Text style={styles.MenuSymbol} dataSet={{media: ids.MenuSymbol}}>☰</Text>
      </View>
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      MainContainer: {
        width: '100vw',
        height: '13.5vh',
        backgroundColor: '#F4F5F9',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.7,
        shadowRadius: 4,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
      },
      SubContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 'auto',
        marginLeft: '5.5vw',              
        '@media (max-width: 700px)': {
          transform: [{scale: 0.7}],    
          marginLeft: '-6vw',
              
        },
        '@media (max-width: 430px)': {
          transform: [{scale: 0.45}], 
          marginLeft: '-20vw',
        },
      },
      SubMenuContainer: {
        marginVertical: 'auto',
        marginLeft: '58vw',
      },
      MenuSymbol: {
        fontSize: 38,
        color: '#91A2A9',
        '@media (max-width: 1000px)': {
     
          marginLeft: '-20vw',
              
        },
        '@media (max-width: 700px)': {
          transform: [{scale: 0.7}],    
          marginLeft: '-24vw',
              
        },
        '@media (max-width: 430px)': {
          transform: [{scale: 0.5}], 
          marginLeft: '-65vw',
        },
      },
    },
  }),
});

export default Header;
