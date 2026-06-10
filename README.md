# Kọ́ Yorùbá — your personal Yoruba learning app

A tiny, ad-free flashcard app for learning Yoruba ten words at a time.
No accounts, no ads, no tracking. Your progress is saved on your own phone.

## What's inside

| File | What it does |
|---|---|
| `index.html` | The whole app (don't need to touch it) |
| `words.js` | **Your word rounds — the only file you ever edit** |
| `manifest.json` + icons | Lets the app install to your phone home screen |

## Get it live on GitHub Pages (one time, ~5 minutes)

1. Go to [github.com/new](https://github.com/new) and create a repository
   (name it anything, e.g. `yoruba`). Make it **Public**.
2. On the new repo page, click **uploading an existing file**, drag in all
   the files from this folder, and click **Commit changes**.
3. In the repo, go to **Settings → Pages**. Under "Branch", pick `main`
   and `/ (root)`, then **Save**.
4. Wait ~1 minute. Your app is live at:
   `https://YOUR-USERNAME.github.io/yoruba/`

## Put it on your phone like a real app

1. Open that URL in your phone browser.
2. **iPhone (Safari):** tap the Share button → **Add to Home Screen**.
   **Android (Chrome):** tap the ⋮ menu → **Add to Home screen** / **Install app**.
3. It now opens full-screen from its own icon, no browser bar.

## Adding your next 10 words

Ask Claude for your next round — you'll get a block of code that looks like
the rounds already in `words.js`. Then:

1. Open `words.js` in your GitHub repo and click the pencil (edit) icon.
2. Paste the new round at the end of the list — right before the final `];`
   — and make sure there's a comma after the previous round's closing `}`.
3. Click **Commit changes**. Refresh the app on your phone. Done.

Each round needs every word to have its phrase appear **exactly** inside its
example sentence (`ex.yo`) — that's what powers Challenge mode. Claude
checks this automatically when generating rounds for you.

## How learning works

- **Flashcards** — first exposure. Flip, then rate yourself honestly.
- **Challenge** — a sentence with the word blanked out; pick from 4 options.
  Distractors are pulled from words you've already learned.
- **Build it** — tap word tiles to reconstruct the full Yoruba sentence.
- Finishing a round's flashcards unlocks the next round.
- **Mix mode** shuffles everything you've unlocked together — this
  cross-round mixing is what makes words stick long-term.

## Notes

- Progress lives in your browser's storage on that device. Clearing browser
  data resets it. (If you ever want sync across devices, that's a bigger
  build — ask Claude.)
- Works offline once loaded, except the fonts on first visit.
