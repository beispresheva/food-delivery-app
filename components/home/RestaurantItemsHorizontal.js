import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItemHorizontal({navigation, ...props}) {
    return (
        <>
        <View style={{backgroundColor: "#fff", marginTop: 10 }}>
            <View style={{ paddingLeft: 15, marginTop: 20, marginBottom: 20}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Hot and New</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.newestRestaurantData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1}
                onPress={
                    () => navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        display_phone: restaurant.display_phone,
                        address1: restaurant.address1,
                        city: restaurant.city
                    })
                }>
                        <View  style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 20, marginRight: 15}}>
                            <RestaurantImage image_url={restaurant.image_url} />
                            <RestaurantInfo name={restaurant.name} address={restaurant.address1} />
                        </View>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </View> 
        </>
    )
}


const RestaurantImage = (props) => (
    <>
        <Image
            source={{uri: props.image_url}}
            style={{width: "100%", height: 120, borderRadius: 10}}
        />
    </>
);

const RestaurantInfo = (props) => (
    <>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 5}}>
            <View style={{marginRight: 5}}>
                <Text style={{fontSize: 13, color: 'gray'}}>{props.address}</Text>
            </View>
            <View style={{marginRight: 5}}>
                <Text style={{fontWeight: "bold", fontSize: 13, color: 'gray'}}>•</Text>
            </View>
            <View>
                <Text style={{fontSize: 13, color: 'gray'}}>20 min larg</Text>
            </View>
        </View>
    </>
);