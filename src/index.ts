import express from 'express'
import BuilderRun from './design_patterns/builder/builder'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})

new BuilderRun()

app.listen(port, () => console.log(`Running on port ${port}`))