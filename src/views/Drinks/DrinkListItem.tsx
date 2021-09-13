
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image, StyleSheet, Text,
  TouchableOpacity,
  View
} from "react-native";
import { Colors } from "../../theme";
import { useDimensionsImage } from "../../theme/Dimensions";

interface DrinkListItem {
  id: string;
  name: string;
  picture: string;
}

interface DrinkListItemProps {
  drink: DrinkListItem;
}

const DrinkListItem = ({ drink }: DrinkListItemProps) => {
  const navigation = useNavigation();
  const { width, height } = useDimensionsImage(15, 0.65);
  const { name, picture, id } = drink;
  const onPress = () => navigation.push("DrinkDetail", { item: drink });
  return (
    <TouchableOpacity
      key={id}
      onPress={onPress}
      style={styles.cardContainer}>
      <Image
        style={{ ...styles.image, width, height }}
        source={{ uri: picture }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  textContainer: {
    padding: 15,
    backgroundColor: Colors.primary_light,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  image: {
    backgroundColor: "#9C9C9C",
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    color: "white",
  },

});

export default React.memo(DrinkListItem);