import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

export type RecipeDetailProps = NativeStackScreenProps<RootStackParamList, 'RecipeDetail'>;

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <Text>- {item}</Text>}
      />
      <Text style={styles.subtitle}>Instructions</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
  },
});
