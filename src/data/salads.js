// Complete Salad Data Store

export const mealSalads = [
  {
    id: 'cauli-fornia-dreamin',
    title: "Cauli-fornia Dreamin'",
    serves: "2-3",
    time: "30 mins",
    headnote: "This was the salad that started it all — the one I fell for at Google and immediately needed to reverse-engineer. All the textures, that citrus dressing, but the crispy capers are what put it completely over the top.",
    manifestoQuote: "Texture is the difference between a meal and a chore.",
    saladIngredients: [
      { item: "Roasted cauliflower", note: "~ generous amount" },
      { item: "Castelvetrano olives", note: "~ 1/4 cup" },
      { item: "Parmesan cheese", note: "shaved" },
      { item: "Fennel", note: "shaved" },
      { item: "Arugula", note: "~ 2 big handfuls" },
      { item: "Quinoa", note: "~ 1 cup cooked" },
      { item: "Crispy capers", note: "~ 1/4 cup" },
      { item: "Grilled chicken", note: "~ 1 serving" }
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
    componentRecipe: {
      title: "Za'atar Chicken Marinade",
      ingredients: [
        { item: "1 tbsp", name: "za'atar" },
        { item: "1 tsp", name: "kosher salt" },
        { item: "2 tbsp", name: "olive oil" },
        { item: "1 clove", name: "garlic, grated" },
        { item: "Squeeze", name: "of lemon" }
      ],
      method: "Combine and coat chicken. Marinate at least 30 mins, up to overnight. Grill or pan-sear over medium-high heat."
    },
    isLab: false
  },
  {
    id: 'noodle-me-this',
    title: "Noodle Me This",
    serves: "2-3",
    time: "25 mins",
    headnote: "I love Korean food, and a salad with kimchi in it was just such a fun punch-up for a hearty lunch. The kimchi brings heat, funk, and acidity all at once. Cold noodles, bold dressing, zero apologies.",
    manifestoQuote: "Eat vegetables like you're plotting revenge.",
    saladIngredients: [
      { item: "Soba noodles", note: "~ 1 cup cooked" },
      { item: "Cabbage", note: "~ 2 big handfuls" },
      { item: "Spinach", note: "~ 2 big handfuls" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Carrots", note: "~ 1 cup" },
      { item: "Kimchi", note: "~ generous amount" }
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
    manifestoQuote: "We don't do limp lettuce here. We do high-fashion horticulture.",
    saladIngredients: [
      { item: "Radish", note: "~ 1 cup" },
      { item: "Pickled carrot", note: "julienned" },
      { item: "Pickled cucumber", note: "~ 1 cup" },
      { item: "Cilantro", note: "~ 1 handful" },
      { item: "Chicken", note: "marinated" },
      { item: "Green onion", note: "~ 1/4 cup" },
      { item: "Romaine lettuce", note: "~ 2 big handfuls" }
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
    componentRecipe: {
      title: "Quick Pickled Carrots & Cucumber",
      ingredients: [
        { item: "1 cup", name: "carrots, julienned" },
        { item: "1 cup", name: "cucumber, julienned or thinly sliced" },
        { item: "½ cup", name: "rice vinegar" },
        { item: "½ cup", name: "water" },
        { item: "1½ tbsp", name: "sugar" },
        { item: "1 tsp", name: "salt" },
        { item: "1", name: "fresh jalapeño, thinly sliced (optional)" },
        { item: "1 tsp", name: "whole Sichuan peppercorns, lightly toasted in a dry pan (Sichuan version)" }
      ],
      method: "Bring vinegar, water, sugar, and salt to a boil, stirring until dissolved. Remove from heat. Pack vegetables (and jalapeño or Sichuan peppercorns if using) tightly into a jar. Pour hot brine over the top. Cool to room temperature, then refrigerate at least 30 minutes before serving. Best after 2 hours. Keeps for 2 weeks. A note on Sichuan peppercorns: don't expect heat — expect a floral, citrusy tingle that builds slowly. They're one of the most interesting things in your spice pantry and wildly underused in Western cooking."
    },
    isLab: true
  },
  {
    id: 'keep-cobb-and-carry-on',
    title: "Keep Cobb and Carry On",
    serves: "2-3",
    time: "25 mins",
    headnote: "The Cobb is my OG hearty salad. This version pairs it with a vinaigrette instead of the usual ranch or blue cheese dressing — that's non-negotiable for me. The sautéed onions? From a tiny restaurant at the gateway to Yosemite.",
    manifestoQuote: "If a salad doesn't crunch, it's just a sad smoothie.",
    saladIngredients: [
      { item: "Mixed greens", note: "~ 2 big handfuls" },
      { item: "Tomatoes", note: "diced" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Hard boiled egg", note: "sliced" },
      { item: "Thick-cut bacon", note: "chopped" },
      { item: "Grilled chicken", note: "~ 1 serving" },
      { item: "Avocado", note: "~ 1 whole" },
      { item: "Blue cheese", note: "~ 1/2 cup" },
      { item: "Sautéed white onion", note: "~ 1/4 cup" }
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
    manifestoQuote: "Croutons are pedestrian. Frizzled shallots are non-negotiable.",
    saladIngredients: [
      { item: "Red pepper", note: "~ 1 cup" },
      { item: "Spinach", note: "~ 2 big handfuls" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Cherry tomatoes", note: "~ 1 cup" },
      { item: "Fresh cilantro", note: "~ 1 handful" },
      { item: "Fresh mint", note: "~ 1 handful" },
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
    componentRecipe: {
      title: "Ginger Soy Steak Marinade",
      ingredients: [
        { item: "3 tbsp", name: "soy sauce" },
        { item: "1 tbsp", name: "gochujang (Korean chili paste)" },
        { item: "2 tbsp", name: "Shaoxing wine" },
        { item: "1", name: "lime, juiced" },
        { item: "1 tbsp", name: "fresh ginger, grated (be generous)" },
        { item: "3 cloves", name: "garlic, grated" },
        { item: "½ tsp", name: "white pepper" }
      ],
      method: "Whisk together and pour over flank steak. Marinate minimum 1 hour, ideally 4 or overnight. Grill or sear over high heat, then rest 5 minutes before slicing against the grain."
    },
    isLab: false
  },
  {
    id: 'nicoise-to-meet-you',
    title: "Niçoise To Meet You, Where You Bean?",
    serves: "2",
    time: "35 mins",
    headnote: "This salad feels like summer lunches in Silicon Valley — elevated yet approachable. The caper berries are the real note here. The sesame-chili crust on the tuna is my addition to the classic.",
    manifestoQuote: "Dress your greens better than you dress yourself.",
    saladIngredients: [
      { item: "Caper berries", note: "~ generous amount" },
      { item: "Cherry tomatoes", note: "~ 1 cup" },
      { item: "Boiled potatoes", note: "~ generous amount" },
      { item: "Blanched green beans", note: "~ generous amount" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Hard boiled egg", note: "~ 2 eggs" },
      { item: "Mixed greens", note: "~ 2 big handfuls" },
      { item: "Seared ahi tuna", note: "~ 1 serving" }
    ],
    dressingName: "Lemon Dijon",
    dressingIngredients: [
      { item: "1", name: "lemon, juiced" },
      { item: "4 Tbsp", name: "extra virgin olive oil" },
      { item: "1 clove", name: "garlic, grated" },
      { item: "1 tsp", name: "Dijon mustard" },
      { item: "¼ tsp", name: "honey" }
    ],
    componentRecipe: {
      title: "Sesame & Gochugaru Tuna Rub",
      ingredients: [
        { item: "1 tbsp", name: "white sesame seeds" },
        { item: "1 tbsp", name: "black sesame seeds" },
        { item: "1 tsp", name: "Korean chili flakes (gochugaru)" },
        { item: "½ tsp", name: "flaked sea salt" }
      ],
      method: "Pat the fish dry. Mix and press firmly onto both sides of ahi tuna. Sear in a very hot pan with a little oil — 60-90 seconds per side. Slice thin against the grain."
    },
    isLab: false
  },
  {
    id: 'greek-expectations',
    title: "Greek Expectations",
    serves: "2-3",
    time: "20 mins",
    headnote: "I literally got myself through most of university with this salad. It's my version of comfort food at this point. Grill the shrimp — don't skip that step. The dressing is sharp and oregano-forward.",
    manifestoQuote: "A naked leaf is an unfulfilled promise.",
    saladIngredients: [
      { item: "Romaine lettuce", note: "~ 2 big handfuls" },
      { item: "Red pepper", note: "~ 1 cup" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Kalamata olives", note: "~ 1/4 cup" },
      { item: "Feta cheese", note: "~ 1/2 cup" },
      { item: "Tomatoes", note: "~ 1 cup" },
      { item: "Grilled shrimp", note: "~ generous amount" }
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
    manifestoQuote: "Your fork is a weapon. Choose your ingredients wisely.",
    saladIngredients: [
      { item: "Grilled romaine hearts", note: "~ generous amount" },
      { item: "Bacon", note: "~ 1 serving" },
      { item: "Homemade croutons", note: "~ generous amount" },
      { item: "Parmesan cheese", note: "~ 1/2 cup" }
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
    componentRecipe: {
      title: "Homemade Croutons",
      ingredients: [
        { item: "3 cups", name: "sourdough or crusty bread, torn into rough chunks" },
        { item: "3 tbsp", name: "good olive oil" },
        { item: "1 tbsp", name: "fresh oregano, roughly chopped" },
        { item: "½ tsp", name: "fresh cracked black pepper" },
        { item: "½ tsp", name: "celery salt (optional but recommended)" },
        { item: "Pinch", name: "of flaked sea salt" }
      ],
      method: "Preheat oven to 375°F. Toss bread chunks with olive oil, oregano, pepper, and celery salt until evenly coated. Spread on a baking sheet in a single layer. Bake 12-15 minutes until deeply golden and crunchy, tossing once halfway through. Finish with flaked sea salt straight out of the oven. Make it your own — pick a personality: Bright — toss with lemon zest immediately out of the oven. Smoky — add ½ tsp smoked paprika before baking. Middle Eastern — swap oregano for za'atar. Extra — dust with finely grated Parmesan in the last 5 minutes and let it crisp up. They're your croutons. Commit to a personality."
    },
    isLab: true
  },
  {
    id: 'winner-winner-wonton',
    title: "Winner, Winner, Wonton Dinner",
    serves: "2-3",
    time: "20 mins",
    headnote: "I've always felt like this salad was almost too simple, too green — and then I make it and walk away feeling happy and refreshed every single time. The dressing is the real hero here.",
    manifestoQuote: "Boring salads are a moral failing.",
    saladIngredients: [
      { item: "Romaine lettuce", note: "~ 2 big handfuls" },
      { item: "Slivered almonds", note: "~ 1/4 cup" },
      { item: "Edamame", note: "~ generous amount" },
      { item: "Wonton crisps", note: "~ generous amount" },
      { item: "Sesame seeds", note: "~ 1/4 cup" },
      { item: "Shredded chicken", note: "~ 1 serving" },
      { item: "Cucumber", note: "~ 1 cup" }
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
    manifestoQuote: "This isn't diet food. This is an editorial spread.",
    saladIngredients: [
      { item: "Edamame", note: "~ generous amount" },
      { item: "Shaved carrots", note: "~ 1 cup" },
      { item: "Cilantro", note: "~ 1 handful" },
      { item: "Red pepper", note: "~ 1 cup" },
      { item: "Peanuts", note: "~ 1/4 cup" },
      { item: "Green onions", note: "~ 1/4 cup" },
      { item: "Mango", note: "~ 1 cup" },
      { item: "Shredded chicken", note: "~ 1 serving" },
      { item: "Green cabbage", note: "~ 2 big handfuls" }
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
    manifestoQuote: "More acid. More salt. More everything.",
    saladIngredients: [
      { item: "Smoked salmon", note: "~ 1 serving" },
      { item: "Baked salmon", note: "~ 1 serving" },
      { item: "Cherry tomatoes", note: "~ 1 cup" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Avocado", note: "~ 1 whole" },
      { item: "Capers", note: "~ 1/4 cup" },
      { item: "Arugula", note: "~ 2 big handfuls" },
      { item: "Green leaf lettuce", note: "~ 2 big handfuls" }
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
    manifestoQuote: "Leave the sad desk salads in the 2010s.",
    saladIngredients: [
      { item: "Grilled artichokes", note: "~ generous amount" },
      { item: "Kalamata olives", note: "~ 1/4 cup" },
      { item: "Mini mozzarella balls", note: "~ generous amount" },
      { item: "Red pepper", note: "~ 1 cup" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Cherry tomatoes", note: "halved" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Arugula", note: "sparse" },
      { item: "Cooked pasta", note: "~ 1 cup cooked" }
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
    video: "bacon-me-crazy-video.mp4",
    headnote: "Love me that runny fried egg. The whole premise here is that the yolk breaks and becomes part of the dressing — it's the reason the dressing itself is so minimal. The egg is not optional.",
    manifestoQuote: "Lettuce is merely a vehicle for aggressive flavor.",
    saladIngredients: [
      { item: "Spinach", note: "~ 2 big handfuls" },
      { item: "Iceberg lettuce", note: "~ 2 big handfuls" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Avocado", note: "~ 1 whole" },
      { item: "Cherry tomatoes", note: "~ 1 cup" },
      { item: "Millionaire's bacon", note: "~ 1 serving" }
    ],
    dressingName: "Simple (Yolk)",
    dressingIngredients: [
      { item: "2 Tbsp", name: "rice vinegar" },
      { item: "4 Tbsp", name: "EVO oil" },
      { item: "½ tsp", name: "Maldon salt flakes" },
      { item: "Top with", name: "Runny fried egg" }
    ],
    componentRecipe: {
      title: "Millionaire's Bacon",
      ingredients: [
        { item: "6 strips", name: "thick-cut bacon" },
        { item: "2 tbsp", name: "brown sugar" },
        { item: "1 tbsp", name: "maple syrup" },
        { item: "1 tsp", name: "Korean chili flakes (gochugaru)" },
        { item: "Pinch", name: "of flaked sea salt" }
      ],
      method: "Preheat oven to 400°F. Line a baking sheet with foil and place a wire rack on top. Mix brown sugar, maple syrup, and gochugaru together into a paste. Lay bacon strips on the rack and coat the tops generously with the glaze. Bake 18-22 minutes until deeply caramelized and sticky. Finish with a pinch of flaked sea salt. Let cool on the rack — it crisps up as it sits. Do not eat it all before it makes it to the salad."
    },
    isLab: true
  },
  {
    id: 'salad-days',
    title: "Salad Days and Sunny Ways",
    serves: "1-2",
    time: "20 mins",
    headnote: "Blanched asparagus doesn't get enough love and I'm here to change that. Pair it with prosciutto and a runny egg and you have a perfect plate.",
    manifestoQuote: "A good salad should make you sweat a little.",
    saladIngredients: [
      { item: "Prosciutto", note: "~ generous amount" },
      { item: "Frisee lettuce", note: "~ 2 big handfuls" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Red onion", note: "~ 1/4 cup" },
      { item: "Radish", note: "~ 1 cup" },
      { item: "Tomatoes", note: "~ 1 cup" },
      { item: "Blanched asparagus", note: "~ generous amount" }
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
    manifestoQuote: "Respect the crunch. Worship the acid.",
    saladIngredients: [
      { item: "Heirloom tomatoes", note: "sliced" },
      { item: "Fresh mozzarella", note: "~ generous amount" },
      { item: "Fresh basil", note: "~ 1 handful" }
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
    manifestoQuote: "If it doesn't stain your shirt, it's not dressed enough.",
    saladIngredients: [
      { item: "Tricolor couscous", note: "~ 1 cup cooked" },
      { item: "Watermelon radish", note: "sliced" },
      { item: "Cherry tomatoes", note: "quartered" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Fresh dill and mint", note: "~ 1 handful" },
      { item: "Feta", note: "~ 1/2 cup" },
      { item: "Kalamata olives", note: "~ 1/4 cup" },
      { item: "Fennel", note: "~ generous amount" },
      { item: "Arugula", note: "~ 2 big handfuls" }
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
    manifestoQuote: "Vegetables with an attitude problem.",
    saladIngredients: [
      { item: "Watermelon", note: "~ 1 cup" },
      { item: "Mint", note: "~ 1 handful" },
      { item: "Feta", note: "~ 1/2 cup" },
      { item: "Red onion", note: "~ 1/4 cup" },
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
    manifestoQuote: "Salad is a canvas; you are the tortured artist.",
    saladIngredients: [
      { item: "Watermelon", note: "~ 1 cup" },
      { item: "Cucumber", note: "~ 1 cup" },
      { item: "Pineapple", note: "~ 1 cup" },
      { item: "Mango", note: "~ 1 cup" },
      { item: "Chopped cilantro", note: "~ 1 handful" },
      { item: "Cotija cheese", note: "~ 1/2 cup" }
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
