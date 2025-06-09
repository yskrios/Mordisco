import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  favorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

export const RecipeCard: React.FC<Props> = ({ recipe, favorite, onPress, onToggleFavorite }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={{ uri: recipe.image }} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title}>{recipe.name}</Text>
      <TouchableOpacity onPress={onToggleFavorite}>
        <Icon name={favorite ? 'star' : 'star-border'} size={24} color="gold" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
