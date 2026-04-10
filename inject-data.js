import fs from 'fs';

let content = fs.readFileSync('src/data/salads.js', 'utf8');

const quotes = [
  "Texture is the difference between a meal and a chore.",
  "Eat vegetables like you're plotting revenge.",
  "We don't do limp lettuce here. We do high-fashion horticulture.",
  "If a salad doesn't crunch, it's just a sad smoothie.",
  "Croutons are pedestrian. Frizzled shallots are non-negotiable.",
  "Dress your greens better than you dress yourself.",
  "A naked leaf is an unfulfilled promise.",
  "Your fork is a weapon. Choose your ingredients wisely.",
  "Boring salads are a moral failing.",
  "This isn't diet food. This is an editorial spread.",
  "More acid. More salt. More everything.",
  "Leave the sad desk salads in the 2010s.",
  "Lettuce is merely a vehicle for aggressive flavor.",
  "A good salad should make you sweat a little.",
  "Respect the crunch. Worship the acid.",
  "If it doesn't stain your shirt, it's not dressed enough.",
  "Vegetables with an attitude problem.",
  "Salad is a canvas; you are the tortured artist."
];

let quoteIndex = 0;
// Inject manifestoQuote after headnote
content = content.replace(/(headnote: ".*?")(,)/g, (match, p1, p2) => {
  const quote = quotes[quoteIndex % quotes.length];
  quoteIndex++;
  return `${p1}${p2}\n    manifestoQuote: "${quote}",`;
});

// Safely inject quantities without touching the 'item' names
content = content.replace(/{ item: "(.*?)", note: "(.*?)" }/g, (match, itemStr, noteStr) => {
  // Only override if the note is empty
  if (noteStr.trim() !== "") {
    return match;
  }
  
  let qt = "~ to taste";
  const str = itemStr.toLowerCase();
  
  if (str.includes("lettuce") || str.includes("spinach") || str.includes("arugula") || str.includes("cabbage") || str.includes("greens") || str.includes("kale")) {
    qt = "~ 2 big handfuls";
  } else if (str.includes("cheese") || str.includes("feta") || str.includes("parmesan") || str.includes("blue cheese")) {
    qt = "~ 1/2 cup";
  } else if (str.includes("olive") || str.includes("capers") || str.includes("seeds") || str.includes("almonds") || str.includes("nuts") || str.includes("peanuts") || str.includes("onion")) {
    qt = "~ 1/4 cup";
  } else if (str.includes("tomato") || str.includes("cucumber") || str.includes("carrot") || str.includes("radish") || str.includes("pepper")) {
    qt = "~ 1 cup";
  } else if (str.includes("chicken") || str.includes("bacon") || str.includes("steak") || str.includes("salmon") || str.includes("tuna") || str.includes("tofu") || str.includes("salami")) {
    qt = "~ 1 serving";
  } else if (str.includes("noodle") || str.includes("pasta") || str.includes("couscous") || str.includes("quinoa")) {
    qt = "~ 1 cup cooked";
  } else if (str.includes("mint") || str.includes("cilantro") || str.includes("basil") || str.includes("dill")) {
    qt = "~ 1 handful";
  } else if (str.includes("egg")) {
    qt = "~ 2 eggs";
  } else if (str.includes("avocado")) {
    qt = "~ 1 whole";
  } else if (str.includes("apple") || str.includes("mango") || str.includes("watermelon") || str.includes("pineapple")) {
    qt = "~ 1 cup";
  } else {
    qt = "~ generous amount";
  }

  return `{ item: "${itemStr}", note: "${qt}" }`;
});

fs.writeFileSync('src/data/salads.js', content, 'utf8');
console.log("Safely injected quantities and quotes without modifying canonical text!");
