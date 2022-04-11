import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Pressable,
  Linking,
} from "react-native";
import { Card } from "react-native-shadow-cards";

export default function Yatırımfırsatları({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [galenVisible, setGalenVisible] = useState(false);
  const [wellVisible, setWellVisible] = useState(false);
  const [taekVisible, setTaekVisible] = useState(false);
  const [eduVisible, setEduVisible] = useState(false);
  const [triVisible, setTriVisible] = useState(false);
  const [disVisible, setDisVisible] = useState(false);
  const [damatVisible, setDamatVisible] = useState(false);
  const [fenerVisible, setFenerVisible] = useState(false);
  const [hatayVisible, setHatayVisibşe] = useState(false);
  const [leafVisible, setLeafVisible] = useState(false);
  const [gozVisible, setGozVisible] = useState(false);
  return (
    <ScrollView>
      {/* code altsirketler */}
      <View style={styles.MainView}>
        {/*leaf  */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/leaf.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={leafVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setLeafVisible(!leafVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/leaf.jpg")}
                  style={styles.subImage}
                ></Image>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@code17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/Leafdoner.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setLeafVisible(!leafVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setLeafVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* damat */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/tween.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={damatVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setDamatVisible(!damatVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/tween.jpg")}
                  style={styles.subImage}
                ></Image>

                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@code17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/damat-tween.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setDamatVisible(!damatVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setDamatVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* traibation */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/tribation.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={triVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setTriVisible(!triVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/tribation.jpg")}
                  style={styles.subImage}
                ></Image>

                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@code17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/tribation.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setTriVisible(!triVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setTriVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* code17 */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/code17logo.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/code17logo.jpg")}
                  style={{
                    width: "90%",
                    height: "30%",
                    margin: 3,
                    borderRadius: 70,
                    flexDirection: "column",
                  }}
                ></Image>
                <Text style={styles.modalText}>
                  Code17, kurumsal firmalara yurt dışında markalaşma
                  süreçlerinde yazılım desteği ve danışmanlık hizmeti sunar.
                </Text>

                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@code17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/Code17.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/*göztepe  */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/gozbeyaz.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={gozVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setGozVisible(!gozVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/gozbeyaz.jpg")}
                  style={styles.subImage}
                ></Image>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/sporokullari.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setGozVisible(!gozVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setGozVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* fener */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/fener.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={fenerVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setFenerVisible(!fenerVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/fener.jpg")}
                  style={styles.subImage}
                ></Image>

                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/sporokullari.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setFenerVisible(!fenerVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setFenerVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/*hatayspor  */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/hatbeyaz.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={hatayVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setHatayVisibşe(!hatayVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/hatbeyaz.jpg")}
                  style={styles.subImage}
                ></Image>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/sporokullari.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setHatayVisibşe(!hatayVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setHatayVisibşe(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* education */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/educationlogo.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={eduVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setEduVisible(!eduVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/educationlogo.jpg")}
                  style={styles.subImage}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan World17 Education, yurt dışı
                  eğitim ve vize danışmalığı hizmeti verir.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/world17_education_katalog.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setEduVisible(!eduVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setEduVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>

        {/* well altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/wellnesslogo.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={wellVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setWellVisible(!wellVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/wellnesslogo.jpg")}
                  style={styles.subImage}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan Wellness17, sağlık turizmi
                  alanında hizmetler sunar.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/wellness17.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setWellVisible(!wellVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setWellVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* galen altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/galenlogo.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={galenVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setGalenVisible(!galenVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/galenlogo.jpg")}
                  style={styles.subImage}
                ></Image>
                <Text style={styles.modalText}>
                  Galen17, Türkiye'de üretilen zeytinyağı ve zeytin türevi
                  organik ürünlerin Amerika ve Avrupa kıtasında ihracatını
                  yapar.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@galen17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/Galen17.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setGalenVisible(!galenVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setGalenVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* taek */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/cagrikizil.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={taekVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setTaekVisible(!taekVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/cagrikizil.jpg")}
                  style={styles.subImage}
                ></Image>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/taekwando.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setTaekVisible(!taekVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setTaekVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>

        {/* disgrey altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/disgrey.jpg")}
            style={styles.mainImage}
          ></Image>
        </Card>
        <Card style={styles.subCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={disVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setDisVisible(!disVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/disgrey.jpg")}
                  style={styles.subImage}
                ></Image>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/disgrey.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setDisVisible(!disVisible)}
                >
                  <Text style={styles.cikis}> Çıkış </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setDisVisible(true)}>
            <Text style={styles.textintoCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  emailbutton: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "rgb(32,151,190)",
    color: "white",
    paddingHorizontal: 4,
  },
  pdfbutton: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 20,
  },
  textintoCard: { fontSize: 25, color: "white" },
  subCard: {
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(32,151,190)",
    marginBottom: 25,
    marginTop: 10,
  },
  subImage: {
    width: "100%",
    height: "40%",
    margin: 3,
    borderRadius: 70,
    flexDirection: "column",
  },
  mainImage: {
    width: 332,
    height: 226,
    margin: 3,
    borderRadius: 70,
    flexDirection: "column",
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
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "80%",
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 70,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 21,
  },
  buttonClose: {
    backgroundColor: "rgb(32,151,190)",
  },
  cikis: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  fakebutton: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 20,
  },
  fakebuttonClose: {
    backgroundColor: "#424242",
  },
  fakecikis: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 20,
  },
});
