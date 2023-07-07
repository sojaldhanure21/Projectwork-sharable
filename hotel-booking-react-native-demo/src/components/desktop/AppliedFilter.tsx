import React, {FC} from 'react';
import {View, Text, Platform, ScrollView} from 'react-native';
import {CancelIcon} from '../../assets/icons/IconsSvg';
import StyleSheet from 'react-native-media-query';

const AppliedFilter: FC = () => {
  const array = ['4 star', '4 plus', 'Hotel', 'Free Parking'];
  return (
    <View style={styles.mainContainer} dataSet={{media: ids.mainContainer}}>
      <View style={styles.subContainer} dataSet={{media: ids.subContainer}}>
        <Text style={styles.Filter} dataSet={{media: ids.Filter}}>Filters</Text>
        <View style={styles.appliedFilter} dataSet={{media: ids.appliedFilter}}>
          {array.map((data, i) => {
            return (
              <Text style={styles.applyData} dataSet={{media: ids.applyData}}>
                {data}{' '}
                <Text style={styles.cancelFilter} dataSet={{media: ids.cancelFilter}}>
                  <CancelIcon />
                </Text>
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const {ids,styles} = StyleSheet.create({
  ...Platform.select({
    web: {
      mainContainer: {
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 20,
      },
      subContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      Filter: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: '#91A2A9',
        marginLeft: 10,
        marginRight: 8,
        paddingVertical: 8,
      },
      appliedFilter: {
        display: 'flex',
        flexDirection: 'row',
      },
      applyData: {
        marginLeft: 20,
        paddingHorizontal: 13,
        paddingVertical: 10,
        borderColor: '#91A2A9',
        borderWidth: 1,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        color: '#5D6771',
        borderRadius: 24,
        '@media (max-width: 800px)': {
          marginLeft: 10,
        },
        '@media (max-width: 750px)': {
          marginLeft: 10,
          paddingHorizontal: 8,
        },
        '@media (max-width: 700px)': {
          marginLeft: 5,
          paddingHorizontal: 8,
          
        },
      },
      cancelFilter: {
        marginLeft: 4,
      },
    },
  }),
});

export default AppliedFilter;
