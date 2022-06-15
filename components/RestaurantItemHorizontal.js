import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItemHorizontal() {
    return (
        <>
        <View style={{backgroundColor: "#fff", marginTop: 10 }}>
            <View style={{ paddingLeft: 15, marginTop: 20, marginBottom: 20}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Highest-Rated</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1}>
                    <View style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 20, marginRight: 15}}>
                        <RestaurantImage />
                        <RestaurantInfo />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View> 
        </>
    )
}


const RestaurantImage = () => (
    <>
        <Image
            source={{uri: "https://cdn.sortiraparis.com/images/80/95878/693086-photos-mohamed-cheikh-top-chef-2021-a-la-pagode-de-cos-de-la-reserve.jpg"}}
            style={{width: "100%", height: 120, borderRadius: 10}}
        />
    </>
);

const RestaurantInfo = () => (
    <>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Farmhouse Kithcen Thai Cuisine</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 5}}>
            <View style={{marginRight: 5}}>
                <Text style={{fontSize: 13, color: 'gray'}}>Veternik, Lagja NIC</Text>
            </View>
            <View style={{marginRight: 5}}>
                <Text style={{fontWeight: "bold", fontSize: 13, color: 'gray'}}>•</Text>
            </View>
            <View>
                <Text style={{fontSize: 13, color: 'gray'}}>20 min larg</Text>
            </View>
        </View>
    </>



    // <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
    //     <View>
    //         <Text style={{fontSize: 15, fontWeight: "bold"}}>Farmhouse Kithcen Thai Cuisine</Text>
    //         <Text style={{fontSize: 13, color: 'gray'}}>30-45 min</Text>
    //     </View>
    //     <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15}}>
    //         <Text>4.5</Text>
    //     </View>
    // </View>
);