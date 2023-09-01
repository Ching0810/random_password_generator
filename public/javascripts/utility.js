export const charSets = new Map();
charSets.set('lowercaseCheckbox', 'abcdefghijklmnopqrstuvwxyz');
charSets.set('uppercaseCheckbox', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
charSets.set('numberCheckbox', '0123456789');
charSets.set('symbolCheckbox', '!#$%&*+-<=>?@^_~');

function createCharSet (req, charSets) {
  const reqBody = req.body
  let totalChar = ''
  charSets.forEach((value, key) => {
    if (Object.keys(reqBody).find((element) => element === key)) {
      totalChar += value
    }
  })
  return totalChar
}

export function createCharExclude (req, charSets) {
  if (req.body.excludeCharacters !== 0) {
    const excludeCharacters = Array.from(req.body.excludeCharacters)
    let charExclude = Array.from(createCharSet(req, charSets)).filter(
      char => !excludeCharacters.includes(char)
      ).join('')
    return charExclude
  } else {
    return createCharSet(req, charSets)
  }
}

export function createPassword (totalChar, req) {
  const passwordLength = req.body.passwordLength
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    password += totalChar[Math.floor(Math.random() * totalChar.length)].toString()
  }
  return password
}

export function checkDisplayMode (req) {
  const requestMethod = req.method
  let displayMode = ''
  if (requestMethod === 'GET') {
    displayMode = 'd-none'
  } else if (requestMethod === 'POST') {
    displayMode = 'd-done'
  }
  return displayMode
}