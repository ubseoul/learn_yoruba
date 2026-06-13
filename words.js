// ============================================================
//  YORUBA WORD DATA
//  To add a new round: copy a round block, paste it at the
//  end of the list (before the closing ]), change the id,
//  title, icon and words. Save, commit, done.
//
//  Each word needs:
//    yo     - Yoruba with tone marks (the "real" spelling)
//    simple - plain-letter version (easier to read at first)
//    pron   - rough pronunciation
//    en     - English meaning
//    ex     - an example: { yo: "...", en: "..." }
//             IMPORTANT: ex.yo must contain the exact `yo`
//             phrase somewhere in it (used by Challenge mode).
// ============================================================

const ROUNDS = [
  {
    id: 1,
    title: "Greetings & basics",
    icon: "wave",
    words: [
      {
        yo: "Ẹ káàárọ̀",
        simple: "E kaaro",
        pron: "eh kah-ah-ROH",
        en: "Good morning",
        ex: { yo: "Ẹ káàárọ̀, báwo ni?", en: "Good morning, how are you?" }
      },
      {
        yo: "Ẹ káàsán",
        simple: "E kaasan",
        pron: "eh kah-ah-SAHN",
        en: "Good afternoon",
        ex: { yo: "Ẹ káàsán o, ọ̀rẹ́ mi", en: "Good afternoon, my friend" }
      },
      {
        yo: "Ẹ káalẹ́",
        simple: "E kaale",
        pron: "eh kah-ah-LEH",
        en: "Good evening",
        ex: { yo: "Ẹ káalẹ́ o, màmá", en: "Good evening, mother" }
      },
      {
        yo: "Báwo ni",
        simple: "Bawo ni",
        pron: "BAH-woh nee",
        en: "How are you?",
        ex: { yo: "Báwo ni ọjọ́ rẹ?", en: "How is your day?" }
      },
      {
        yo: "Mo wà dáadáa",
        simple: "Mo wa daadaa",
        pron: "moh wah DAH-dah",
        en: "I am fine",
        ex: { yo: "Mo wà dáadáa, ẹ ṣé", en: "I am fine, thank you" }
      },
      {
        yo: "Ẹ ṣé",
        simple: "E se",
        pron: "eh SHEH",
        en: "Thank you",
        ex: { yo: "Ẹ ṣé púpọ̀ o", en: "Thank you very much" }
      },
      {
        yo: "Bẹ́ẹ̀ ni",
        simple: "Beeni",
        pron: "BEH-eh nee",
        en: "Yes",
        ex: { yo: "Bẹ́ẹ̀ ni, mo gbọ́", en: "Yes, I understand" }
      },
      {
        yo: "Bẹ́ẹ̀ kọ́",
        simple: "Beeko",
        pron: "BEH-eh KAW",
        en: "No",
        ex: { yo: "Bẹ́ẹ̀ kọ́, kò tọ́", en: "No, it is not right" }
      },
      {
        yo: "Orúkọ mi ni",
        simple: "Oruko mi ni",
        pron: "oh-ROO-kaw mee nee",
        en: "My name is",
        ex: { yo: "Orúkọ mi ni Adé", en: "My name is Ade" }
      },
      {
        yo: "Ó dàárọ̀",
        simple: "O daaro",
        pron: "oh DAH-roh",
        en: "Good night",
        ex: { yo: "Ó dàárọ̀, sùn dáadáa", en: "Good night, sleep well" }
      }
    ]
  },
  {
    id: 2,
    title: "Numbers 1–10",
    icon: "numbers",
    words: [
      {
        yo: "ọ̀kan",
        simple: "okan",
        pron: "aw-KAHN",
        en: "One",
        ex: { yo: "Mo fẹ́ ọ̀kan", en: "I want one" }
      },
      {
        yo: "méjì",
        simple: "meji",
        pron: "MEH-jee",
        en: "Two",
        ex: { yo: "Ọmọ méjì ni mo ní", en: "I have two children" }
      },
      {
        yo: "mẹ́ta",
        simple: "meta",
        pron: "MEH-tah",
        en: "Three",
        ex: { yo: "Ilé mẹ́ta wà níbẹ̀", en: "There are three houses there" }
      },
      {
        yo: "mẹ́rin",
        simple: "merin",
        pron: "MEH-reen",
        en: "Four",
        ex: { yo: "Ajá mẹ́rin ni wọ́n", en: "They are four dogs" }
      },
      {
        yo: "márùn",
        simple: "marun",
        pron: "MAH-roon",
        en: "Five",
        ex: { yo: "Ọjọ́ márùn ló kù", en: "Five days remain" }
      },
      {
        yo: "mẹ́fà",
        simple: "mefa",
        pron: "MEH-fah",
        en: "Six",
        ex: { yo: "Mo ra ẹyin mẹ́fà", en: "I bought six eggs" }
      },
      {
        yo: "méje",
        simple: "meje",
        pron: "MEH-jeh",
        en: "Seven",
        ex: { yo: "Ọ̀sẹ̀ kan ní ọjọ́ méje", en: "One week has seven days" }
      },
      {
        yo: "mẹ́jọ",
        simple: "mejo",
        pron: "MEH-jaw",
        en: "Eight",
        ex: { yo: "Aago mẹ́jọ ni", en: "It is eight o'clock" }
      },
      {
        yo: "mẹ́sàn",
        simple: "mesan",
        pron: "MEH-sahn",
        en: "Nine",
        ex: { yo: "Ọmọdé mẹ́sàn wà níbí", en: "Nine children are here" }
      },
      {
        yo: "mẹ́wàá",
        simple: "mewaa",
        pron: "MEH-wah",
        en: "Ten",
        ex: { yo: "Ìka ọwọ́ mẹ́wàá ni mo ní", en: "I have ten fingers" }
      }
    ]
  },
  {
    id: 3,
    title: "Everyday verbs",
    icon: "bolt",
    words: [
      {
        yo: "fẹ́",
        simple: "fe",
        pron: "feh (high tone)",
        en: "to want",
        ex: { yo: "Mo fẹ́ omi", en: "I want water" }
      },
      {
        yo: "jẹ",
        simple: "je",
        pron: "jeh (mid tone)",
        en: "to eat",
        ex: { yo: "Mo fẹ́ jẹ oúnjẹ", en: "I want to eat food" }
      },
      {
        yo: "mu",
        simple: "mu",
        pron: "moo (mid tone)",
        en: "to drink",
        ex: { yo: "Mo mu omi lójoojúmọ̀", en: "I drink water every day" }
      },
      {
        yo: "lọ",
        simple: "lo",
        pron: "law (mid tone)",
        en: "to go",
        ex: { yo: "Mo fẹ́ lọ ilé", en: "I want to go home" }
      },
      {
        yo: "wá",
        simple: "wa",
        pron: "wah (high tone)",
        en: "to come",
        ex: { yo: "Ẹ wá síbí", en: "Come here" }
      },
      {
        yo: "gbọ́",
        simple: "gbo",
        pron: "gbaw (high tone)",
        en: "to hear / understand",
        ex: { yo: "Mo gbọ́ ọ dáadáa", en: "I understand you well" }
      },
      {
        yo: "fẹ́ràn",
        simple: "feran",
        pron: "FEH-rahn",
        en: "to like / love",
        ex: { yo: "Mo fẹ́ràn èdè Yorùbá", en: "I like the Yoruba language" }
      },
      {
        yo: "ní",
        simple: "ni",
        pron: "nee (high tone)",
        en: "to have",
        ex: { yo: "Mo ní ìdílé nlá", en: "I have a big family" }
      },
      {
        yo: "sọ",
        simple: "so",
        pron: "shaw (mid tone)",
        en: "to say / speak",
        ex: { yo: "Mo sọ Yorùbá díẹ̀", en: "I speak a little Yoruba" }
      },
      {
        yo: "rí",
        simple: "ri",
        pron: "ree (high tone)",
        en: "to see",
        ex: { yo: "Mo rí rẹ lánàá", en: "I saw you yesterday" }
      }
    ]
  }
];
