import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import RestaurantItemsHorizontal from '../components/RestaurantItemsHorizontal';

const YELP_API_KEY = "gwggNHvf81V0FiS2J0YZfqopGfAj4PEkk4INOZQ5WAVwX9UAcqnIzfpHfTnseJ70juod7Nz-9Z-gFjceAbguxByDXAVdbyeVlebq8onLNtTAGOPDsS3ykEySVkuvYnYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [newestRestaurantData, setNewestRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantData(json.businesses));

    };

    const getNewestRestaurantsFromYelp = () => {
        const yelpNewestRestaurantsUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego&attributes=hot_and_new";

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpNewestRestaurantsUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setNewestRestaurantData(json.businesses));
    }


    useEffect(() => {
        getRestaurantsFromYelp()
    }, []);

    useEffect(() => {
        getNewestRestaurantsFromYelp()
    }, []);

    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItemsHorizontal newestRestaurantData={newestRestaurantData}/>
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
}
