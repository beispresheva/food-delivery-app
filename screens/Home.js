import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs'
import BottomTabs from '../components/home/BottomTabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import RestaurantItemsHorizontal from '../components/home/RestaurantItemsHorizontal';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY = "gwggNHvf81V0FiS2J0YZfqopGfAj4PEkk4INOZQ5WAVwX9UAcqnIzfpHfTnseJ70juod7Nz-9Z-gFjceAbguxByDXAVdbyeVlebq8onLNtTAGOPDsS3ykEySVkuvYnYx";

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [newestRestaurantData, setNewestRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));

    };

    const getNewestRestaurantsFromYelp = () => {
        const yelpNewestRestaurantsUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&attributes=hot_and_new`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpNewestRestaurantsUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setNewestRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    }


    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab]);

    useEffect(() => {
        getNewestRestaurantsFromYelp()
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItemsHorizontal newestRestaurantData={newestRestaurantData} navigation={navigation}/>
                <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
