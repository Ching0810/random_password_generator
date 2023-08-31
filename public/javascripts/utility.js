export const charCodes = new Map();
charCodes.set('lowercaseCheckbox', 'abcdefghijklmnopqrstuvwxyz');
charCodes.set('uppercaseCheckbox', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
charCodes.set('numberCheckbox', '0123456789');
charCodes.set('symbolCheckbox', '!#$%&*+-<=>?@^_~');

export function createPassword (totalChar, req) {
  const passwordLength = req.body.passwordLength
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    password += totalChar[Math.floor(Math.random() * totalChar.length)].toString()
  }
  return password
}

export function createCharSet (req, charCodes) {
  const checkBox = req.body
  
  let totalChar = ''
  charCodes.forEach((value, key) => {
    if (Object.keys(checkBox).find((element) => element === key)) {
      totalChar += value
    }
  })
  return totalChar
}