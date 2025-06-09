import { Recipe } from '../types';

export function filterRecipes(recipes: Recipe[], query: string): Recipe[] {
  const lower = query.toLowerCase();
  return recipes.filter(r => r.name.toLowerCase().includes(lower));
}
