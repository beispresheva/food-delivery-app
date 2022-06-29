import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'

export default function ViewCart() {
    return (
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
                    <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
