import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn, faFacebookF, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import App from './App'
import './index.css';

library.add(fab, faCheckSquare, faCode, faLinkedinIn, faFacebookF, faGithub, faTwitter, faInstagram)

ReactDOM.render(<App />, document.getElementById('root'));