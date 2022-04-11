
import React from 'react';
import { StyleSheet, View, Text }from 'react-native';

export default class CalcDisplay extends React.Component {

  static defaultProps = {
    display: "",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:  {  },
  display:    { fontSize: 30, color: "#2097be", textAlign: "right", },
})