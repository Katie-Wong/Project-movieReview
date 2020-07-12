import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Button,
  Modal,
} from "react-native";
// FlatList, TouchableOpacity can also be imported like this
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Roman Holiday", rating: 5, body: "Romance", key: "1" },
    { title: "Sex and the City", rating: 4, body: "Comedy", key: "2" },
    { title: "Wonder Woman", rating: 3, body: "Epic", key: "3" },
  ]);

const addReview = (review) => {

    review.key = Math.random().toString();

    setReviews( (currentReview) => {
        // review is written in front to be shown on top of currentReview
        return [review, ...currentReview]  
    });
    setModalOpen(false); // to close the modal
}

  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        name="add"
        size={50}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <Modal visible={modalOpen} animationType="slide">
        {/* This one doesn't work:    */}
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>  */}
        {/* These work to invoke Keyboard.dismiss only after pressing, use one of these:    */}
        {/* <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>  */}
        {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>    */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
      
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={50}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
        {/* Card is a function component from card.js to style sth */}
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 30,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
