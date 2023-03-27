import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CustomCard from "../Components/CustomCard";
import BMICalculator from "../Components/BMICalculator";
import { ApiContext } from "../Context/ApiContext";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { getListOfBodyParts } = useContext(ApiContext);
  const [refresh, setRefresh] = useState(false);
  const [bodyPartsList, setBodyPartsList] = useState(null);
  const navigation = useNavigation();

  const BodyPartsListCall = async () => {
    const list = await getListOfBodyParts();
    setBodyPartsList(list);
  };

  useEffect(() => {
    BodyPartsListCall();
  }, []);

  const pullToRefreshHandler = async () => {
    setRefresh(true);
    BodyPartsListCall();
    setRefresh(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderStyle}>
        <Pressable>
          <Image
            source={require("../assets/favicon.png")}
            style={{ height: 28, width: 28 }}
          />
        </Pressable>
        <Text style={{ marginLeft: 10 }}>Home Workout</Text>
      </View>
      <BMICalculator />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullToRefreshHandler()}
          />
        }
      >
        {bodyPartsList?.map((item) => {
          return (
            <CustomCard key={item}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ExercisesByBodyPart", {
                    bodypart: item,
                  })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 20, color: "#0325ad" }}>
                      {item.toUpperCase()}
                    </Text>
                    <Text style={{ fontSize: 20 }}>2/23</Text>
                    <Text style={{ fontSize: 16 }}>comp/total</Text>
                  </View>
                  <Image
                    source={require("../assets/favicon.png")}
                    style={{ height: 80, width: 90 }}
                  />
                </View>
              </TouchableOpacity>
            </CustomCard>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  HeaderStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
