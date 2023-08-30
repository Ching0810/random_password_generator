import express, { urlencoded } from "express"
import { engine } from "express-handlebars"
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/random_password_generator')
})

app.get('/random_password_generator', (req, res) => {
  res.render('home')
})

const charCodes = new Map();
charCodes.set('lowercaseCheckbox', 'abcdefghijklmnopqrstuvwxyz');
charCodes.set('uppercaseCheckbox', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
charCodes.set('numberCheckbox', '0123456789');
charCodes.set('symbolCheckbox', '!#$%&*+-<=>?@^_~');

function createPassword (totalChar, passwordLength) {
  let str = ''
  for (let i = 0; i < passwordLength; i++) {
    str += totalChar[Math.floor(Math.random() * totalChar.length)].toString()
  }
  return str
}

app.post('/random_password_generator/result', (req, res) => {
  const checkBox = req.body
  const passwordLength = req.body.passwordLength
  let totalChar = ''
  charCodes.forEach((value, key) => {
    if (Object.keys(checkBox).find((element) => element === key)) {
      totalChar += value
      console.log(totalChar)
    }
  })
  const password = createPassword(totalChar, passwordLength)
  res.render('result', { password })
})

app.listen(port, () => {
  console.log(`Random password generator app listening on port http://localhost:${port}`)
})