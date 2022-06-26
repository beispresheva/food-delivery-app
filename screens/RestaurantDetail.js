import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'

export default function RestaurantDetail() {
    return (
        <SafeAreaView>
            <View>
                <About />
                <Divider width={10} color={"#eee"} style={{marginVertical: 20, backgroundColor: "#eee"}} />
                <MenuItem styles/>
            </View>
        </SafeAreaView>
    )
}
