import React from 'react'
import { View, Text, Image } from 'react-native'

const image = "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/d/p29410-15743151555dd62493bdda1.jpg?tr=tr:n-xlarge";

const title = 'Test Resturant Cuisine';
const description = 'Lorem ipsum dolor amet sinid amet dolor isit';

export default function About() {
    return (
        <View style={{padding: 15}}>
            <RestaurantImage image={image} />
            
            <RestaurantTitle title={title}/>

            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180, borderRadius: 8}} />
);

const RestaurantTitle = (props) => (
    <Text style={{fontSize: 25, fontWeight: "600", marginTop: 30}}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{fontSize: 16, color: 'gray', marginTop: 6}}>{props.description}</Text>
);