export interface IngredientSection {
  title: string;
  items: string[];
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string; // For the punny names
  description: string;
  image: string; // URL to image
  ingredients: IngredientSection[];
  colorTheme: string; // Tailwind color class for accents
}

export interface Note {
  title: string;
  content: string;
}
