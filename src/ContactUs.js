import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Button } from "react-native-paper";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ContactUs({}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <View style={styles.MainView}>
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/world17.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <View
          style={{
            margin: 25,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        ></View>
        <TouchableOpacity
          style={[styles.fakebutton, styles.fakebuttonClose]}
          onPress={() => Linking.openURL("tel:+16475003517")}
        >
          <Icon name="phone" size={42} style={styles.iconstyle} />
          <Text style={styles.fakecikis}>Kanada Ofis Telefon </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fakebutton, styles.fakebuttonClose]}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/QSxjWGEtTZ7pncLG9")
          }
        >
          <Image
            source={require("../img/canada.png")}
            style={styles.imageflag}
          ></Image>
          <Text style={styles.fakecikis}>Kanada Ofis Konum </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fakebutton, styles.fakebuttonClose]}
          onPress={() => Linking.openURL("tel:+902322427217")}
        >
          <Icon name="phone" size={42} style={styles.iconstyle} />
          <Text style={styles.fakecikis}>Türkiye Ofis Telefon </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fakebutton, styles.fakebuttonClose]}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/rgQGUAPM3XixjWdp7")
          }
        >
          <Image
            source={require("../img/turkey.jpg")}
            style={styles.imageflag}
          ></Image>
          <Text style={styles.fakecikis}>Türkiye Ofis Konum </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.fakebutton, styles.fakebuttonClose]}
          onPress={() => Linking.openURL("mailto:info@world17.ca")}
        >
          <Icon name="envelope" size={42} style={styles.iconstyle} />
          <Text style={styles.fakecikis}>Mail: info@world17.ca </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  fakecikis: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",
    fontSize: 18,
  },
  iconstyle: {
    width: 64,
    height: 42,
    color: "white",
  },
  fakebutton: {
    borderRadius: 10,
    paddingHorizontal: 70,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  fakebuttonClose: {
    backgroundColor: "#2097be",
  },
  imageSpec: {
    width: 332,
    height: 226,
    margin: 3,
    borderRadius: 70,
    flexDirection: "column",
  },

  imageflag: {
    width: 64,
    height: 42,
    flexDirection: "row",
    marginRight: 25,
  },
});
