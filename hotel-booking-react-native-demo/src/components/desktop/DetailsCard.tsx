import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { ACIcon, PoolIcon, RectangleIcon, RestaurantIcon, SpaIcon, WifiIcon } from "../assets/icons/IconsSvg";
import { ACIcon, PoolIcon, RestaurantIcon, SpaIcon, WifiIcon, } from "../../assets/icons/IconsSvg";
const DetailsCard = (props:any) => {
    return (
        <View>
            <View style={styles.subContainer}>
                <Text style={styles.nearText}>Special Amenities</Text>
            </View>
            <View style={{display:"flex",flexDirection:'row'}}>
            <View style={styles.icons}>
                <View>
                    <PoolIcon />
                </View>
               
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <WifiIcon />
                </View>

                <View>
                    <RestaurantIcon />
                </View>
            </View>
            <View style={styles.AboutText}>
                <Text style={styles.About}>About This Hotel</Text>
                <View style={styles.Content}>
                  <Text numberOfLines={6} style={{textAlign:'justify'}}> {props.details}</Text>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...Platform.select({
        web: {
            subContainer: {
                marginLeft: 5,
                marginTop:20
            },
            nearText: {
                fontFamily:'Roboto', 
                fontWeight: "600", 
                fontSize: 16,          
                
                marginRight: '1.7vw',
                // marginTop: 20,
            },
            icons: {
                marginTop: 10,
                flexDirection: 'row',
                marginLeft: 0
            },
            AboutText: {
                // height: "50px",
                width: '38vw',
                // left: 40,
                top:0,
                borderRadius: 0,
                marginLeft:'4vw',
            },
            About:{
                fontFamily:'Roboto', 
                fontWeight: "600", 
                fontSize: 16,
                marginTop: 0,
                left:300
            },
            Content: {
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: "400",
                marginTop: 10,
                wordSpacing:1,
        }
    }
    }),
});

export default DetailsCard;