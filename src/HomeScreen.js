import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Switch,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Hakkımızda")}
          style={styles.card}
        >
          <Text style={styles.header}> Hakkımızda </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressTanitim} style={styles.card}>
          <Text style={styles.header}> Broşür </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={onPressHandler} style={styles.card}>
          <Text style={styles.header}> World17 Tv </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Alt Şirketlerimiz")}
          style={styles.card}
        >
          <Text style={styles.header}> Alt Şirketler </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Referanslar")}
          style={styles.card}
        >
          <Text style={styles.header}> Referanslar </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Yatırım Fırsatları")}
          style={styles.card}
        >
          <Text style={styles.header}> Yatırım Fırsatları </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// onpress
const onPressHandler = () => {
  Linking.openURL("https://www.youtube.com/c/WORLD17");
};
const onPressTanitim = () => {
  Linking.openURL("https://brochure.world17.ca/TR/samples/magazine/index.html");
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgb(32,151,190)",
    justifyContent: "space-evenly",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "35%",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    //fontStyle: "italic",
    textAlign: "center",
    color: "black",
  },

  card: {
    borderRadius: 10,
    elevation: 12,
    backgroundColor: "white",
    shadowColor: "rgb(53,35,84)",
    shadowOpacity: 50,
    shadowRadius: 2,
    width: "45%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
