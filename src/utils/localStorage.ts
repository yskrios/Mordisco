import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types';

const FAVORITES_KEY = 'favorites';

export async function loadFavorites(): Promise<Recipe[]> {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveFavorites(favorites: Recipe[]): Promise<void> {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
