import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5
    },
    {
        name: "Springbreak",
        image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7
    },
    {
        name: "Premium De Bronx",
        image_url: "https://www.thebalancesmb.com/thmb/NdMx0V7BgXilfkItXEqz1qI1Fk8=/3435x2576/smart/filters:no_upscale()/waiter-picking-up-dishes-in-kitchen-at-restaurant-495332577-5ac0facf0e23d90036761430.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 5
    }
];

export default function RestaurantItem(props) {
    return (
        <>
        <View style={{backgroundColor: "#fff", marginTop: 10}}>
            <View style={{ paddingLeft: 15, marginTop: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Order Now</Text>
                </View>
            <TouchableOpacity activeOpacity={1}>
                {props.restaurantData.map((restaurant, index) => (
                    <View key={index} style={{ marginTop: 10, padding: 15 }}>
                        <RestaurantImage image_url={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                ))}
            </TouchableOpacity>
        </View>
        </>
    )
}


const RestaurantImage = (props) => (
    <>
        <Image
            source={{uri: props.image_url}}
            style={{width: "100%", height: 150, borderRadius: 10}}
        />
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-45 min</Text>
        </View>
        <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15}}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);