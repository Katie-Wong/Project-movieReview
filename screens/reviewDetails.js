import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

// {navigation} pass data from home.js
export default function ReviewDetails({ navigation }) {
 
    // rating will be a string from a number originally
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            {/* Card is a function component from card.js to style sth */}
            <Card>

            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>

            <View style={styles.rating}>
            <Text>Our rating:  </Text>
            {/* images.ratings are defined in global.js */}
            <Image source={images.ratings[rating]}/>
            </View>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: 'red',
    }
})
