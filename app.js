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

app.post('/random_password_generator/result', (req, res) => {
  const checkBox = req.body
  console.log(checkBox)
})

app.listen(port, () => {
  console.log(`Random password generator app listening on port http://localhost:${port}`)
})