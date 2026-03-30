# Design System Strategy: The Digital Editor

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Living Editorial."** 

Unlike standard food apps that feel like rigid spreadsheets of ingredients, this system is designed to feel like a high-end, tactile food magazine brought to life. We are moving away from the "app-in-a-box" aesthetic toward a layout that feels curated, eclectic, and intentionally bespoke. We embrace intentional asymmetry, allowing photography to break the grid and typography to command the space with authority. The interface doesn't just display content; it frames it as an artisanal experience.

## 2. Colors
Our palette is a celebration of harvest—vibrant, high-contrast, and "alive."

*   **Primary (#3c6a35):** A deep, leafy kale green used for primary actions and stabilizing the brand's organic roots.
*   **Secondary (#be004c):** A vibrant radish pink. This is our "pop" color, used sparingly for high-attention elements like notifications or active selections.
*   **Tertiary (#795a00):** A warm citrus gold that adds earthy depth and richness.
*   **Neutral Foundation:** We use `background: #fbf9f4` (a light cream) instead of pure white to give the interface a "fine paper" feel.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:
1.  **Background Color Shifts:** Use `surface-container-low` (#f5f4ee) sections against the `surface` background.
2.  **Negative Space:** Utilize the Spacing Scale (specifically `spacing-12` or `spacing-16`) to create structural divisions.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use `surface-container-lowest` (#ffffff) for cards to make them feel like "scraps" of paper sitting on a `surface-container` table. 

### The "Glass & Gradient" Rule
For floating elements (like a "Quick Add" FAB), use Glassmorphism. Apply `surface` with 80% opacity and a 20px backdrop blur. For CTAs, apply a subtle gradient from `primary` (#3c6a35) to `primary-dim` (#305d2a) to provide a polished, "ink-on-paper" depth.

## 3. Typography
Typography is our primary tool for storytelling. 

*   **Display & Headlines (Rufina):** This serif font is our personality. Large `display-lg` (3.5rem) should be used for hero titles, often overlapping imagery to create a collage effect. The high contrast and sharp serifs evoke the feeling of a masthead.
*   **Titles & Body (Work Sans):** A clean, modern sans-serif. Use `body-lg` (1rem) for ingredient descriptions to ensure maximum legibility against the eclectic layout.
*   **Labels (Space Grotesk):** For metadata, tags, and small utility text, use Space Grotesk. This adds a "tech-meets-editorial" edge, feeling like the fine print in a designer catalog.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** Rather than shadows, place a `surface-container-highest` (#e3e3db) element inside a `surface-container-low` (#f5f4ee) section to create natural contrast.
*   **Ambient Shadows:** When a float is necessary, use a "Botanical Shadow": a 24px blur with 6% opacity using a tinted version of `on-surface` (#31332e). This mimics soft, overhead kitchen lighting.
*   **The "Ghost Border" Fallback:** If a container needs more definition, use a `outline-variant` (#b2b2ab) at 15% opacity. Never use 100% opaque lines.
*   **Interactivity:** On hover, instead of a heavy shadow, shift the background from `surface-container-low` to `surface-container-lowest` to "light up" the element.

## 5. Components

### Buttons
*   **Primary:** Rounded `lg` (1rem), `primary` background with `on-primary` text. Use a slight gradient for a premium feel.
*   **Secondary:** Ghost style. No background, `primary` text, and a `Ghost Border` (15% opacity `outline-variant`).
*   **Tertiary:** Underlined `label-md` text only, used for "See all" or "Read more."

### Cards
Cards must never have borders. Use `surface-container-lowest` for the card body. Images within cards should have `rounded-lg` corners. To achieve the "scrapbook" feel, occasionally tilt images by 1–2 degrees or allow them to bleed off the edge of the card.

### Chips
*   **Filter Chips:** Use `secondary-container` (#ffd9de) with `on-secondary-container` (#a50041) text. Use `full` rounding (pill shape).
*   **Action Chips:** Use `tertiary-container` (#fdc003).

### Inputs
Text fields should be "Minimalist Editorial": No box, just a subtle `surface-variant` (#e3e3db) bottom bar. Labels should use `label-md` (Space Grotesk) in `on-surface-variant`.

### Signature Component: The "Ingredient Scrap"
A custom list component where each item looks like a hand-labeled snippet. Use `title-sm` (Work Sans) for the name and a `label-sm` (Space Grotesk) tag for the measurement, separated by generous whitespace (`spacing-4`).

## 6. Do's and Don'ts

### Do
*   **Do** allow images of fresh produce to overlap text.
*   **Do** use asymmetrical margins. For example, a 10% left margin and a 15% right margin to create an editorial flow.
*   **Do** use `primary-fixed` (#b9eeab) for large background blocks to keep the "alive" green feeling present.
*   **Do** use "hand-drawn" icons or annotations (arrows pointing to ingredients) to emphasize the artisanal tone.

### Don't
*   **Don't** use 1px solid black or grey borders.
*   **Don't** use generic drop shadows (e.g., #000 at 20%).
*   **Don't** use a standard 12-column centered grid for everything. Break the grid for hero moments.
*   **Don't** crowd the content. If in doubt, add more `spacing-8` or `spacing-10`.