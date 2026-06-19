# Kọ́ Yorùbá — your personal Yoruba learning app

A tiny, ad-free flashcard app for learning Yoruba ten words at a time.
No accounts, no ads, no tracking. Your progress is saved on your own phone.

## What's inside

| File | What it does |
|---|---|
| `index.html` | The whole app (don't need to touch it) |
| `words.js` | **Your word rounds — the only file you ever edit** |
| `manifest.json` + icons | Lets the app install to your phone home screen |

## Updating the app on GitHub (when you get new files)

1. Go to your repo on GitHub.
2. Click into the file you're replacing (e.g. `words.js` or `index.html`).
3. Click the pencil icon (Edit this file).
4. Select all, delete, paste in the new version.
5. Click **Commit changes**. Refresh the app on your phone (~30 sec).

## First-time setup (GitHub Pages, ~5 minutes)

1. Create a repository at [github.com/new](https://github.com/new), make it **Public**.
2. Click **uploading an existing file**, drag in all the files, **Commit changes**.
3. Go to **Settings → Pages**, pick branch `main` / `(root)`, **Save**.
4. Your app is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Put it on your phone like a real app

- **iPhone (Safari):** Share button → **Add to Home Screen**.
- **Android (Chrome):** ⋮ menu → **Add to Home screen** / **Install app**.

It then opens full-screen from its own icon, no browser bar.

## The five ways to study

- **Flashcards** — first exposure. Flip, then rate yourself honestly.
- **Challenge** — a sentence with the word blanked out; pick from 4 options.
- **Build it** — tap word tiles to reconstruct the full Yoruba sentence.
- **Mix mode** — shuffles every unlocked round together.
- **Forge** — the production mode. It recombines words you've already learned
  into *fresh* sentences you've never seen, shows you the English, and asks you
  to **say the Yoruba out loud** before revealing the answer. This is the part
  that trains real speaking, not just recognition. It unlocks once you've
  learned your verbs, and its pool of sentences grows automatically as you add
  more rounds.

Finishing a round's flashcards unlocks the next round.

## Adding your next 10 words

Ask Claude for your next round — you'll get a block to paste at the end of the
list in `words.js`, right before the final `];` (with a comma after the
previous round's closing `}`).

Each word looks like this:

```js
{ yo: "bàbá", simple: "baba", pron: "bah-BAH", en: "father", role: "noun",
  ex: { yo: "Mo rí bàbá mi", en: "I see my father" } }
```

Field notes:
- **`yo`** — the real spelling with tone marks.
- **`simple`** — plain-letter version. Also used as the word's key in the Forge,
  so keep it unique and lowercase for nouns/verbs.
- **`role`** — `"phrase"`, `"verb"`, `"noun"`, or `"number"`. Used by the Forge
  to slot words into sentences. (New field — older words now all have one.)
- **`ex.yo`** — must contain the exact `yo` phrase somewhere inside it; this is
  what powers Challenge and Build. Claude validates this automatically.

## How the Forge scales (the important bit)

The Forge builds sentences from curated frames like "I {see/love} {family
member}" and "I want to {verb}". Because Yoruba is subject-verb-object like
English, every new noun or verb you learn slots into existing frames, so your
sentence count grows *geometrically*, not by tens. Each new round Claude brings
new frames too, so the space keeps expanding. Every generated sentence is
checked to be grammatically correct — you'll never drill a broken one.

## Notes

- Progress lives in your browser's storage on that device. Clearing browser
  data resets it. (Cross-device sync would be a bigger build — ask Claude.)
- Works offline once loaded, except the web fonts on first visit.
