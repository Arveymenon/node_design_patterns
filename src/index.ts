import express from 'express'
import BuilderRun from './design_patterns/builder/builder'
import { Factory } from './design_patterns/factory/factory'
import RunSingleton from './design_patterns/singleton/singleton'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})

// new RunSingleton()

// new Factory()

new BuilderRun()

app.listen(port, () => console.log(`Running on port ${port}`))