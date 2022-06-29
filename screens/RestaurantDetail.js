import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({route, navigation}) {
    return (
        <SafeAreaView>
            <View>
                
                <About route={route}/>
                <Divider width={10} color={"#eee"}/>
                <MenuItem styles/>
                <ViewCart navigation={navigation} restaurantName={route.params.name} />
                
            </View>
        </SafeAreaView>
    )
}
