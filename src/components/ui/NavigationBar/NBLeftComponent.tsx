
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface NBLeftComponentProps {
  onPress: () => {};
  icon: string;
}

const NBLeftComponent = ({ onPress, icon = "md-arrow-round-back" }: NBLeftComponentProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={icon}
          size={25}
          color={"white"}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { marginLeft: 10 },
});

export default NBLeftComponent;