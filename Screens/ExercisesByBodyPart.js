import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCard from "../Components/CustomCard";
import { Image } from "react-native";

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

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.bodyPart}>{capitalizeFirst(bodyPart)}</Text>
      <ScrollView>
        {allExercises?.map((set, index) => {
          return (
            <CustomCard key={index} cardStyle={styles.cardStyle}>
              <Image source={{ uri: set.gifUrl }} style={styles.imgStyle} />
              <View style={styles.details}>
                <Text style={styles.name}>{set.name.toUpperCase()}</Text>
                <Text>Equipment :{capitalizeFirst(set.equipment)}</Text>
                <Text>Target Muscles: {capitalizeFirst(set.target)}</Text>
              </View>
            </CustomCard>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExercisesByBodyPart;

const styles = StyleSheet.create({
  bodyPart: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imgStyle: {
    height: 150,
    width: 150,
  },
  name: {
    textAlign: "center",
    marginBottom: 10,
  },
  details: {
    width: "50%",
    padding: 5,
  },
});
