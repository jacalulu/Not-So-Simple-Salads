import React from 'react';
import { navigate } from '../router';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import './StaticPages.css';

// Copy on these pages mirrors the printed v7 cookbook. If the book text changes,
// change it here too (source of truth: the printed interior).

const BackNav = () => (
  <nav className="recipe-nav">
    <button className="btn-back" onClick={() => navigate('/')}>
      <LabelMd>← Back to Index</LabelMd>
    </button>
  </nav>
);

export const Introduction = () => {
  return (
    <article className="static-page-layout">
      <BackNav />

      <header className="static-header">
        <DisplayLg className="static-title">A Note from Jaclyn</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          Let me be honest with you right out of the gate: I have opinions about salads. Strong ones.
        </BodyLg>
        <BodyLg>
          If you serve me a salad with baby carrots cut into little rounds, I will smile. I will say thank you. And I will silently, internally, <i>judge you</i>. Not forever. But briefly. Firmly.
        </BodyLg>
        <BodyLg>
          Most of the salads in this book are meals. Hearty, fully-committed meals — the kind that don't apologize for being substantial. But I also know that sometimes you need something lighter. A summer evening. A day where lunch already got out of hand. You still deserve a flavor bomb in those moments — it just doesn't need to be dinner.
        </BodyLg>
        <BodyLg>
          What this book is <i>not</i> is a collection of quick, easy salads. There is nothing wrong with quick, easy salads — they have their place, and that place is not here. This book is for people who want a <i>salad experience</i>. Textured. Built with intention. Never apologetic.
        </BodyLg>
        <BodyLg>
          The salads here are ones I've built, borrowed, adapted, and obsessed over for years. Some were inspired by Ottolenghi. Some came out of the unexpectedly great food at Google's Mixit café. This book is full of those moments.
        </BodyLg>
        <BodyLg>
          A note on the dressings: make your own. Always. Store-bought has never once come close.
        </BodyLg>
        <BodyLg>
          This is a labor of love. Make a mess. Eat well.<br/><br/>
          — Jaclyn
        </BodyLg>
      </div>
    </article>
  )
}

export const HowToUse = () => {
  return (
    <article className="static-page-layout">
      <BackNav />

      <header className="static-header">
        <DisplayLg className="static-title">How To Use This Book</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          Each recipe includes a difficulty rating — <strong>Easy</strong>, <strong>Medium</strong>, or <strong>Involved</strong>. Easy means minimal cooking. Medium means some cooking is required but nothing intimidating. Involved means multiple components, marinades, or techniques that reward the effort.
        </BodyLg>
        <BodyLg>
          Every recipe also includes a <strong>Make It Your Own</strong> section with substitutions and variations. These are not apologies — they are invitations to adapt. The best home cooks treat recipes as starting points.
        </BodyLg>
        <BodyLg>
          Ingredient amounts use the word <i>generous</i> a lot. This is intentional. I don't want you measuring every leaf. Cook by feel, taste as you go, and adjust. Dressing ratios are precise because they matter — but the salad itself should feel like yours.
        </BodyLg>
        <BodyLg>
          Before you start cooking, read through <strong>Stock Your Pantry</strong>. The recipes in this book lean on a specific set of ingredients — Korean chili flakes, preserved lemons, good vinegars, Dijon mustard. Having these on hand transforms weeknight cooking.
        </BodyLg>
        <BodyLg>
          Finally: make your own dressings. Every time. Store-bought has never once come close.
        </BodyLg>
      </div>
    </article>
  )
}

export const AboutAuthor = () => {
  return (
    <article className="static-page-layout">
      <BackNav />

      <header className="static-header">
        <DisplayLg className="static-title">About the Author</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          Jaclyn Konzelmann has always had strong opinions about food. As a kid growing up in Canada, she would sit at the dinner table genuinely offended when adults tried to seat her at the kids' table — why would anyone voluntarily choose hot dogs when steak was being served?
        </BodyLg>
        <BodyLg>
          That instinct never left her. What started as a stubborn refusal to eat boring food evolved into a full-blown love affair with flavor — the bigger, the bolder, the better. She makes all her own dressings. Store-bought has never once come close.
        </BodyLg>
        <BodyLg>
          Jaclyn grew up eating Greek salads and has spent the years since expanding enthusiastically from there — fish sauce in vinaigrettes, blended cilantro stems, citrus combinations that have no business working as well as they do.
        </BodyLg>
        <BodyLg>
          Food has always been how she connects. She loves hosting, and her three daughters — Ophelia, Daphne, and Violet — frequently serve as sous chefs and official taste testers from their perch on the kitchen counter.
        </BodyLg>
        <BodyLg>
          She has been promising this cookbook to her mom and sister for years. It is, by any measure, long overdue.
        </BodyLg>
        <BodyLg>
          Jaclyn lives in Northern California with her family and a pantry full of spices.
        </BodyLg>
        <BodyLg>
          <i>Make a mess. Eat well.</i>
        </BodyLg>
      </div>
    </article>
  )
}

const PANTRY = [
  {
    title: 'The Spice Shelf',
    intro: 'If you only take one thing from this book, let it be a commitment to building a real spice collection.',
    items: [
      ['Gochugaru', 'Fruity, smoky Korean chili flakes. Not a substitute for red pepper flakes — a complete upgrade.'],
      ['Gochujang', 'Fermented Korean chili paste. Deeper and funkier than gochugaru, with slow-building heat.'],
      ["Za'atar", 'A Middle Eastern blend of dried herbs, sesame, and sumac. Wildly versatile.'],
      ['Sichuan Peppercorns', 'Floral, citrusy, gently numbing. Toast lightly before using.'],
      ['Nigella Seeds', 'Small, black, slightly oniony. Beautiful on salads that need textural contrast.'],
      ['Smoked Flaked Salt', "Depth that regular sea salt doesn't give. Worth having alongside your everyday Maldon."],
      ['Aleppo Pepper', "Fruity, gently smoky, moderate heat. Brighter and rounder than standard red pepper flakes — use it anywhere they're called for."],
      ['Tajín', 'A Mexican chili-lime salt that makes fruit taste more like itself, but better.'],
      ['Celery Salt', 'Quiet but powerful. Particularly great on croutons.'],
      ['Smoked Paprika', 'Warmth and depth without heat. A reliable back-pocket spice.'],
    ],
  },
  {
    title: 'The Acid Arsenal',
    intro: 'Most home cooks under-acid their food. If something tastes flat, the answer is almost always more acid.',
    items: [
      ['Rice Vinegar', 'Clean, mild, slightly sweet. My most-used vinegar.'],
      ['Champagne Vinegar', 'Delicate and bright. For anything where you want acid without aggression.'],
      ['Red Wine Vinegar', 'Bold and tannic. Classic for Greek and Mediterranean dressings.'],
      ['Sherry Vinegar', 'Nutty and complex. Aged like balsamic but lighter.'],
      ['Apple Cider Vinegar', 'Fruity and sharp. Great for pickling and rustic dressings.'],
      ['Balsamic Reduction', "Buy it, don't make it. Thick, sweet, syrupy."],
      ['Shaoxing Wine', 'A rice wine, not a vinegar — but it belongs in the acid conversation.'],
    ],
  },
  {
    title: 'The Umami Layer',
    intro: "Your secret weapons. Depth, funk, and savoriness you can't quite put your finger on.",
    items: [
      ['Fish Sauce', 'Alarming in the bottle, transformative in a dressing.'],
      ['White Miso Paste', 'Fermented, salty, slightly sweet. Keep it in the fridge — it lasts forever.'],
      ['Anchovy Fillets', 'The secret to a great Caesar. Minced fine, they dissolve completely.'],
      ['Worcestershire Sauce', 'A quiet umami amplifier. One teaspoon does more work than its volume suggests.'],
      ['Dijon Mustard', 'An emulsifier and a flavor in equal measure. Essential for vinaigrettes.'],
    ],
  },
  {
    title: 'The Specialty Shelf',
    intro: 'The ingredients that make people ask questions.',
    items: [
      ['Preserved Lemons', "Fermented whole lemons in salt. Use the rind only. Essential for Pack'n Pasta."],
      ['Castelvetrano Olives', 'The gateway olive. Bright green, buttery, mild.'],
      ['Capers & Caper Berries', 'Not the same thing. Capers: tiny and punchy. Caper berries: larger, milder.'],
      ['Momofuku Tingly Salt', "Sichuan peppercorns and salt from David Chang's brand."],
      ['Sesame Seeds', 'Toast them yourself in a dry pan — noticeably better than pre-toasted.'],
    ],
  },
];

export const Pantry = () => {
  return (
    <article className="static-page-layout">
      <BackNav />

      <header className="static-header">
        <DisplayLg className="static-title">Stock Your Pantry</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          A great salad doesn't start at the cutting board. It starts at the pantry. These are the ingredients I reach for constantly — the ones that make the difference between a salad that's fine and a salad that makes someone put down their fork and ask for the recipe.
        </BodyLg>

        {PANTRY.map((section) => (
          <section key={section.title} style={{marginTop: '3rem'}}>
            <TitleLg style={{marginBottom: '1rem'}}>{section.title}</TitleLg>
            <BodyLg style={{marginBottom: '1.5rem'}}>{section.intro}</BodyLg>
            {section.items.map(([name, blurb]) => (
              <BodyLg key={name}><strong>{name}</strong> — {blurb}</BodyLg>
            ))}
          </section>
        ))}

        <section style={{marginTop: '3rem', marginBottom: '2rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Dressing Philosophy</TitleLg>
          <BodyLg>
            <strong>Make your own</strong> — Every dressing in this book is made from scratch. Once your pantry is stocked, making your own takes about three minutes and the difference is not subtle. The acid is brighter. The emulsion is better. The flavor is yours.
          </BodyLg>
        </section>
      </div>
    </article>
  )
}
