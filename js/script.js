const { words, specialCharacters, specialCharactersMatch } = require("./words");

const simplePassword = function (
  wordList = words,
  specialCharactersList = specialCharacters
) {
  let password = "";
  // Adds Word One
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  // Adds Word Two
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  password +=
    specialCharactersList[
      Math.floor(Math.random() * specialCharactersList.length) + 1
    ];
  //Ensures that password is less than 12 characters
  if (password.length > 12) {
    return simplePassword(); // Return the recursive call
  } else {
    return password;
  }
};

const strongPassword = function (
  wordList = words,
  specialCharactersList = specialCharacters,
  specialCharactersMatchList = specialCharactersMatch
) {
  let password = "";
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  password += wordList[Math.floor(Math.random() * wordList.length) + 1];
  password +=
    specialCharactersList[
      Math.floor(Math.random() * specialCharactersList.length) + 1
    ];

  // Replacing alphabets with matching special characters  --- Not working
  for (let key in specialCharactersMatchList) {
    let regex = new RegExp("\\b" + key + "\\b", "g");
    for (let value of specialCharactersMatchList[key]) {
      console.log(value);
      password = password.replace(regex, value); // Assign the result back to password
    }
  }

  console.log(password);
};
strongPassword();
