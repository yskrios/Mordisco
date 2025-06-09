import { Recipe } from '../types';

export type RootStackParamList = {
  Home: undefined;
  RecipeDetail: { recipe: Recipe };
  Favorites: undefined;
};
