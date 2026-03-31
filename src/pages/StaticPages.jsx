import React from 'react';
import { RequestLayout } from '../components/Typography';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import './StaticPages.css';

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
          A note on the dressings: some of them have been made so many times they're locked in. Others are still alive — still evolving, still being tweaked. You'll see a lab marker [🧪] next to those. Think of it as an invitation. Try the recipe, make it your own, and tell me what you changed. The best recipes are always a conversation.
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
        
        <TitleLg style={{marginTop: '2rem'}}>A note on the lab marker [🧪]</TitleLg>
        <BodyLg>
          Some dressings are marked with a beaker symbol. That means the dressing is still evolving — I've made it enough times to know it's delicious, but I haven't fully locked in the ratios. The version in the book is my best current starting point. Try it, taste it, adjust it, and if you land on something better: I genuinely want to know.
        </BodyLg>
        
        <TitleLg style={{marginTop: '2rem'}}>A note on technique</TitleLg>
        <BodyLg>
          <em>Julienning</em> — I do this with a sharp knife. You can use a mandoline. I won't judge you. Much.
        </BodyLg>
        <BodyLg>
          <em>Salt</em> — I use kosher salt unless I specify Maldon flaked salt. When I say Maldon, I mean it — it's a finishing salt and it behaves differently. I'll always tell you which one.
        </BodyLg>
        <BodyLg>
          <em>Pepper</em> — I use both freshly ground black pepper and powdered black pepper, and occasionally white pepper powder. I specify which in each recipe. They are not interchangeable.
        </BodyLg>
        <BodyLg>
          <em>Fresh everything</em> — fresh lemon, fresh lime, fresh ginger, fresh garlic. Always. If you're in a pinch, pre-prepared works. But fresh is the difference between good and the kind of salad people ask you about.
        </BodyLg>
      </div>
    </article>
  )
}
