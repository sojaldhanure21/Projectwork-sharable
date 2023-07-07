import React, {FC} from 'react';
import {View, Text, Platform} from 'react-native';
import StyleSheet from 'react-native-media-query';

const SortByFilter: FC = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF', width: '68vw', marginLeft: 20,borderRadius: 4,}}>
      <View style={styles.mainContainer} dataSet={{media: ids.mainContainer}}>
        <View style={styles.subContainer} dataSet={{media: ids.subContainer}}>
          <Text style={styles.Sortby} dataSet={{media: ids.Sortby}}>Sortby:</Text>
          <Text style={styles.SmarterSort} dataSet={{media: ids.SmarterSort}}>SmarterSort</Text>
          <Text style={styles.Filter} dataSet={{media: ids.Filter}}>Price</Text>
          <Text style={styles.Filter} dataSet={{media: ids.Filter}}>Best deal</Text>
          <Text style={styles.Filter} dataSet={{media: ids.Filter}}>Popular</Text>
          <Text style={styles.Filter} dataSet={{media: ids.Filter}}>Guest score</Text>
        </View>
      </View>
    </View>
  );
};

const {ids,styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      mainContainer: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        bagroundColor: '#FFFFFF',
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 4,
        width: '68vw',
        // marginLeft: 20,
      },
      subContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 22,
      },
      Sortby: {
        color: '#91A2A9',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
      },
      SmarterSort: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 14,
        color: '#0B8ABB',
        paddingVertical: 2,
        marginLeft: 35,
        '@media (max-width: 830px)': {
          marginLeft: 20,
        }, 
        '@media (max-width: 730px)': {
          fontSize: 14,
        }, 
      },
      Filter: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#222222',
        marginLeft: 35,
        paddingVertical: 2,
        fontWeight: '400',
        '@media (max-width: 830px)': {
          marginLeft: 20,
        }, 
        '@media (max-width: 730px)': {
          fontSize: 14,
        }, 
      },
    },
  }),
});

export default SortByFilter;
