

import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface NBRightComponentProps {
  onPress: () => {};
  icon: string;
}

const NBRightComponent = ({ onPress, icon }: NBRightComponentProps) => {
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
  icon: { marginRight: 10 },
});

export default NBRightComponent;