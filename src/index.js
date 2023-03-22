import React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
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
  faDownload,
} from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import HomePage from "./HomePage/HomePage"
import GenericPage from "./GenericPage/GenericPage"
import ElementsPage from "./ElementsPage/ElementsPage"
import siteData from "siteData"
import "./index.css"

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

const router = createBrowserRouter([
  {
    path: "/generic",
    Component: (props) => <GenericPage {...siteData} {...props} />,
  },
  {
    path: "/elements",
    Component: (props) => <ElementsPage {...siteData} {...props} />,
  },
  {
    path: "/",
    Component: (props) => <HomePage {...siteData} {...props} />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)
