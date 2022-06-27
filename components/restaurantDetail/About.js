import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/d/p29410-15743151555dd62493bdda1.jpg?tr=tr:n-xlarge",
    display_phone: "+14157492060",
    location: {
        address1: "800 N Point St",
        city: "San Francisco"
    }
};



export default function About(props) {
    const {name, image, display_phone, location} = props.route.params;

    const LocationAddress = yelpRestaurantInfo.location.address1;
    const LocationCity = yelpRestaurantInfo.location.city;

    const description = `${LocationAddress} • ${LocationCity} • ${display_phone}`;



    return (
        <View style={{padding: 20, backgroundColor: 'white'}}>
            <RestaurantImage image={image} />
            
            <RestaurantName name={name}/>

            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 140, borderRadius: 8}} />
);

const RestaurantName = (props) => (
    <Text style={{fontSize: 25, fontWeight: "600", marginTop: 30}}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{fontSize: 14, color: 'gray', marginTop: 6}}>{props.description}</Text>
);