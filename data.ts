import { Recipe, Note } from './types';

// Helper to generate optimized Google Drive image URLs
// w1200 is a good balance between quality for retina screens and file size
const getDriveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const appNotes: Note[] = [
  {
    title: "Some notes on pepper",
    content: "I use 2 different types of black pepper - fresh ground, and powdered. I specify which to use for each dressing. I also use white pepper powder for some dressings as well. Lastly, I'm a big fan of Gochugaru, which is Korean coarse chili flakes."
  },
  {
    title: "Some notes on salt",
    content: "I always use kosher salt. Unless I use Maldon flaked salt. I will specify which one to use."
  },
  {
    title: "Julienning",
    content: "I often julienne my vegetables. I do this using a really sharp knife - but you can of course use a mandoline if you have one."
  },
  {
    title: "Fresh ingredients",
    content: "I always use fresh ingredients: lemons, limes, ginger, garlic. That said, I know that this takes more time - so if you're in a pinch, pre-prepared ingredients will suffice."
  }
];

export const recipes: Recipe[] = [
  {
    id: 'nicoise',
    title: "Niçoise To Meet You",
    subtitle: "Where You Bean?",
    description: "A fresh take on the classic French Riviera staple, featuring seared ahi tuna and crisp vegetables.",
    colorTheme: "green-600",
    image: getDriveImage("1dEqYhHTz8IqLnbUtBDHRLVMOunFCD0hy"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Caper berries",
          "Cherry tomatoes",
          "Boiled potatoes",
          "Blanched green beans",
          "Cucumber",
          "Red onion",
          "Hard boiled egg",
          "Mixed greens",
          "Seared ahi tuna"
        ]
      },
      {
        title: "Dressing",
        items: [
          "1 lemon, juiced",
          "4 Tbsp extra virgin olive oil",
          "1 garlic clove, grated",
          "Pinch of salt",
          "1 tsp Dijon mustard",
          "Pinch of black pepper",
          "¼ tsp honey"
        ]
      },
      {
        title: "Ahi Tuna Rub",
        items: [
          "Sesame seeds",
          "Black sesame seeds",
          "Korean chili flakes",
          "Flaked salt"
        ]
      }
    ]
  },
  {
    id: 'thai',
    title: "Thai'd and True",
    subtitle: "A Spicy Steak Salad",
    description: "Bold flavors collide in this steak salad featuring fresh herbs and a fish sauce vinaigrette.",
    colorTheme: "emerald-600",
    image: getDriveImage("1Ec0TeLgM8k7aPuVn6BWwmDBXkALpIjBu"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Red pepper",
          "Spinach",
          "Red onion",
          "Cherry tomatoes",
          "Fresh Cilantro",
          "Fresh Mint",
          "Flank steak"
        ]
      },
      {
        title: "Dressing: Greek Balsamic",
        items: [
          "2 Tbsp Fish sauce",
          "1.5 limes, juiced",
          "1 Tbsp grapeseed oil",
          "2.5 tsp white sugar",
          "1 thai chili",
          "Cilantro stems - half a bunch",
          "Pinch of salt",
          "White pepper",
          "1 garlic clove"
        ]
      },
      {
        title: "Flank Steak Marinade",
        items: [
          "Soy sauce",
          "Garlic",
          "Ginger",
          "Red chili paste"
        ]
      }
    ]
  },
  {
    id: 'cobb',
    title: "Keep Cobb and Carry On",
    subtitle: "The Classic, Elevated",
    description: "Hearty, rich, and satisfying. The ultimate lunch salad with blue cheese and thick cut bacon.",
    colorTheme: "lime-600",
    image: getDriveImage("1byufOGqJyW5FM9reweTjjXCXHAbouI01"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Mixed greens",
          "Tomatoes - diced",
          "Cucumber",
          "Hard boiled egg - sliced",
          "Thick cut bacon - chopped",
          "Grilled chicken",
          "Avocado",
          "Blue cheese",
          "Sauteed white onion"
        ]
      },
      {
        title: "Dressing: Greek Balsamic",
        items: [
          "Balsamic vinegar",
          "Onion powder",
          "Garlic powder",
          "Dried mustard",
          "Grapeseed oil",
          "Dried oregano",
          "Salt",
          "Black Pepper",
          "Maple Syrup"
        ]
      }
    ]
  },
  {
    id: 'banhmi',
    title: "Banh Mi Over",
    subtitle: "Vietnamese Inspired",
    description: "Crunchy, pickled vegetables meet savory marinated chicken in this fresh bowl.",
    colorTheme: "green-700",
    image: getDriveImage("1LKGBdLHMmVOHU2KxXDEzHWHyoASASk7s"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Radish",
          "Pickled carrot",
          "Pickled cucumber",
          "Cilantro",
          "Chicken (marinated in fish sauce, lime juice, garlic, jalapeno)",
          "Green onion",
          "Romaine lettuce"
        ]
      },
      {
        title: "Dressing: Soy Miso",
        items: [
          "2 tsp sugar (coconut)",
          "1 tsp white miso",
          "½ lime",
          "1 Tbsp rice wine vinegar",
          "3 Tbsp grape-seed oil",
          "1 tsp sesame oil"
        ]
      }
    ]
  },
  {
    id: 'noodle',
    title: "Noodle Me This",
    subtitle: "Soba & Spice",
    description: "A cold noodle salad that packs a punch with kimchi and ginger soy dressing.",
    colorTheme: "teal-600",
    image: getDriveImage("1dHJEaTSDMgg9rbMVWWOQ232G8EVad42j"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Soba noodles",
          "Cabbage",
          "Spinach",
          "Cucumber",
          "Carrots",
          "Kimchi"
        ]
      },
      {
        title: "Dressing: Ginger Soy Miso",
        items: [
          "1 ½ Tbsp miso paste",
          "2 Tbsp rice vinegar",
          "1 ¼ Tbsp honey",
          "1 Tbsp fresh ginger",
          "1 Tbsp sesame oil",
          "1 ½ tsp lime juice",
          "1 tsp roasted sesame seeds",
          "1 tsp black sesame seeds",
          "1 tsp korean chili flakes"
        ]
      }
    ]
  },
  {
    id: 'cauliflower',
    title: "Cauli-fornia Dreamin'",
    subtitle: "Roasted & Rustic",
    description: "Nutty roasted cauliflower pairs with bright citrus vinaigrette and salty capers.",
    colorTheme: "olive-600",
    image: getDriveImage("1cC9O_d3g57QnwYp-QB22IESHiaeJoP7u"),
    ingredients: [
      {
        title: "Salad Ingredients",
        items: [
          "Roasted cauliflower",
          "Castelvetrano olives",
          "Parmesan cheese",
          "Shaved Fennel",
          "Arugula",
          "Quinoa",
          "Crispy capers",
          "Grilled chicken"
        ]
      },
      {
        title: "Dressing: Citrus Vinaigrette",
        items: [
          "¾ cup orange juice",
          "3 Tbsp olive oil",
          "3 Tbsp lemon juice (1 lemon)",
          "1 ½ Tbsp lime juice (1 lime)",
          "1 tsp honey",
          "1 tsp red wine vinegar",
          "½ tsp salt",
          "½ tsp chili pepper flakes",
          "Pinch of ground white pepper",
          "1 Garlic clove, grated"
        ]
      }
    ]
  }
];