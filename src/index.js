import React from 'react'
import {
  Router,
  Route,
} from "react-router-dom"
import { createBrowserHistory } from 'history'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn, faFacebookF, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import HomePage from './HomePage/HomePage'
import GenericPage from './GenericPage/GenericPage'
import ElementsPage from './ElementsPage/ElementsPage'
import './index.css'

const history = createBrowserHistory()

library.add(fab, faCheckSquare, faCode, faLinkedinIn, faFacebookF, faGithub, faTwitter, faInstagram)

function App() {
  return (
    <Router history={history}>
      <Route exact path='/generic' component={GenericPage} />
      <Route exact path='/elements' component={ElementsPage} />
      <Route exact path='/' component={HomePage} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))