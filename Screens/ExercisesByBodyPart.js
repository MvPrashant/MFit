import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";

const ExercisesByBodyPart = ({ route }) => {
  const bodyPart = route?.params?.bodypart;
  console.log(bodyPart);
  const { getExerciseByBodyParts } = useContext(ApiContext);
  const [refresh, setRefresh] = useState(false);
  const [allExercises, setAllExercises] = useState(null);
  console.log("allExercises", allExercises);

  const getExercises = async () => {
    const list = await getExerciseByBodyParts(bodyPart);
    setAllExercises(list);
  };

  useEffect(() => {
    getExercises();
  }, []);

  //   const pullToRefreshHandler = async () => {
  //     setRefresh(true);
  //     getExercises();
  //     setRefresh(false);
  //   };
  return (
    <View>
      <Text>ExercisesByBodyPart</Text>
    </View>
  );
};

export default ExercisesByBodyPart;

const styles = StyleSheet.create({});
