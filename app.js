import express from "express"
import { engine } from "express-handlebars"
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.redirect('/random_password_generator')
})

app.get('/random_password_generator', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})