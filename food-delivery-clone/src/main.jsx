import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./components/About.jsx"
import Body from './components/Body.jsx'
import Contact from './components/Contact.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>
      }
    ],
    errorElement: <Error/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
