
import { Divider, Row, Subtitle, View } from "@shoutem/ui";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import AutoHeightImage from 'react-native-auto-height-image';
import DrinkProvider from "../../providers/DrinkProvider";
import { useDimensionsImage } from "../../theme/Dimensions";
import { getArrayPropsDrink } from "../../utils/FormatDrink";

const DrinkDetail = ({ route, navigation }) => {
  const [drink, setDrink] = useState(null);
  const { name, picture, id } = route.params.item;
  const { width, height } = useDimensionsImage();

  useEffect(() => {
    DrinkProvider.getDrinkById({ id }).then(({ data, error }) => {
      if (data) {
        setDrink(data);
      }
    });
  }, [])

  const renderInformationItem = (title: string, subtitle: string | null) => (
    <View>
      {subtitle && <Row>
        <View styleName="vertical">
          <Subtitle>{title}</Subtitle>
          <Text>{subtitle}</Text>
        </View>
      </Row>}
      {subtitle && <Divider styleName="line" />}
    </View>
  )

  const ingredients = getArrayPropsDrink(drink, "strIngredient");
  const measures = getArrayPropsDrink(drink, "strMeasure");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <AutoHeightImage source={{ uri: picture }} width={width} />
        {drink && <View style={styles.textsContainer}>
          <Text style={styles.description}>{drink.strInstructions}</Text>
          {renderInformationItem("Alcohol", drink.strAlcoholic)}
          {renderInformationItem("Ingredients:", ingredients)}
          {renderInformationItem("Measures:", measures)}
        </View>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textsContainer: {
    flex: 1,
    paddingBottom: 15,
  },
  image: {
    backgroundColor: "#9C9C9C"
  },
  description: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    padding: 15,
  },
  body: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
  },
  date: {
    alignSelf: "flex-end",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#4A4A4A",
    fontSize: 16,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default DrinkDetail;