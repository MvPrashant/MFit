import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";

const textColor = "#ffffff";

const BMICalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [BMI, setBMI] = useState(null);

  console.log(BMI);

  const BMICalculator = () => {
    if (height && weight) {
      let bmi = weight / (height * height);
      setBMI(bmi);
    }
    return;
  };
  return (
    <CustomCard cardStyle={{ backgroundColor: "#33adff" }}>
      <Text
        style={{
          textAlign: "center",
          color: textColor,
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        Calculate Your BMI (Body Mass Index)
      </Text>

      <View style={styles.InputWrapperStyle}>
        <TextInput
          placeholder="Age "
          style={[styles.textInputStyle, { width: "95%" }]}
        />
      </View>

      <View style={styles.InputWrapperStyle}>
        <TextInput
          placeholder="Height (in M)"
          style={styles.textInputStyle}
          value={height}
          onChangeText={(val) => setHeight(val)}
        />
        <TextInput
          placeholder="Weight(in KG)"
          style={styles.textInputStyle}
          value={weight}
          onChangeText={(val) => setWeight(val)}
        />
      </View>
      <CustomButton title={"Submit"} onPress={BMICalculator} />
      {BMI && <Text style={styles.BMIStyle}>Your BMI : {BMI}</Text>}
    </CustomCard>
  );
};

export default BMICalculator;

const styles = StyleSheet.create({
  textInputStyle: {
    width: "45%",
    color: textColor,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  InputWrapperStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  BMIStyle: {
    textAlign: "center",
    color: textColor,
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
});
