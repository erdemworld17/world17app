import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  PixelRatio,
  Linking,
  ScrollView,
  Image,
  Button,
  Pressable,
} from "react-native";
// NavBar
import { Card } from "react-native-shadow-cards";

export default function AltSirketler({ navigation }) {
  //Modals
  const [modalVisible, setModalVisible] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);
  const [educateVisible, setEducateVisible] = useState(false);
  const [babylonVisible, setBabylonVisible] = useState(false);
  const [noVisible, setNoVisible] = useState(false);
  const [galenVisible, setGalenVisible] = useState(false);
  const [tourVisible, setTourVisible] = useState(false);
  const [wellVisible, setWellVisible] = useState(false);
  const [wtcVisible, setWtcVisible] = useState(false);
  return (
    <ScrollView>
      <View style={styles.MainView}>
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
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={educateVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setEducateVisible(!educateVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/educationlogo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan World17 Education, yurt dışı
                  eğitim ve vize danışmalığı hizmeti verir..
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL("mailto:info@world17education.ca")
                  }
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
                  onPress={() => setEducateVisible(!educateVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setEducateVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* Adworld */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/adworldlogo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={codeVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setCodeVisible(!codeVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/adworldlogo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan Adworld17, firmaların
                  markalaşma sürecinde kurumsal kimlik tasarımı, reklam filmi
                  çekimi, sosyal medya yönetimi hizmetleri sunar.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:cagdas@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/en/samples/magazine/pdf/World17_Group_Brochure.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setCodeVisible(!codeVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setCodeVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* code 17 */}
        <Card style={styles.topCard}>
          <Image
            source={require("../img/code17logo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>

        <Card style={styles.mainCard}>
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
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan Code17, kurumsal firmalara
                  yurt dışında markalaşma süreçlerinde yazılım desteği ve
                  danışmanlık hizmeti sunar.
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
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* no altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/no17logo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={noVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setNoVisible(!noVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/no17logo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan No17, firmalara veya
                  sahışlara iç mekan tasarımı hizmeti sunar.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:gamze@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/No17.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setNoVisible(!noVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setNoVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* babylon altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/baylonlogo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={babylonVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setBabylonVisible(!babylonVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/baylonlogo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  Babylon Translation Office Kurumsal evrakların tercümesi,
                  geliştirilen uygulamaların, web sitelerin tercümesi ve hedef
                  pazara yönelik yerelleştirme hizmetleri sunar.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto:info@babylon17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/en/samples/magazine/pdf/World17_Group_Brochure.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setBabylonVisible(!babylonVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setBabylonVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
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
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
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
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  Galen17, Türkiye'de üretilenvzeytinyağı ve zeytin türevi
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
                      "https://brochure.world17.ca/en/samples/magazine/pdf/World17_Group_Brochure.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setGalenVisible(!galenVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setGalenVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* tours altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/tourslogo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={tourVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setTourVisible(!tourVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/tourslogo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Group şirketlerinden olan World17 Tours kurumsal
                  firmalar ya da dernekler için yurt dışında iş gezileri ve fuar
                  turları düzenler.
                </Text>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() => Linking.openURL("mailto: info@world17.ca")}
                >
                  <Text style={styles.fakecikis}> E-Mail </Text>
                </Pressable>
                <Pressable
                  style={[styles.fakebutton, styles.fakebuttonClose]}
                  onPress={() =>
                    Linking.openURL(
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/World17Tours.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setTourVisible(!tourVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setTourVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
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
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
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
                  style={styles.subimageSpec}
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
                      "https://brochure.world17.ca/en/samples/magazine/pdf/World17_Group_Brochure.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setWellVisible(!wellVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setWellVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
        {/* trade altsirketler */}
        <Card
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../img/WTClogo.jpg")}
            style={styles.imageSpec}
          ></Image>
        </Card>
        <Card style={styles.mainCard}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={wtcVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setWtcVisible(!wtcVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require("../img/WTClogo.jpg")}
                  style={styles.subimageSpec}
                ></Image>
                <Text style={styles.modalText}>
                  World17 Trade Center, Türkiye ve Kanada merkezli firmaların
                  ürünlerine yeni pazarlar bulma, pazar araştırması yapma,
                  ürünlerin ithalat ve ihracatı konusunda firmalara danışmalık
                  hizmeti sunar.
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
                      "https://brochure.world17.ca/TR/samples/magazine/pdf/World17TradeCenter.pdf"
                    )
                  }
                >
                  <Text style={styles.fakecikis}> PDF </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setWtcVisible(!wtcVisible)}
                >
                  <Text style={styles.cikis}>Çıkış</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setWtcVisible(true)}>
            <Text style={styles.textCard}>Detaylı bilgi için tıklayın</Text>
          </Pressable>
        </Card>
      </View>
    </ScrollView>
  );
}
var IMAGE_SPEC = "110%";

if (PixelRatio.get() == 2) {
  IMAGE_SPEC = "100%";
}
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fakebutton: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 10,
  },
  fakebuttonClose: {
    backgroundColor: "#424242",
  },
  fakecikis: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  topCard: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mainCard: {
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(32,151,190)",
    marginBottom: 25,
    marginTop: 10,
  },
  textCard: {
    fontSize: 25,
    color: "white",
  },
  imageSpec: {
    width: 332,
    height: 226,
    margin: 3,
    borderRadius: 70,
    flexDirection: "column",
  },
  subimageSpec: {
    width: IMAGE_SPEC,
    height: "30%",
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
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 2,
    marginTop: 10,
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
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
