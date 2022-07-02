import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';

export default function ViewCart() {
const items = useSelector((state) => state.cartReducer.selectedItems.items);
const total = items.map((item => Number(item.price.replace('€', '')))).reduce((prev, curr) => prev + curr, 0);
const totalEUR = total.toLocaleString("en", {
    style: "currency",
    currency: "EUR"
});

console.log(totalEUR);

    return (
    <>
        {total ? (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 275,
                zIndex: 999
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: 'green',
                        alignItems: 'center',
                        padding: 13,
                        borderRadius: 5,
                        width: 350,
                        position: 'relative'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Order Cart  ({totalEUR})</Text>
                </TouchableOpacity>
            </View>
        </View>)
        : (<></>)}
    </>
    )
}
