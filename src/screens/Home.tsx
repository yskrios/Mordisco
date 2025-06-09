import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Recipe } from '../types';
import RECIPES from '../data/recipes.json';
import { RecipeCard } from '../components/RecipeCard';
import { SearchBar } from '../components/SearchBar';
import { filterRecipes } from '../utils/filterRecipes';
import { loadFavorites, saveFavorites } from '../utils/localStorage';
import { RootStackParamList } from './types';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites().then(setFavorites);
  }, []);

  const data = filterRecipes(RECIPES as Recipe[], query);

  const toggleFavorite = (recipe: Recipe) => {
    const exists = favorites.find(r => r.id === recipe.id);
    const updated = exists
      ? favorites.filter(r => r.id !== recipe.id)
      : [...favorites, recipe];
    setFavorites(updated);
    saveFavorites(updated);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar query={query} onChange={setQuery} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            favorite={!!favorites.find(r => r.id === item.id)}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
};
