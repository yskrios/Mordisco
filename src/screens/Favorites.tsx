import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loadFavorites, saveFavorites } from '../utils/localStorage';
import { Recipe } from '../types';
import { RecipeCard } from '../components/RecipeCard';
import { RootStackParamList } from './types';

export type FavoritesProps = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export const Favorites: React.FC<FavoritesProps> = ({ navigation }) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites().then(setFavorites);
  }, []);

  const removeFavorite = (recipe: Recipe) => {
    const updated = favorites.filter(r => r.id !== recipe.id);
    setFavorites(updated);
    saveFavorites(updated);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            favorite
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
            onToggleFavorite={() => removeFavorite(item)}
          />
        )}
      />
    </View>
  );
};
