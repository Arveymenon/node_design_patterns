import express from 'express'
import Observer from './design_patterns/observer/observer'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})

new Observer()

app.listen(port, () => console.log(`Running on port ${port}`))