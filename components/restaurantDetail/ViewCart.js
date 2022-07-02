import React, {useState} from 'react'
import { TouchableOpacity, Modal } from 'react-native'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import OrderItem from './OrderItem';
import firebase from '../../firebase';

export default function ViewCart() {
    const [modalVisibile, setModalVisible] = useState(false);

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

    const total = items.map((item => Number(item.price.replace('€', '')))).reduce((prev, curr) => prev + curr, 0);
    const totalEUR = total.toLocaleString("en", {
        style: "currency",
        currency: "EUR"
    });



    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 450,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: 'center',
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10
        },

        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            marginTop: 15
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 1
        }
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Total</Text>
                            <Text>{totalEUR}</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <TouchableOpacity
                                style={{marginTop: 20, backgroundColor: "green", alignItems: "center", padding: 13, borderRadius: 30, width: 300, position: "relative"}}
                                onPress={() => {addOrderToFirebase();}}    
                            >
                                <Text style={{fontSize: 20, color: "white", fontWeight: "600"}}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
    <>
        <Modal
            animationType='slide' visible={modalVisibile} transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
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
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Order Now  ({totalEUR})</Text>
                </TouchableOpacity>
            </View>
        </View>)
        : (<></>)}
    </>
    )
}
