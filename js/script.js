//Word List and Specials Characters
const words = [
  "accept",
  "achieve",
  "admire",
  "adore",
  "advance",
  "alleviate",
  "amaze",
  "amuse",
  "appreciate",
  "approve",
  "ascend",
  "assist",
  "astonish",
  "attract",
  "balance",
  "bless",
  "blossom",
  "bond",
  "boost",
  "brighten",
  "celebrate",
  "charm",
  "cheer",
  "choose",
  "clarify",
  "comfort",
  "commend",
  "compose",
  "conquer",
  "create",
  "cultivate",
  "delight",
  "discover",
  "ease",
  "educate",
  "elevate",
  "embrace",
  "empower",
  "encourage",
  "enlighten",
  "enrich",
  "entertain",
  "excel",
  "excite",
  "expand",
  "explore",
  "express",
  "fascinate",
  "flourish",
  "forgive",
  "fulfill",
  "gather",
  "generate",
  "gladden",
  "grace",
  "grow",
  "harmonize",
  "heal",
  "honor",
  "illuminate",
  "imagine",
  "improve",
  "increase",
  "inspire",
  "integrate",
  "invite",
  "jubilate",
  "laugh",
  "learn",
  "liberate",
  "love",
  "manifest",
  "meditate",
  "motivate",
  "nourish",
  "nurture",
  "open",
  "optimize",
  "overcome",
  "pacify",
  "participate",
  "passionate",
  "persevere",
  "pioneer",
  "play",
  "pleasure",
  "praise",
  "progress",
  "prosper",
  "radiate",
  "rejoice",
  "renew",
  "rescue",
  "respect",
  "restore",
  "revel",
  "revitalize",
  "revive",
  "savor",
  "secure",
  "share",
  "smile",
  "soar",
  "sparkle",
  "succeed",
  "support",
  "surpass",
  "thrive",
  "transform",
  "triumph",
  "trust",
  "unify",
  "uplift",
  "validate",
  "value",
  "venture",
  "vibrant",
  "victorious",
  "vitalize",
  "volunteer",
  "warm",
  "welcome",
  "wonder",
  "work",
  "worship",
  "yearn",
  "zeal",
  "absorb",
  "accomplish",
  "adventure",
  "aid",
  "awaken",
  "beautify",
  "believe",
  "bloom",
  "breathe",
  "captivate",
  "cherish",
  "collaborate",
  "contribute",
  "courage",
  "create",
  "dedicate",
  "delight",
  "devote",
  "discovery",
  "embody",
  "empower",
  "enchant",
  "endure",
  "enlighten",
  "enrich",
  "envision",
  "expansion",
  "fascinate",
  "foster",
  "free",
  "fulfillment",
  "genuflect",
  "glow",
  "happiness",
  "heal",
  "imagine",
  "innovate",
  "inspire",
  "intuition",
  "joy",
  "kindness",
  "liberate",
  "magnify",
  "mastery",
  "nurture",
  "overflow",
  "passion",
  "persevere",
  "playful",
  "possibility",
  "prosperity",
  "purity",
  "radiant",
  "rejoice",
  "renewal",
  "resourceful",
  "revitalize",
  "satisfy",
  "serenity",
  "simplify",
  "soothe",
  "spark",
  "spontaneity",
  "strengthen",
  "sustain",
  "thrive",
  "tranquil",
  "triumph",
  "unite",
  "unleash",
  "uplift",
  "vibrant",
  "victory",
  "wholeness",
  "wisdom",
  "wonder",
  "worth",
  "yearning",
  "youthful",
  "zeal",
  "zenith",
  "ability",
  "absence",
  "abundance",
  "acceptance",
  "accomplishment",
  "accuracy",
  "action",
  "admiration",
  "adventure",
  "affection",
  "agility",
  "alertness",
  "ambition",
  "amusement",
  "anticipation",
  "appreciation",
  "assertiveness",
  "assurance",
  "attention",
  "attraction",
  "audacity",
  "authority",
  "awareness",
  "balance",
  "beauty",
  "belonging",
  "benevolence",
  "bliss",
  "boldness",
  "bravery",
  "brightness",
  "brilliance",
  "calmness",
  "candor",
  "capability",
  "care",
  "celebration",
  "center",
  "certainty",
  "challenge",
  "change",
  "charity",
  "charm",
  "clarity",
  "comfort",
  "commitment",
  "compassion",
  "competence",
  "composure",
  "confidence",
  "connection",
  "consciousness",
  "contentment",
  "courage",
  "courtesy",
  "creation",
  "credibility",
  "curiosity",
  "daring",
  "dedication",
  "delight",
  "depth",
  "desire",
  "determination",
  "devotion",
  "diligence",
  "discipline",
  "discovery",
  "ease",
  "ecstasy",
  "elegance",
  "eloquence",
  "empathy",
  "endurance",
  "energy",
  "enjoyment",
  "enthusiasm",
  "essence",
  "excellence",
  "experience",
  "exploration",
  "expressiveness",
  "faith",
  "fame",
  "family",
  "fascination",
  "fearlessness",
  "fidelity",
  "flexibility",
  "focus",
  "forgiveness",
  "fortune",
  "freedom",
  "friendliness",
  "fulfillment",
  "generosity",
  "genius",
  "genuine",
  "glory",
  "grace",
  "gratitude",
  "growth",
  "happiness",
  "harmony",
  "healing",
  "health",
  "heart",
  "helpfulness",
  "honesty",
  "hope",
  "humility",
  "humor",
  "imagination",
  "immortality",
  "improvement",
  "independence",
  "individuality",
  "innocence",
  "innovation",
  "insight",
  "inspiration",
  "integrity",
  "intelligence",
  "intensity",
  "intimacy",
  "intuition",
  "invention",
  "joy",
  "kindness",
  "knowledge",
  "laughter",
  "leadership",
  "learning",
  "liberation",
  "life",
  "light",
  "limitlessness",
  "listening",
  "love",
  "luck",
  "mastery",
  "meaning",
  "mindfulness",
  "miracle",
  "mystery",
  "necessity",
  "nurture",
  "openness",
  "opportunity",
  "optimism",
  "originality",
  "passion",
  "patience",
  "peace",
  "perception",
  "perseverance",
  "persistence",
  "playfulness",
  "pleasure",
  "potential",
  "power",
  "presence",
  "pride",
  "progress",
  "prosperity",
  "purpose",
  "quiet",
  "radiance",
  "reality",
  "rebirth",
  "recognition",
  "reflection",
  "reliability",
  "relief",
  "renewal",
  "resilience",
  "resolution",
  "resourcefulness",
  "respect",
  "responsibility",
  "rest",
  "revelation",
  "richness",
  "satisfaction",
  "security",
  "self-care",
  "self-expression",
  "selflessness",
  "serenity",
  "service",
  "shelter",
  "simplicity",
  "sincerity",
  "skill",
  "solitude",
  "spontaneity",
  "stability",
  "strength",
  "success",
  "sufficiency",
  "support",
  "surprise",
  "tenderness",
  "thankfulness",
  "thoroughness",
  "thrill",
  "timelessness",
  "tolerance",
  "tranquility",
  "transformation",
  "trust",
  "truth",
  "understanding",
  "uniqueness",
  "unity",
  "valor",
  "vibrancy",
  "victory",
  "vitality",
  "warmth",
  "wealth",
  "wholeness",
  "wisdom",
  "wonder",
  "worthiness",
  "youth",
  "zeal",
];

const specialCharactersMatch = {
  a: ["@"],
  b: ["6"],
  c: ["3"],
  e: ["9"],
  g: ["9"],
  i: ["1"],
  q: ["9"],
  s: ["$", "5"],
  t: ["+"],
  z: ["2"],
};

const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];

// -----------  Password generating functions ---------//

// Simple password genrator function
const simplePassword = function (
  wordList = words,
  specialCharactersList = specialCharacters
) {
  let password = "";
  // Adds Word One
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  // Adds Word Two
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  password += Math.floor(Math.random() * 100 ) + 1;
  password +=
    specialCharactersList[
      Math.floor(Math.random() * specialCharactersList.length) + 1
    ];
  // Ensures that password is less than 12 characters
  if (password.length > 12) {
    return simplePassword(); // Return the recursive call
  } else {
    return password;
  }
};

// Strong password genrator function
const strongPassword = function (
  wordList = words,
  specialCharactersList = specialCharacters,
  specialCharactersMatchList = specialCharactersMatch
) {
  let password = "";

  // Helper function to replace special characters
  const replaceSpecialCharacters = (str) => {
    const regexPattern = new RegExp(
      `[${Object.keys(specialCharactersMatchList).join("")}]`,
      "g"
    );
    return str.replace(regexPattern, (match) => {
      const correspondingCharacters = specialCharactersMatchList[match];
      return correspondingCharacters[
        Math.floor(Math.random() * correspondingCharacters.length)
      ];
    });
  };

  // Add two random words from wordList
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  // Add a random special character from specialCharactersList
  password +=
    specialCharactersList[
      Math.floor(Math.random() * specialCharactersList.length) + 1
    ];

  // Ensures that password is less than 14 characters
  if (password.length > 14) {
    return strongPassword(); // Return the recursive call
  } else {
    // Replace special characters in password
    password = replaceSpecialCharacters(password);
    return password;
  }
};

//----------- DOM Manipulation -----------------/

const passwordResult = document.getElementById("password");
const simplePasswordButton = document.getElementById("simple-password");
const strongPasswordButton = document.getElementById("strong-password");
const copyButton = document.getElementById("copy-icon");
const message = document.getElementById("message");
const appButtons = document.querySelectorAll(".btn");

let appButtonClicks = 0; // Used for updating message from message list

const messageList = [
  "Here's a password I made just for you!",
  "Sure, no problem.",
  "Sure, here's another one.",
  "OK. Here you are!",
  "Yep. Another one for you!",
  "I love passwords!",
  "Remember to keep your passwords safe.",
  "I still love passwords!",
  "Passwords, passwords, passwords, here you go!",
];

const passwordAndMessageUpdate = function (
  passwordFunction = simplePassword,
  resultmessage = messageList[0]
) {
  const newPassword = passwordFunction();
  passwordResult.innerText = newPassword;
  message.innerText = resultmessage;
};

// Generates password and message upon browser loading
passwordAndMessageUpdate();

//Calculate the number of button clicks to generate message from messageList creating dynamic messaging

appButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    appButtonClicks++;
    if (appButtonClicks > 8) {
      appButtonClicks = 0;
    }
    message.innerText = messageList[appButtonClicks];
  });
});

//Generate Simple Password
simplePasswordButton.addEventListener('click', () => passwordResult.innerText = simplePassword());

//Generate Strong Password
strongPasswordButton.addEventListener('click', () => passwordResult.innerText = strongPassword());

//Password copy functionality
copyButton.addEventListener('click', () =>{
  const currentPassword = passwordResult.textContent;
  navigator.clipboard.writeText(currentPassword);
  copyButton.classList.add("copied")
  setTimeout(function(){
    copyButton.classList.remove("copied")
  },500); // for 1s = 1000ms
})
