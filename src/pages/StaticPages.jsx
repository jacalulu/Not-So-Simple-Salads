import React from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import './StaticPages.css';

const BeakerIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={{display: 'inline-block', verticalAlign: 'middle', margin: '0 4px', color: 'var(--primary)'}}>
    <path d="M7 3h10"/>
    <path d="M7 3v15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3"/>
    <path d="M7 11h10"/>
  </svg>
);

export const Introduction = () => {
  return (
    <article className="static-page-layout">
      <nav className="recipe-nav">
        <button className="btn-back" onClick={() => window.location.hash = ''}>
          <LabelMd>← Back to Index</LabelMd>
        </button>
      </nav>
      
      <header className="static-header">
        <DisplayLg className="static-title">Introduction</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          Let me be honest with you right out of the gate: I have opinions about salads. Strong ones.
        </BodyLg>
        <BodyLg>
          If you serve me a salad with baby carrots cut into little rounds, I will smile. I will say thank you. And I will silently, internally, <i>judge you</i>. Not forever. But briefly. Firmly.
        </BodyLg>
        <BodyLg>
          Most of the salads in this book are meals. Hearty, fully-committed meals — the kind that don't apologize for being substantial. But I also know that sometimes you need something lighter. A summer evening. A day where lunch already got out of hand. A giant pot roast dinner that still somehow left you wanting something bright and alive on the side. You still deserve a flavor bomb in those moments — it just doesn't need to be dinner. So I've organized the book accordingly: the big, bold meal salads up front, and a lighter collection in the back for when you need the flavor without the commitment.
        </BodyLg>
        <BodyLg>
          What this book is <i>not</i> is a collection of quick, easy salads. There is nothing wrong with quick, easy salads — they have their place, and that place is not here. This book is for people who want a <i>salad experience</i>. The kind where you stop mid-bite and think: what is happening right now, and why is this so good. Layered. Textured. Built with intention.
        </BodyLg>
        <BodyLg>
          I've been making salads for as long as I can remember. I grew up in the kitchen — it's basically my natural habitat — and somewhere along the way, salads became <i>my thing</i>. Anyone who's eaten at my table knows this. I take them seriously. I think about the acid. I have strong feelings about texture. I will julienne a vegetable by hand because it's meditative and also because I want the result to be exactly right.
        </BodyLg>
        <BodyLg>
          The salads here are ones I've built, lovingly borrowed, adapted, and obsessed over for years. Some were inspired by chefs I deeply admire — Ottolenghi, obviously, who has permanently rewired how I think about flavor combinations. Some came out of the most unexpectedly great food I've ever eaten at Google's Mixit café, where the in-house chefs are quietly doing things with salads that have no business being as good as they are. I've been sitting there eating something extraordinary, mentally reverse-engineering it, then going home to make my version. This book is full of those moments.
        </BodyLg>
        <BodyLg>
          A note on the dressings: some of them have been made so many times they're locked in. Others are still alive — still evolving, still being tweaked. You'll see a lab marker <BeakerIcon size={20}/> next to those. Think of it as an invitation. Try the recipe, make it your own, and tell me what you changed. The best recipes are always a conversation.
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
    <>
      <article className="static-page-layout">
        <nav className="recipe-nav">
          <button className="btn-back" onClick={() => window.location.hash = ''}>
            <LabelMd>← Back to Index</LabelMd>
          </button>
        </nav>
      
      <header className="static-header">
        <DisplayLg className="static-title">How To Use This Book</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>This book is divided into two sections.</BodyLg>
        <BodyLg>
          The first — and longer — section is <strong>Meal Salads</strong>. These are the main event. They are hearty, layered, and fully intended to be dinner. Bring them to a potluck and watch people be surprised that a salad is the thing everyone's talking about. Make them on a Tuesday because you deserve a Tuesday that tastes like that.
        </BodyLg>
        <BodyLg>
          The second section is <strong>Lighter Salads</strong>. Still packed with flavor — nothing in this book is timid — but scaled back in heft. These are for summer evenings, or the days when lunch already got out of control, or when you need something bright alongside something heavy. They are not afterthoughts. They are just not trying to be dinner.
        </BodyLg>
        
        <TitleLg style={{marginTop: '2rem'}}>A note on the lab marker <BeakerIcon size={28}/></TitleLg>
        <BodyLg>
          Some dressings are marked with a beaker symbol. That means the dressing is still evolving — I've made it enough times to know it's delicious, but I haven't fully locked in the ratios. The version in the book is my best current starting point. Try it, taste it, adjust it, and if you land on something better: I genuinely want to know.
        </BodyLg>
      </div>
    </article>
    
    <section className="technique-manifesto">
      <div className="tm-header">
            <div className="tm-header-text">
              <DisplayLg className="tm-title">A Note on Technique</DisplayLg>
              <BodyLg className="tm-subtitle">
                My philosophy is rooted in these four fundamental pillars of preparation.
              </BodyLg>
            </div>
            <div className="tm-header-icon">
              <BeakerIcon size={120} className="tm-huge-beaker" />
            </div>
          </div>
          
          <div className="tm-grid">
            <div className="tm-card">
              <TitleLg className="tm-card-title">Julienning</TitleLg>
              <p className="tm-card-body">I do this with a sharp knife. You can use a mandoline. I won't judge you. Much.</p>
            </div>
            
            <div className="tm-card tm-stagger">
              <TitleLg className="tm-card-title">Salt</TitleLg>
              <p className="tm-card-body">I use kosher salt unless I specify Maldon flaked salt. When I say Maldon, I mean it — it's a finishing salt and it behaves differently. I'll always tell you which one.</p>
            </div>
            
            <div className="tm-card">
              <TitleLg className="tm-card-title">Pepper</TitleLg>
              <p className="tm-card-body">I use both freshly ground black pepper and powdered black pepper, and occasionally white pepper powder. I specify which in each recipe. They are not interchangeable.</p>
            </div>
            
            <div className="tm-card tm-stagger">
              <TitleLg className="tm-card-title">Fresh Everything</TitleLg>
              <p className="tm-card-body">Fresh lemon, fresh lime, fresh ginger, fresh garlic. Always. If you're in a pinch, pre-prepared works. But fresh is the difference between good and the kind of salad people ask you about.</p>
            </div>
          </div>
        </section>
    </>
  )
}

export const AboutAuthor = () => {
  return (
    <article className="static-page-layout">
      <nav className="recipe-nav">
        <button className="btn-back" onClick={() => window.location.hash = ''}>
          <LabelMd>← Back to Index</LabelMd>
        </button>
      </nav>
      
      <header className="static-header">
        <DisplayLg className="static-title">About the Author</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          Jaclyn Konzelmann has always had strong opinions about food. As a kid growing up in Canada, she would sit at the dinner table genuinely offended when adults tried to seat her at the kids' table — why would anyone voluntarily choose hot dogs when steak was being served?
        </BodyLg>
        <BodyLg>
          That instinct never left her. What started as a stubborn refusal to eat boring food evolved into a full-blown love affair with flavor — the bigger, the bolder, the better. She loves heat and spice, unexpected ingredient combinations, and the particular joy of a dressing that makes you stop mid-bite and ask what's in this. (The answer is usually: more acid than you'd expect, and something you didn't see coming.) She makes all her own dressings. Store-bought has never once come close.
        </BodyLg>
        <BodyLg>
          Jaclyn grew up eating Greek salads and has spent the years since expanding enthusiastically from there — fish sauce in vinaigrettes, blended cilantro stems for freshness, citrus combinations that have no business working as well as they do. She is endlessly fascinated by how different cultures approach a bowl of ingredients: what they reach for, what they layer, what they leave out. Every country has its own answer to the question of flavor, and she intends to try all of them.
        </BodyLg>
        <BodyLg>
          Food has always been how she connects. She loves hosting, loves cooking for friends, and has a long-standing habit of making salads for family dinners and then fielding recipe requests for the rest of the evening. Her husband's parents visit often and have learned to expect something good on the table. Her three daughters — Ophelia, and three-year-old identical twins Daphne and Violet — frequently serve as sous chefs and official taste testers from their perch on the kitchen counter. She is working hard to make sure they grow up with the same appreciation for bold flavors and great food that she has.
        </BodyLg>
        <BodyLg>
          She has been promising this cookbook to her mom and sister for years. It is, by any measure, long overdue.
        </BodyLg>
        <BodyLg>
          Jaclyn lives in Northern California with her family, her chosen family of friends she loves to cook for, and a pantry full of spices.
        </BodyLg>
      </div>
    </article>
  )
}

export const Pantry = () => {
  return (
    <article className="static-page-layout">
      <nav className="recipe-nav">
        <button className="btn-back" onClick={() => window.location.hash = ''}>
          <LabelMd>← Back to Index</LabelMd>
        </button>
      </nav>
      
      <header className="static-header">
        <DisplayLg className="static-title">Stock Your Pantry</DisplayLg>
      </header>

      <div className="static-content">
        <BodyLg>
          A great salad doesn't start at the cutting board. It starts at the pantry. These are the ingredients I reach for constantly — the ones that make the difference between a salad that's fine and a salad that makes someone put down their fork and ask for the recipe. Stock these, and you'll always be dangerous.
        </BodyLg>

        <section style={{marginTop: '3rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Spice Shelf</TitleLg>
          <BodyLg style={{marginBottom: '1.5rem'}}>These are non-negotiable. If you only take one thing from this book, let it be a commitment to building a real spice collection.</BodyLg>
          
          <BodyLg><strong>Korean Chili Flakes (Gochugaru)</strong> — Fruity, smoky heat that's more nuanced than regular red pepper flakes. Not a substitute for them — a complete upgrade. Used in the millionaire's bacon, the tuna rub, the watermelon feta salad, and more. Buy a bag and you will find excuses to put it on everything.</BodyLg>
          <BodyLg><strong>Gochujang (Korean Chili Paste)</strong> — Where gochugaru is a flake, gochujang is a fermented paste — deeper, funkier, with a slow-building heat. Essential for the steak marinade in Thai'd and True. A small spoonful transforms a dressing.</BodyLg>
          <BodyLg><strong>Za'atar</strong> — A Middle Eastern spice blend of dried herbs, sesame seeds, and sumac. Earthy, tangy, and wildly versatile. I use it on chicken, on croutons, and honestly on anything that needs a flavor upgrade with zero effort.</BodyLg>
          <BodyLg><strong>Sichuan Peppercorns</strong> — Don't let the name mislead you — these aren't hot. They're floral, citrusy, and create a gentle numbing tingle on your tongue that is unlike anything else in your spice rack. Toast them lightly in a dry pan before using to wake them up. Add to quick pickles, dressings, or anywhere you want something unexpected.</BodyLg>
          <BodyLg><strong>Nigella Seeds</strong> — Small, black, and slightly oniony with a subtle bitterness that adds crunch and complexity. Beautiful on salads that need textural contrast. Underused in Western kitchens and worth every bit of shelf space.</BodyLg>
          <BodyLg><strong>Smoked Flaked Salt</strong> — Not just for finishing. The smoke adds a layer of depth that regular sea salt simply doesn't. I use Maldon as my everyday flaked salt, but a smoked version is worth having separately for moments when a dish needs that extra dimension.</BodyLg>
          <BodyLg><strong>Tajín</strong> — A Mexican chili-lime salt that makes fruit taste more like itself, but better. Essential for the Zest Coast Salad. Once you start using it on watermelon and mango you will not be able to stop.</BodyLg>
          <BodyLg><strong>Celery Salt</strong> — Quiet but powerful. Particularly great on croutons. One of those ingredients that doesn't announce itself but is immediately missed when it's absent.</BodyLg>
          <BodyLg><strong>Smoked Paprika</strong> — Adds warmth and depth without heat. A reliable back-pocket spice for croutons, marinades, and dressings that need something earthy.</BodyLg>
        </section>

        <section style={{marginTop: '3rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Acid Arsenal</TitleLg>
          <BodyLg style={{marginBottom: '1.5rem'}}>I am a firm believer that most home cooks under-acid their food. If something tastes flat, the answer is almost always more acid. The type of acid matters enormously — each one has a different personality.</BodyLg>
          
          <BodyLg><strong>Rice Vinegar</strong> — Clean, mild, slightly sweet. My most-used vinegar. The backbone of Asian-leaning dressings and quick pickles.</BodyLg>
          <BodyLg><strong>Champagne Vinegar</strong> — Delicate and bright. My choice for anything where I want acid without aggression — the French vinaigrette on the Salmon Situation, the dressing on Salad Days.</BodyLg>
          <BodyLg><strong>Red Wine Vinegar</strong> — Bold and tannic. Classic for Greek and Mediterranean dressings.</BodyLg>
          <BodyLg><strong>Sherry Vinegar</strong> — Nutty and complex. Aged, like balsamic but lighter. Worth having for dressings that need depth without sweetness.</BodyLg>
          <BodyLg><strong>Apple Cider Vinegar</strong> — Fruity and sharp. Great for pickling and anywhere you want a slightly rustic edge.</BodyLg>
          <BodyLg><strong>Balsamic Reduction</strong> — I buy this rather than make it. Thick, sweet, and syrupy — a drizzle is all you need. The Caprese would not be the same without it.</BodyLg>
          <BodyLg><strong>Shaoxing Wine</strong> — Technically a rice wine, not a vinegar, but it belongs in the acid conversation. Adds depth and a subtle sweetness to marinades. Essential for the steak marinade in Thai'd and True. Find it at any Asian grocery store.</BodyLg>
        </section>

        <section style={{marginTop: '3rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Umami Layer</TitleLg>
          <BodyLg style={{marginBottom: '1.5rem'}}>These are your secret weapons. Depth, funk, and savoriness that you can't quite put your finger on but immediately notice when it's there.</BodyLg>
          
          <BodyLg><strong>Fish Sauce</strong> — Do not be afraid of fish sauce. It smells alarming in the bottle and transforms completely in a dressing. The Nam Jim dressing in Thai'd and True is built on it. A small amount adds a savory depth that anchors everything around it.</BodyLg>
          <BodyLg><strong>White Miso Paste</strong> — Fermented, salty, and slightly sweet. Adds body to dressings and a quiet umami backbone. Used in both Noodle Me This and Banh Mi Over. Keep it in the fridge — it lasts forever.</BodyLg>
          <BodyLg><strong>Anchovy Fillets</strong> — The secret to a great Caesar. Minced fine, they dissolve completely into the dressing and you will never taste "fish" — only a deep, savory richness. Don't skip them.</BodyLg>
          <BodyLg><strong>Worcestershire Sauce</strong> — Another quiet umami amplifier. One teaspoon in the Caesar dressing does more work than its volume suggests.</BodyLg>
          <BodyLg><strong>Dijon Mustard</strong> — An emulsifier and a flavor in equal measure. Essential for vinaigrettes that need to stay together and have backbone. I use it in more dressings than any other single ingredient.</BodyLg>
        </section>

        <section style={{marginTop: '3rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Specialty Shelf</TitleLg>
          <BodyLg style={{marginBottom: '1.5rem'}}>These are the ingredients that make people ask questions.</BodyLg>

          <BodyLg><strong>Preserved Lemons</strong> — Fermented whole lemons in salt. The rind is what you use — rinse it, discard the pulp, and chop or blend it into dressings. The flavor is intensely citrusy and complex in a way that fresh lemon juice simply cannot replicate. Essential for Pack'n Pasta. Find them at Whole Foods, Middle Eastern grocery stores, or make your own.</BodyLg>
          <BodyLg><strong>Castelvetrano Olives</strong> — The gateway olive. Bright green, buttery, and mild — nothing like the canned black olives of your childhood. If you think you don't like olives, try these first.</BodyLg>
          <BodyLg><strong>Caper Berries vs. Capers</strong> — Both live in brine, both belong in your fridge, and they are not the same thing. Capers are tiny, punchy, and intense — great for crispy frying (Cauli-fornia Dreamin') or scattered through dressings. Caper berries are larger, milder, and more elegant — used whole in the Niçoise. Worth having both.</BodyLg>
          <BodyLg><strong>Momofuku Tingly Salt</strong> — A blend of Sichuan peppercorns and salt from David Chang's brand. Convenient, consistent, and genuinely excellent. I use it as a finishing salt on Salad Days. Find it online or at specialty grocery stores.</BodyLg>
          <BodyLg><strong>Sesame Seeds (White and Black)</strong> — Both for flavor and visual contrast. Toasted white sesame seeds add nuttiness. Black sesame seeds add drama. I use them together on the tuna rub and throughout several dressings. Toast them yourself in a dry pan — pre-toasted bags exist but the freshly toasted version is noticeably better.</BodyLg>
          <BodyLg><strong>Nigella Seeds</strong> — Worth calling out again here for their visual impact alone. Black, angular, and beautiful scattered over a salad. The flavor is subtle — slightly bitter and oniony — but the texture they add is excellent.</BodyLg>
        </section>

        <section style={{marginTop: '3rem', marginBottom: '2rem'}}>
          <TitleLg style={{marginBottom: '1rem'}}>The Dressing Philosophy</TitleLg>
          <BodyLg>One final note. Every dressing in this book is made from scratch, and that is not an accident. Store-bought dressing has never once come close to something freshly made. Once you have the pantry stocked above, making your own dressing takes about three minutes and the difference is not subtle. The acid is brighter. The emulsion is better. The flavor is yours.</BodyLg>
          <BodyLg>Make your own dressings. Always.</BodyLg>
        </section>
      </div>
    </article>
  )
}
