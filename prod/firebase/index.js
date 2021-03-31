/*eslint-disable*/
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const app = express()
const cors = require('cors')


const config = {
  dev: false,
  debug: true,
  buildDir: "nuxt",
  build: {
    publicPath: "/assets/"
  }
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
    return isReady
  })
  .catch((e) => {
    console.warn(e)
    process.exit(1)
  })
async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=600, s-maxage=600')
  await nuxt.render(req, res)
}

app.use(cors({ origin: true }))
app.get('*', handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions
  .runWith({ memory: '2GB', timeoutSeconds: 120 })
  .https.onRequest(app)


