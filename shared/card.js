import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// children receivig all data from reviewDetails
export default function Card({ children }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
            { children }
            </View>
        </View>
    )
}

// or
// props and children receivig data from reviewDetails
// export default function Card(props) {
//     return (
//         <View style={styles.card}>
//             <View style={styles.cardContent}>
//             { props.children }
//             </View>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        backgroundColor: 'beige',
        shadowOffset: { width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10

    }
});
