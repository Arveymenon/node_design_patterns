import express from 'express'
import BuilderRun from './design_patterns/builder/builder'
import Middleware from './design_patterns/chain_of_responsiblity/middleware'
import { Factory } from './design_patterns/factory/factory'
import Observer from './design_patterns/observer/observer'
import RunSingleton from './design_patterns/singleton/singleton'
import Strategy from './design_patterns/strategy/strategy'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})
new Middleware(app)

// new RunSingleton()

// new Factory()

// new BuilderRun()

// new Observer()

// new Strategy(1200)


app.listen(port, () => console.log(`Running on port ${port}`))