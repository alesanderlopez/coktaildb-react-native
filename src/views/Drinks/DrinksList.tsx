/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  StyleSheet, View
} from 'react-native';
import { NBRightComponent } from '../../components/ui/NavigationBar';
import DrinkListItem from './DrinkListItem';

const DrinksList = ({ navigation, drinkStore }) => {
  const { data, loading, error, toggleAction } = drinkStore;
  const items = data || [];

  useLayoutEffect(() => {
    const title = drinkStore.alcohol ? "Alcoholic Drinks" : "Non Alcoholic Drinks";
    const icon = drinkStore.alcohol ? "md-heart-dislike" : "md-heart";
    navigation.setOptions({
      title: title,
      headerRight: () => <NBRightComponent onPress={toggleAction} icon={icon} />
    });
  }, [navigation]);

  reaction(() => drinkStore.alcohol,
    () => {
      const title = drinkStore.alcohol ? "Alcoholic Drinks" : "Non Alcoholic Drinks";
      const icon = drinkStore.alcohol ? "md-heart-dislike" : "md-heart";
      navigation.setOptions({
        title: title,
        headerRight: () => <NBRightComponent onPress={toggleAction} icon={icon} />
      });
    }
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={items}
        refreshing={loading}
        renderItem={({ item }) => <DrinkListItem drink={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const DrinksListWrapped = inject("drinkStore")(observer(DrinksList));

export default DrinksListWrapped;
