import React from 'react'
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const foods = [
    {
        title: "Lasagna",
        description: "Wheat flour, levain, wholewheat flour, sunflower seeds, black sesame, salt",
        price: "€13.50",
        image: "https://warikerestaurant.com/wp-content/uploads/2022/02/about-us-bg.jpg"
    },
    {
        title: "Tandori Chicken",
        description: "Wheat flour, levain, wholewheat flour, sunflower seeds, black sesame, salt",
        price: "€13.50",
        image: "https://warikerestaurant.com/wp-content/uploads/2022/02/about-us-bg.jpg"
    },
    {
        title: "Chilaquiles",
        description: "Wheat flour, levain, wholewheat flour, sunflower seeds, black sesame, salt",
        price: "€13.50",
        image: "https://warikerestaurant.com/wp-content/uploads/2022/02/about-us-bg.jpg"
    },
    {
        title: "Scrambled Eggs",
        description: "Wheat flour, levain, wholewheat flour, sunflower seeds, black sesame, salt",
        price: "€13.50",
        image: "https://warikerestaurant.com/wp-content/uploads/2022/02/about-us-bg.jpg"
    }
];

const styles = StyleSheet.create({
    menuItemStyles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    },

    descriptionStyle: {
        color: "gray",
        marginVertical: 12
    },

    priceStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "green"
    }
});

export default function MenuItem({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: {
            ... item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue
        }
    });

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title == food.title && item.restaurantName == restaurantName));

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}>
        {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyles}>
                    <BouncyCheckbox
                        iconStyle={{borderRadius: 5}}
                        fillColor="green"
                        onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked={isFoodInCart(food,cartItems)}
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
            </View>
        ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{width: 200, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={styles.descriptionStyle}>{props.food.description}</Text>
        <Text style={styles.priceStyle}>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 80, borderRadius: 8}} />
    </View>
);