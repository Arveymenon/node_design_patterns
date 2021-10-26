import express from 'express'

const app = express()
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send()
})

// new RunSingleton()

// new Factory()

// new BuilderRun()

// new Observer()

// new Strategy(1200)

// new Middleware(app)

app.listen(port, () => console.log(`Running on port ${port}`))