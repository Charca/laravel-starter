import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './app'

const html = ReactDOMServer.renderToString(<App />)

dispatch(html)
