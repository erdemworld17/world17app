import React, { useState } from "react";
import { Card } from "react-native-shadow-cards";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  PixelRatio,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// ******************** Image Source

const bambi = require("../img/bambi.jpg");
const atlas = require("../img/atlas.jpg");
const kocuniversitesi = require("../img/kocuni.jpg");
const brock = require("../img/brock.jpg");
const fenerbahce = require("../img/fb.jpg");
const tribation = require("../img/tribation.jpg");
const cagrikiziltaek = require("../img/cagrikizil.jpg");
const disgrey = require("../img/disgrey.jpg");
const DSDamat = require("../img/DSdamat.jpg");
const Cayman = require("../img/cayman.jpg");
const ebury = require("../img/ebury.jpg");
const forterie = require("../img/forterie.jpg");
const goztepe = require("../img/goztepe.jpg");
const guvenhastanesi = require("../img/guven.jpg");
const hatayexpo = require("../img/hatayexpo.jpg");
const hataysporklubu = require("../img/hatayspor.jpg");
const isbankasi = require("../img/isbank.jpg");
const jakemans = require("../img/jakemans.jpg");
const kilim = require("../img/kilim.jpg");
const caremimarlik = require("../img/care.jpg");
const loft = require("../img/loft.jpg");
const leafdoner = require("../img/leaf.jpg");
const mbot = require("../img/mbot.jpg");
const markamutfagi = require("../img/marka.jpg");
const medicinehospital = require("../img/medicine.jpg");
const sickkids = require("../img/skids.jpg");
const orkaholding = require("../img/orka.jpg");
const penti = require("../img/penti.jpg");
const progroup = require("../img/progrup.jpg");
const simitcidunyasi = require("../img/simitci.jpg");
const damattween = require("../img/tween.jpg");
const stamper = require("../img/stamper.jpg");
const internationalLanguage = require("../img/iac.jpg");
const iefcon = require("../img/icon.jpg");
const icnn = require("../img/ice.jpg");
const nisantasiuniversitesi = require("../img/nuni.jpg");

// ----------------Image Source

export default function Referanslar({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.MainViewreferans}>
        <Card style={styles.cardViewTop}>
          <Image source={bambi} style={styles.imageViewMargin}></Image>
        </Card>
        <Card style={styles.cardViewTopBelow}>
          <Image source={atlas} style={styles.imageViewnoMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.mainCardView}>
          <Image
            source={kocuniversitesi}
            style={styles.imageViewMargin}
          ></Image>
        </Card>
        <Card style={styles.nomargincardView}>
          <Image source={brock} style={styles.imageViewnoMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.mainCardView}>
          <Image source={fenerbahce} style={styles.imageViewMargin}></Image>
        </Card>
        <Card style={styles.nomargincardView}>
          <Image source={tribation} style={styles.imageViewnoMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.mainCardView}>
          <Image source={cagrikiziltaek} style={styles.imageViewMargin}></Image>
        </Card>
        <Card style={styles.nomargincardView}>
          <Image source={disgrey} style={styles.imageViewnoMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={DSDamat} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={Cayman} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={ebury} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={forterie} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={goztepe} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={guvenhastanesi} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={hatayexpo} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={hataysporklubu} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={isbankasi} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={jakemans} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={kilim} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={caremimarlik} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={loft} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={leafdoner} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={mbot} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={markamutfagi} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image
            source={medicinehospital}
            style={styles.imageViewnoMargin}
          ></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={sickkids} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={orkaholding} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={penti} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={progroup} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={simitcidunyasi} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image source={damattween} style={styles.imageViewnoMargin}></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={stamper} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image
            source={internationalLanguage}
            style={styles.imageViewnoMargin}
          ></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={iefcon} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
      <View style={styles.MainViewreferans}>
        <Card style={styles.nomargincardView}>
          <Image
            source={icnn}
            style={styles.imageViewnoMargin}
          ></Image>
        </Card>
        <Card style={styles.mainCardView}>
          <Image source={nisantasiuniversitesi} style={styles.imageViewMargin}></Image>
        </Card>
      </View>
    </ScrollView>
  );
}

// Pixel Ratio
var CARD_HEIGHT = 100;

if (PixelRatio.get() == 2) {
  CARD_HEIGHT = 300;
}
const styles = StyleSheet.create({
  imageViewMargin: {
    width: 180,
    height: 123,
    margin: 3,
    flexDirection: "column",
  },
  imageViewnoMargin: {
    width: 180,
    height: 123,
    margin: 3,
    flexDirection: "column",
  },
  mainCardView: {
    marginTop: 50,
    width: "36%",
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  nomargincardView: {
    marginTop: 50,
    marginLeft: 5,
    width: "36%",
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cardViewTop: {
    marginTop: 20,
    width: "36%",
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cardViewTopBelow: {
    marginTop: 20,
    marginLeft: 5,
    width: "36%",
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  MainViewreferans: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  MainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: 'green',
  },
  centeredView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    height: "50%",
  },
  modalView: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "40%",
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 30,
  },
  buttonClose: {
    backgroundColor: "rgb(32,151,190)",
  },
  cikis: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
  },
});
