import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './routes/index.tsx'
import { RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from "./app/store"
import LoadingScreen from './components/custom/LoadingScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <LoadingScreen />
    <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
