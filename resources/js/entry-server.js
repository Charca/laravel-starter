import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from './app'

const sheet = new ServerStyleSheet()
let html
let styleTags

try {
  html = renderToString(sheet.collectStyles(<App />))
  styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
} catch (error) {
  console.error(error)
} finally {
  sheet.seal()
  dispatch({
    styles: styleTags,
    html,
  })
}
