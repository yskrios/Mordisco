export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string;
  category?: string;
}
