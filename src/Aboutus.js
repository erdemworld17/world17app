import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


export default function Aboutus({ navigation }) {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <Text style={styles.textView}>World17, Kanada merkezli bir yatırım danışmanlığı ve markalaşma şirketidir. Kurulduğu 2015 yılından itibaren birçok firmanın uluslararası ölçekte hizmet vermesine katkı sağlamıştır. Sahip olduğu alt şirketleri ile tek elden birçok alanda hizmet veren World17, altıncı yaşında World17 Group olarak yeniden yapılanmıştır. Yıllar içinde Kanada ve Türkiye ile sınırlı kalmamış ve global arenada Singapur, İngiltere ve Amerika Birleşik Devletleri’nde ofisler açmıştır. World17 Group; bünyesindeki nitelikli çözüm ortakları, genç ve dinamik ekibi ile birlikte her geçen gün büyümeye devam etmektedir.  2020 yılı itibariyle 9.8 milyon Kanada doları (CAD) marka değerine ulaşmış durumdadır.</Text>
        <Text style={styles.textView}>World17 Group, yeni nesil yapılaşma anlayışı ve bünyesindeki şirketler ile birlikte büyümeyi ilke haline getirmiştir. Şirket vizyonumuz, bünyesine her faaliyet alanından şirketi ekleyerek küresel çapta “piyasa yapıcı” olmaktır. Şirket misyonumuz ise Türkiye’de veya diğer ülkelerde kendi faaliyet alanında başarılı olmuş, vizyonu yurt dışına açılmaya uygun olan şirketlerin faaliyetlerini Kanada başta olmak üzere tüm dünyaya taşımak ve sürdürebilmelerine yardımcı olmaktır. World17 Group olarak danışmanlık verdiğimiz şirketlerin uluslararası ticareti için gerekli hukuki ve fiili altyapıyı hazırlamaktayız. Faaliyet gösterilen ülke dışına ürün ve hizmet ihracatı, gümrük işlemleri, ülkelerin farklılık gösterebilen yasal prosedürleri karmaşık ve riskli olabilmektedir. Bu bağlamda işletmelere kurulum süreci, hukuki prosedürler, risk analizi, pazara giriş, iş geliştirme, tanıtım faaliyetleri, sosyal medya ve insan kaynakları konularında yardımcı olmaktayız.</Text>
        <Text style={styles.textView}>Kanada’da bir şirketin rakiplerine kıyasla fark yaratacağı, maliyet avantajını kullanarak katma değer üreteceği, kalitesi ile öne çıkacağı bir markalaşma süreci başlatmaktayız. Bu bağlamda Türkiye’de ya da diğer ülkelerde bulunan marka imajının hedef pazarda da geliştirilmesi için çalışmaktayız. Hizmet verdiğimiz şirketlerin markalaşmasına önem verdiğimiz ölçüde, Kanada’da Türkiye’nin ve Türk lirasının markalaşmasını da görev bilincinde yerine getiriyoruz.</Text>
      </ScrollView>





    </View>
  );
}
const styles = StyleSheet.create({
  textView: {
    fontSize: 25,
    fontStyle: "italic",
    borderRadius: 5,
    color: "white",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 20
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(32,151,190)"
  }
})