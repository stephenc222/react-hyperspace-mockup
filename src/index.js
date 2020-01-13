import React from 'react'
import {
  Router,
  Route,
} from "react-router-dom"
import { createBrowserHistory } from 'history'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare,
  faCode,
  faCog,
  faDesktop,
  faGem,
  faLink,
  faLock,
  faSave,
  faUpload,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import {
  fab,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import HomePage from './HomePage/HomePage'
import GenericPage from './GenericPage/GenericPage'
import ElementsPage from './ElementsPage/ElementsPage'
import siteData from 'siteData'
import './index.css'

const history = createBrowserHistory()

library.add(
  fab,
  faCheckSquare,
  faCog,
  faCode,
  faDesktop,
  faGem,
  faLink,
  faLock,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
  faSave,
  faUpload,
  faDownload
)

function App() {
  return (
    <Router history={history}>
      <Route exact path='/generic' render={props => <GenericPage {...siteData} {...props} />} />
      <Route exact path='/elements' render={props => <ElementsPage {...siteData} {...props} />} />
      <Route exact path='/' render={props => <HomePage {...siteData} {...props} />} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))