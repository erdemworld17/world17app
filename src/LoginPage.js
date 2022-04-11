import React from 'react';
import { StyleSheet, } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LoginPage({ navigation }) {
  return (

    <WebView source={{ uri: "https://crm.world17.ca/admin" }} style={styles.webfiev}></WebView>
  );
}
const styles = StyleSheet.create({
  webfiev: {
    justifyContent: 'center', 
    alignItems: 'center' 
  }

})
