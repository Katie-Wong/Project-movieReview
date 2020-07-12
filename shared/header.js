//header.js replaces the default headers of createStackNavigator of homeStack and aboutStack
import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }){

    const openMenu = () => {
        navigation.openDrawer()
    }
    
    return(
        <ImageBackground source={require('../assets/camera.png')} style={styles.header}>
            <MaterialIcons name="menu" size={20} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
            <Image source={require("../assets/kissOne.jpeg")} style={styles.headerImage} />
            <Text style={styles.headerText}>{ title }</Text>
            {/* Below hard coded the title     */}
            {/* <Text style={styles.headerText}>Movies Unlimited</Text> */}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        // this new header will occupy 100% of the header set in homeStack and aboutStack
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cyan'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'crimson',
        letterSpacing: 1 
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 50,
        height: 38,
        marginHorizontal: 12
    }

});