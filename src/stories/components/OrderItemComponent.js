import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";

class OrderItemComponent extends React.PureComponent {
  onTableClick = () => this.props.onTableClick(this.props.index);

  render() {
    const { tableNo } = this.props;
    return (
      <TouchableOpacity onPress={this.onTableClick}>
        <View style={styles.view}>
          <Text style={styles.text}>Table No {tableNo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    margin: 15,
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    justifyContent: "center",
    backgroundColor: "#afafaf",
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OrderItemComponent;