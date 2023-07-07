import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ACIcon, ACIconMobile, PoolIcon, PoolIconMobile, RestaurantIconMobile, SpaIcon, SpaIconMobile, WifiIcon, WifiIconMobile } from "../../assets/icons/IconsSvg";

const DetailsCardMobile = (props: any) => {
    return (
        <View>
            <View>
                <View style={{ display: "flex", flexDirection: 'row', marginTop:20 }}>
                    <View style={{ marginLeft: "20%",}}>
                        <PoolIconMobile />
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20}}>
                        <WifiIconMobile />
                    </View>
                    <View>
                        <RestaurantIconMobile />
                    </View>
                </View>
            </View>
            <View style={styles.AboutText}>
                <Text style={styles.About}>About This Hotel</Text>
                <View style={styles.Content}>
                    <Text numberOfLines={6}>{props.details}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...Platform.select({
        web: {
            AboutText: {
                height: "50px",
                width: "450px",
                // left: 60,
                top:28,
                borderRadius: 0,
                
            },
            About:{
                fontFamily:'Roboto', 
                fontWeight: "600", 
                fontSize: 16,
                marginTop: 0,
                left:300,
                marginLeft:10
            },
            Content: {
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: "400",
                marginTop: 10,
                wordSpacing:1,
                marginLeft:10
        }

        }
    }),
});


export default DetailsCardMobile;