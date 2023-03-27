import { StyleSheet, View } from "react-native";
import React from "react";

const CustomCard = ({ children, cardStyle }) => {
  return <View style={[styles.container, cardStyle]}>{children}</View>;
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.4,
    backgroundColor: "white",
    borderColor: "#667085",
    shadowColor: "#1C6BA4B5",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 20,
  },
});
