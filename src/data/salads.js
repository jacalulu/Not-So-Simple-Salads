// Complete Salad Data Store

export const mealSalads = [
  {
    id: 'cauli-fornia-dreamin',
    title: "Cauli-fornia Dreamin'",
    serves: "2-3",
    time: "30 mins",
    headnote: "This was the salad that started it all — the one I fell for at Google and immediately needed to reverse-engineer. All the textures, that citrus dressing, but the crispy capers are what put it completely over the top.",
    saladIngredients: [
      { item: "Roasted cauliflower", note: "" },
      { item: "Castelvetrano olives", note: "" },
      { item: "Parmesan cheese", note: "shaved" },
      { item: "Fennel", note: "shaved" },
      { item: "Arugula", note: "" },
      { item: "Quinoa", note: "" },
      { item: "Crispy capers", note: "" },
      { item: "Grilled chicken", note: "" }
    ],
    dressingName: "Citrus Vinaigrette",
    dressingIngredients: [
      { item: "¾ cup", name: "orange juice" },
      { item: "3 Tbsp", name: "olive oil" },
      { item: "3 Tbsp", name: "lemon juice (1 lemon)" },
      { item: "1½ Tbsp", name: "lime juice (1 lime)" },
      { item: "1 tsp", name: "honey" },
      { item: "1 tsp", name: "red wine vinegar" },
      { item: "½ tsp", name: "kosher salt" },
      { item: "½ tsp", name: "chili pepper flakes" },
      { item: "Pinch", name: "ground white pepper" },
      { item: "1 clove", name: "garlic, grated" }
    ],
    isLab: false
  },
  {
    id: 'noodle-me-this',
    title: "Noodle Me This",
    serves: "2-3",
    time: "25 mins",
    headnote: "I love Korean food, and a salad with kimchi in it was just such a fun punch-up for a hearty lunch. The kimchi brings heat, funk, and acidity all at once. Cold noodles, bold dressing, zero apologies.",
    saladIngredients: [
      { item: "Soba noodles", note: "" },
      { item: "Cabbage", note: "" },
      { item: "Spinach", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Carrots", note: "" },
      { item: "Kimchi", note: "" }
    ],
    dressingName: "Ginger Soy Miso",
    dressingIngredients: [
      { item: "1½ Tbsp", name: "miso paste" },
      { item: "2 Tbsp", name: "rice vinegar" },
      { item: "1¼ Tbsp", name: "honey" },
      { item: "1 Tbsp", name: "fresh ginger, grated" },
      { item: "1 Tbsp", name: "sesame oil" },
      { item: "1½ tsp", name: "lime juice" },
      { item: "1 tsp", name: "roasted sesame seeds" },
      { item: "1 tsp", name: "black sesame seeds" },
      { item: "1 tsp", name: "Korean chili flakes" }
    ],
    isLab: false
  },
  {
    id: 'banh-mi-over',
    title: "Banh Mi Over",
    serves: "2",
    time: "35 mins",
    headnote: "Everything I love about a banh mi, deconstructed into a bowl. The pickled vegetables are essential — surprisingly easy to make at home. The marinade does the heavy lifting on the chicken.",
    saladIngredients: [
      { item: "Radish", note: "" },
      { item: "Pickled carrot", note: "julienned" },
      { item: "Pickled cucumber", note: "" },
      { item: "Cilantro", note: "" },
      { item: "Chicken", note: "marinated" },
      { item: "Green onion", note: "" },
      { item: "Romaine lettuce", note: "" }
    ],
    dressingName: "Soy Miso",
    dressingIngredients: [
      { item: "2 tsp", name: "coconut sugar" },
      { item: "1 tsp", name: "white miso" },
      { item: "½", name: "lime, juiced" },
      { item: "1 Tbsp", name: "rice wine vinegar" },
      { item: "3 Tbsp", name: "grapeseed oil" },
      { item: "1 tsp", name: "sesame oil" }
    ],
    isLab: true
  },
  {
    id: 'keep-cobb-and-carry-on',
    title: "Keep Cobb and Carry On",
    serves: "2-3",
    time: "25 mins",
    headnote: "The Cobb is my OG hearty salad. This version pairs it with a vinaigrette instead of the usual ranch or blue cheese dressing — that's non-negotiable for me. The sautéed onions? From a tiny restaurant at the gateway to Yosemite.",
    saladIngredients: [
      { item: "Mixed greens", note: "" },
      { item: "Tomatoes", note: "diced" },
      { item: "Cucumber", note: "" },
      { item: "Hard boiled egg", note: "sliced" },
      { item: "Thick-cut bacon", note: "chopped" },
      { item: "Grilled chicken", note: "" },
      { item: "Avocado", note: "" },
      { item: "Blue cheese", note: "" },
      { item: "Sautéed white onion", note: "" }
    ],
    dressingName: "Greek Balsamic",
    dressingIngredients: [
      { item: "3 Tbsp", name: "balsamic vinegar" },
      { item: "½ cup", name: "grapeseed oil" },
      { item: "½ tsp", name: "onion powder" },
      { item: "½ tsp", name: "garlic powder" },
      { item: "1 tsp", name: "dried oregano" },
      { item: "½ tsp", name: "dried mustard" },
      { item: "Maple syrup", name: "1 tsp" }
    ],
    isLab: true
  },
  {
    id: 'thaid-and-true',
    title: "Thai'd and True",
    serves: "2",
    time: "30 mins",
    headnote: "This one has a very special place in my heart. The cilantro stems in the dressing carry an absurd amount of punch. Don't throw them away. Slice flank steak against the grain.",
    saladIngredients: [
      { item: "Red pepper", note: "" },
      { item: "Spinach", note: "" },
      { item: "Red onion", note: "" },
      { item: "Cherry tomatoes", note: "" },
      { item: "Fresh cilantro", note: "" },
      { item: "Fresh mint", note: "" },
      { item: "Flank steak", note: "thin slice" }
    ],
    dressingName: "Nam Jim",
    dressingIngredients: [
      { item: "2 Tbsp", name: "fish sauce" },
      { item: "1½", name: "limes, juiced" },
      { item: "1 Tbsp", name: "grapeseed oil" },
      { item: "2½ tsp", name: "white sugar" },
      { item: "1", name: "thai chili" },
      { item: "Half bunch", name: "Cilantro stems" },
      { item: "1 clove", name: "garlic" }
    ],
    isLab: false
  },
  {
    id: 'nicoise-to-meet-you',
    title: "Niçoise To Meet You, Where You Bean?",
    serves: "2",
    time: "35 mins",
    headnote: "This salad feels like summer lunches in Silicon Valley — elevated yet approachable. The caper berries are the real note here. The sesame-chili crust on the tuna is my addition to the classic.",
    saladIngredients: [
      { item: "Caper berries", note: "" },
      { item: "Cherry tomatoes", note: "" },
      { item: "Boiled potatoes", note: "" },
      { item: "Blanched green beans", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Red onion", note: "" },
      { item: "Hard boiled egg", note: "" },
      { item: "Mixed greens", note: "" },
      { item: "Seared ahi tuna", note: "" }
    ],
    dressingName: "Lemon Dijon",
    dressingIngredients: [
      { item: "1", name: "lemon, juiced" },
      { item: "4 Tbsp", name: "extra virgin olive oil" },
      { item: "1 clove", name: "garlic, grated" },
      { item: "1 tsp", name: "Dijon mustard" },
      { item: "¼ tsp", name: "honey" }
    ],
    isLab: false
  },
  {
    id: 'greek-expectations',
    title: "Greek Expectations",
    serves: "2-3",
    time: "20 mins",
    headnote: "I literally got myself through most of university with this salad. It's my version of comfort food at this point. Grill the shrimp — don't skip that step. The dressing is sharp and oregano-forward.",
    saladIngredients: [
      { item: "Romaine lettuce", note: "" },
      { item: "Red pepper", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Red onion", note: "" },
      { item: "Kalamata olives", note: "" },
      { item: "Feta cheese", note: "" },
      { item: "Tomatoes", note: "" },
      { item: "Grilled shrimp", note: "" }
    ],
    dressingName: "Greek Vinaigrette",
    dressingIngredients: [
      { item: "¼ cup", name: "extra-virgin olive oil" },
      { item: "3 Tbsp", name: "red wine vinegar" },
      { item: "1 clove", name: "garlic, grated" },
      { item: "1 Tbsp", name: "dried oregano" },
      { item: "½ tsp", name: "Dijon mustard" }
    ],
    isLab: false
  },
  {
    id: 'romaine-calm',
    title: "Romaine Calm: Caesar's Got a Flame",
    serves: "2",
    time: "30 mins",
    headnote: "I've never loved Caesar salad. Crazy. And yet — when you grill romaine, something genuinely magical happens. It transforms. If you thought a caterpillar turning into a butterfly was something, try this.",
    saladIngredients: [
      { item: "Grilled romaine hearts", note: "" },
      { item: "Bacon", note: "" },
      { item: "Homemade croutons", note: "" },
      { item: "Parmesan cheese", note: "" }
    ],
    dressingName: "Caesar",
    dressingIngredients: [
      { item: "2", name: "egg yolks" },
      { item: "4", name: "anchovy fillets, minced" },
      { item: "1 clove", name: "garlic, grated" },
      { item: "2 Tbsp", name: "fresh lemon juice" },
      { item: "1 tsp", name: "Dijon mustard" },
      { item: "1 tsp", name: "Worcestershire sauce" },
      { item: "½ cup", name: "olive oil" },
      { item: "¼ cup", name: "grapeseed oil" },
      { item: "¼ cup", name: "finely grated Parmesan" }
    ],
    isLab: true
  },
  {
    id: 'winner-winner-wonton',
    title: "Winner, Winner, Wonton Dinner",
    serves: "2-3",
    time: "20 mins",
    headnote: "I've always felt like this salad was almost too simple, too green — and then I make it and walk away feeling happy and refreshed every single time. The dressing is the real hero here.",
    saladIngredients: [
      { item: "Romaine lettuce", note: "" },
      { item: "Slivered almonds", note: "" },
      { item: "Edamame", note: "" },
      { item: "Wonton crisps", note: "" },
      { item: "Sesame seeds", note: "" },
      { item: "Shredded chicken", note: "" },
      { item: "Cucumber", note: "" }
    ],
    dressingName: "Sesame Soy",
    dressingIngredients: [
      { item: "2 Tbsp", name: "toasted sesame oil" },
      { item: "2 Tbsp", name: "olive oil" },
      { item: "2 Tbsp", name: "soy sauce" },
      { item: "3 Tbsp", name: "rice vinegar" },
      { item: "1½ Tbsp", name: "pure maple syrup" },
      { item: "2 cloves", name: "garlic, minced" },
      { item: "1 Tbsp", name: "freshly minced ginger" }
    ],
    isLab: false
  },
  {
    id: 'thai-me-a-river',
    title: "Thai Me a River (of Peanut Sauce)",
    serves: "2-3",
    time: "25 mins",
    headnote: "This is my love language in salad form. A chopped salad with that sauce and those ingredients is just so delicious — it hits every note. I firmly believe peanut sauce makes everything better.",
    saladIngredients: [
      { item: "Edamame", note: "" },
      { item: "Shaved carrots", note: "" },
      { item: "Cilantro", note: "" },
      { item: "Red pepper", note: "" },
      { item: "Peanuts", note: "" },
      { item: "Green onions", note: "" },
      { item: "Mango", note: "" },
      { item: "Shredded chicken", note: "" },
      { item: "Green cabbage", note: "" }
    ],
    dressingName: "Peanut",
    dressingIngredients: [
      { item: "¼ cup", name: "creamy peanut butter" },
      { item: "3 Tbsp", name: "rice vinegar" },
      { item: "2 Tbsp", name: "soy sauce" },
      { item: "2 Tbsp", name: "honey" },
      { item: "1", name: "lime, juiced" },
      { item: "1 Tbsp", name: "fresh ginger, grated" },
      { item: "1 tsp", name: "sesame oil" },
      { item: "2 cloves", name: "garlic, grated" }
    ],
    isLab: false
  },
  {
    id: 'salmon-situation',
    title: "The Salmon Situation",
    serves: "2",
    time: "25 mins",
    headnote: "This came together because I had a fridge full of randomly abandoned breakfast-adjacent ingredients and needed to do something about it. The result was this. Lock it in.",
    saladIngredients: [
      { item: "Smoked salmon", note: "" },
      { item: "Baked salmon", note: "" },
      { item: "Cherry tomatoes", note: "" },
      { item: "Red onion", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Avocado", note: "" },
      { item: "Capers", note: "" },
      { item: "Arugula", note: "" },
      { item: "Green leaf lettuce", note: "" }
    ],
    dressingName: "French Vinaigrette",
    dressingIngredients: [
      { item: "1", name: "shallot, chopped" },
      { item: "¼ cup", name: "champagne vinegar" },
      { item: "4 tsp", name: "Dijon mustard" },
      { item: "½ cup", name: "extra virgin olive oil" }
    ],
    isLab: false
  },
  {
    id: 'packn-pasta',
    title: "Pack'n Pasta",
    serves: "3-4",
    time: "30 mins",
    headnote: "I literally hike through the Yosemite backcountry with this in my backpack. A legit crowd-pleaser every time, on or off the trail. The preserved lemon dressing makes people look mildly shocked.",
    saladIngredients: [
      { item: "Grilled artichokes", note: "" },
      { item: "Kalamata olives", note: "" },
      { item: "Mini mozzarella balls", note: "" },
      { item: "Red pepper", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Cherry tomatoes", note: "halved" },
      { item: "Red onion", note: "" },
      { item: "Arugula", note: "sparse" },
      { item: "Cooked pasta", note: "" }
    ],
    dressingName: "Preserved Lemon",
    dressingIngredients: [
      { item: "1", name: "preserved lemon rind" },
      { item: "2 tsp", name: "dried oregano" },
      { item: "2 Tbsp", name: "fresh lemon juice" },
      { item: "5 Tbsp", name: "olive oil" },
      { item: "½ tsp", name: "black pepper" },
      { item: "½ tsp", name: "salt" }
    ],
    isLab: true
  }
];

export const lighterSalads = [
  {
    id: 'bacon-me-crazy',
    title: "Bacon Me Crazy",
    serves: "1-2",
    time: "15 mins",
    headnote: "Love me that runny fried egg. The whole premise here is that the yolk breaks and becomes part of the dressing — it's the reason the dressing itself is so minimal. The egg is not optional.",
    saladIngredients: [
      { item: "Spinach", note: "" },
      { item: "Iceberg lettuce", note: "" },
      { item: "Red onion", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Avocado", note: "" },
      { item: "Cherry tomatoes", note: "" },
      { item: "Millionaire's bacon", note: "" }
    ],
    dressingName: "Simple (Yolk)",
    dressingIngredients: [
      { item: "2 Tbsp", name: "rice vinegar" },
      { item: "4 Tbsp", name: "EVO oil" },
      { item: "½ tsp", name: "Maldon salt flakes" },
      { item: "Top with", name: "Runny fried egg" }
    ],
    isLab: true
  },
  {
    id: 'salad-days',
    title: "Salad Days and Sunny Ways",
    serves: "1-2",
    time: "20 mins",
    headnote: "Blanched asparagus doesn't get enough love and I'm here to change that. Pair it with prosciutto and a runny egg and you have a perfect plate.",
    saladIngredients: [
      { item: "Prosciutto", note: "" },
      { item: "Frisee lettuce", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Red onion", note: "" },
      { item: "Radish", note: "" },
      { item: "Tomatoes", note: "" },
      { item: "Blanched asparagus", note: "" }
    ],
    dressingName: "Simple (Yolk)",
    dressingIngredients: [
      { item: "2 Tbsp", name: "champagne vinegar" },
      { item: "4 Tbsp", name: "grapeseed oil" },
      { item: "½ tsp", name: "Momofuku Tingly Salt" },
      { item: "1 tsp", name: "maple syrup" },
      { item: "Top with", name: "Runny fried egg" }
    ],
    isLab: true
  },
  {
    id: 'caprese-edit',
    title: "The Caprese Edit",
    serves: "2",
    time: "10 mins",
    headnote: "Three ingredients. No hiding. Wait for peak tomato season — a magnificent heirloom in August will make this one of the best things you eat all summer.",
    saladIngredients: [
      { item: "Heirloom tomatoes", note: "sliced" },
      { item: "Fresh mozzarella", note: "" },
      { item: "Fresh basil", note: "" }
    ],
    dressingName: "No Measure",
    dressingIngredients: [
      { item: "Generous", name: "best olive oil you own" },
      { item: "Drizzle", name: "balsamic reduction" },
      { item: "To taste", name: "Flaked sea salt" }
    ],
    isLab: false
  },
  {
    id: 'couscous',
    title: "For the Love of Couscous",
    serves: "3-4",
    time: "25 mins",
    headnote: "I used to forget that couscous could anchor a salad. This salad is a tribute to a dinner party. The watermelon radish is here for flavor and also because it's beautiful.",
    saladIngredients: [
      { item: "Tricolor couscous", note: "" },
      { item: "Watermelon radish", note: "sliced" },
      { item: "Cherry tomatoes", note: "quartered" },
      { item: "Cucumber", note: "" },
      { item: "Fresh dill and mint", note: "" },
      { item: "Feta", note: "" },
      { item: "Kalamata olives", note: "" },
      { item: "Fennel", note: "" },
      { item: "Arugula", note: "" }
    ],
    dressingName: "Shallot Fennel",
    dressingIngredients: [
      { item: "4 Tbsp", name: "olive oil" },
      { item: "2 Tbsp", name: "fresh lemon juice" },
      { item: "1 tsp", name: "maple syrup" },
      { item: "1 tsp", name: "Dijon mustard" },
      { item: "1 clove", name: "garlic, grated" },
      { item: "1", name: "shallot, chopped" },
      { item: "2 Tbsp", name: "fennel fronds, chopped" }
    ],
    isLab: true
  },
  {
    id: 'water-fire-feta',
    title: "Water, Fire...and Feta!",
    serves: "2-3",
    time: "10 mins",
    headnote: "Summer. California. Flavors that contrast in the best way possible. The Korean chili flakes turn this from a sweet fruit salad into something with actual heat.",
    saladIngredients: [
      { item: "Watermelon", note: "" },
      { item: "Mint", note: "" },
      { item: "Feta", note: "" },
      { item: "Red onion", note: "" },
      { item: "Cucumber", note: "peeled" }
    ],
    dressingName: "Lime & Chili",
    dressingIngredients: [
      { item: "¼ cup", name: "extra-virgin olive oil" },
      { item: "2", name: "limes, juiced" },
      { item: "Pinch", name: "kosher salt" },
      { item: "To taste", name: "Korean chili flakes" }
    ],
    isLab: false
  },
  {
    id: 'zest-coast',
    title: "Zest Coast Salad",
    serves: "2-3",
    time: "15 mins",
    headnote: "This is the newest one I'm playing with. The days are warm and I need more salads that scream 'fun light party in my mouth.' Tajín on fruit is one of those things that once you start, you cannot stop.",
    saladIngredients: [
      { item: "Watermelon", note: "" },
      { item: "Cucumber", note: "" },
      { item: "Pineapple", note: "" },
      { item: "Mango", note: "" },
      { item: "Chopped cilantro", note: "" },
      { item: "Cotija cheese", note: "" }
    ],
    dressingName: "Citrus Tajín",
    dressingIngredients: [
      { item: "1", name: "lemon, juiced" },
      { item: "1", name: "lime, juiced" },
      { item: "1", name: "lime, zest of" },
      { item: "2 Tbsp", name: "honey" },
      { item: "1 tsp", name: "Tajín" }
    ],
    isLab: false
  }
];
