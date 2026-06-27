# Ilo Krafts — Thank-You Card System

A complete QR-code thank-you card system. Every customer receives a card with their order. When they scan it, they land on a beautiful mobile page with an audio story about their mold and full colour painting guides.

---

## How It Works

```
Customer receives order
       │
       ▼
Thank-you card is included (printed from card.html)
       │
       ▼
Customer scans QR code on their phone
       │
       ▼
story.html loads — personalized to their product + name
       │
  ┌────┴────┐
  │         │
Audio    Colour
story    palettes
(narration  (3 curated
 reads      themes with
 aloud)     painting tips)
```

---

## Files

| File | Purpose |
|---|---|
| `card.html` | Open in browser → fill in order details → print the card |
| `story.html` | The page customers see when they scan the QR code |
| `products.json` | All mold stories, narration scripts, and colour palettes |
| `audio/` | (Create this folder) Add MP3 narration files here |

---

## Step 1 — Print a Card

1. Open `card.html` in any browser (Chrome recommended)
2. Fill in:
   - **Mold / Product** — which mold the customer ordered
   - **Order ID** — your order reference (e.g. `ILO-2024-001`)
   - **Customer First Name** — for a personalised greeting on the story page (optional)
   - **Domain** — your website domain (see Step 2 below)
3. Click **Generate Card** — the preview updates with the QR code
4. Click **Print Card**
5. In print settings: set paper size to **A6** (105×148mm) or **4×6 inch**
6. Disable headers and footers
7. Print

> **For batch orders:** Repeat steps 2–6 for each order. Takes about 30 seconds per card once you have your workflow.

---

## Step 2 — Host the Story Page

The QR code points to a URL on your domain. You need to host two files:

```
your-domain.com/
  story.html
  products.json
  audio/          ← optional, for real MP3 narrations
    rose.mp3
    mandala.mp3
    seashell.mp3
```

### Hosting options (all free):

**Option A — GitHub Pages (easiest)**
1. Put `story.html` and `products.json` in your GitHub repo
2. Enable GitHub Pages in repo Settings
3. Your URL becomes: `https://yourusername.github.io/repo-name/story.html`
4. Set that as your domain in the card generator

**Option B — Netlify (drag and drop)**
1. Go to netlify.com → drag the `thankyou-system` folder into the deploy zone
2. Get a free URL like `https://ilo-krafts.netlify.app`
3. (Optional) connect your own domain

**Option C — Your existing website**
1. Upload `story.html` and `products.json` to a `/story/` folder on your site
2. URL becomes: `https://ilo.krafts.com/story/story.html`

---

## Step 3 — Audio Narration

The story page has two modes:

**Mode A — No audio file (works immediately, no setup)**
The page uses the browser's built-in text-to-speech to read the narration aloud.
Works on all modern phones. No files needed.

**Mode B — Custom MP3 narration (best experience)**
Record or generate narration audio for each mold, save as MP3, upload to `audio/` folder.

### Recording tips for narration:
- Read the narration script from `products.json` (the `"narration"` field for each product)
- Record in a quiet room, close to the mic
- Speak slowly and warmly — aim for 45–60 seconds per narration
- Export as MP3, name it `rose.mp3`, `mandala.mp3`, `seashell.mp3`

### AI-generated narration (optional):
You can use tools like ElevenLabs, Murf, or Descript to generate professional narration from the scripts in `products.json`. Copy the `"narration"` text for each product, paste into the tool, and export as MP3.

---

## Step 4 — Add New Molds

To add a new mold to the system:

1. Open `products.json`
2. Add a new entry following this structure:

```json
"your-mold-id": {
  "id": "your-mold-id",
  "name": "The [Mold Name]",
  "tagline": "A short poetic line",
  "story": "2-3 sentences about the origin or inspiration of this mold.",
  "narration": "The spoken version — slightly more lyrical than the story. This gets read aloud.",
  "audioFile": "audio/your-mold-id.mp3",
  "paintingTips": [
    "Tip one.",
    "Tip two.",
    "Tip three.",
    "Tip four.",
    "Tip five."
  ],
  "palettes": [
    {
      "id": "palette-one",
      "name": "Palette Name",
      "mood": "3 words describing the feeling",
      "description": "One sentence about this palette's inspiration.",
      "colors": [
        { "hex": "#XXXXXX", "name": "Colour Name", "role": "Base coat / Highlight / etc.", "tip": "How to use this colour." },
        { "hex": "#XXXXXX", "name": "Colour Name", "role": "Mid-tone", "tip": "..." },
        { "hex": "#XXXXXX", "name": "Colour Name", "role": "Shadow", "tip": "..." },
        { "hex": "#XXXXXX", "name": "Colour Name", "role": "Accent", "tip": "..." }
      ]
    }
  ]
}
```

3. In `card.html`, add the new mold to the `<select>` dropdown:
```html
<option value="your-mold-id">The [Mold Name]</option>
```

4. Upload the updated files to your hosting.

---

## QR Code URL Format

```
https://[domain]/story.html?p=[product-id]&o=[order-id]&n=[customer-name]
```

| Parameter | Required | Example |
|---|---|---|
| `p` | Yes | `rose`, `mandala`, `seashell` |
| `o` | No | `ILO-2024-001` |
| `n` | No | `Sarah` (personalises the greeting) |

---

## Colour Customisation

To change the card or story page colours, edit the CSS variables at the top of each file:

```css
:root {
  --ink: #1a1a1a;        /* dark text / backgrounds */
  --cream: #faf6f0;      /* page background */
  --accent: #8B5E52;     /* terracotta / brand colour */
  --gold: #c8a84b;       /* gold accents */
  --warm-mid: #f0e8dc;   /* secondary background */
}
```

---

## Frequently Asked Questions

**The QR code doesn't scan well.**
Make sure the card is printed at full size. QR codes need to be at least 2cm × 2cm to scan reliably. Use "fit to page" rather than "shrink to fit" in print settings.

**The audio doesn't play.**
The browser text-to-speech fallback requires user interaction first (the play button tap). This is a browser security requirement on mobile. The play button is there — the customer needs to press it.

**The story page shows "Story not found".**
Check that `products.json` is in the same folder as `story.html` on your server. Also verify the product ID in the URL matches a key in `products.json` exactly (case-sensitive, no spaces).

**Can I change the thank-you message on the card?**
Yes — in `card.html`, edit the `MESSAGES` object in the `<script>` section near the bottom.
