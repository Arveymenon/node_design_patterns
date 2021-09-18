import express from 'express'
import Strategy from './design_patterns/strategy/strategy'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})
new Strategy(1200)

app.listen(port, () => console.log(`Running on port ${port}`))