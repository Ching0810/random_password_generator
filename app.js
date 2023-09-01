import express, { urlencoded } from "express"
import { engine } from "express-handlebars"
import { charSets, createCharExclude, createPassword, checkDisplayMode } from './public/javascripts/utility.js'
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
  res.render('result', { displayMode: checkDisplayMode(req) })
})

app.post('/random_password_generator/result', (req, res) => {
  res.render('result', { password: createPassword(createCharExclude(req, charSets), req), displayMode: checkDisplayMode(req) })
})

app.listen(port, () => {
  console.log(`Random password generator app listening on port http://localhost:${port}`)
})