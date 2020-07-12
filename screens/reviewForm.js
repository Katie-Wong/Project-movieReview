import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ActionSheetIOS,
} from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button.js";

// This can be written here or inside the function component
const reviewSchema = yup.object({
  // dictate what error messages to give out
  title: yup.string().required().min(2),
  body: yup.string().required().min(2),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

// ReviewForm to be put in home.js as modal, addReview is passed from home.js.
export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        // onSubmit to update values which is one object containing values of title, body, rating
        onSubmit={(values, actions) => {
          actions.resetForm(); // to reset the form
          addReview(values);
          //   console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review movie title"
              onChangeText={props.handleChange("title")} // built in
              value={props.values.title} // double binding the values
              onBlur={props.handleBlur("title")} // To show real-time validation error
            />
            {/* print error message from yup */}
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={180}
              style={globalStyles.input}
              placeholder="Review comment"
              onChangeText={props.handleChange("body")} // built in
              value={props.values.body}
              onBlur={props.handleBlur("body")} // To show real-time validation error
            />
            {/* print error message from yup */}
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")} // bulit in
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")} // To show real-time validation error
            />
            {/* print error message from yup */}
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            {/* standard button */}
            {/* <Button
              title="submit"
              color="maroon"
              // handleSubmit trigger onSubmit as in above
              onPress={props.handleSubmit}
            />  */}

            {/* customed button, imported FlatButton from button.js */}
            {/* handleSubmit trigger onSubmit as in above, it is now passed to FlatButton in button.js */}
            <FlatButton text="fast submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
