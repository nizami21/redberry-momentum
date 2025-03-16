import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "/src/index.css"

import TasksPage from '/src/pages/TasksPage.jsx'
import TaskCreationPage from '/src/pages/TaskCreationPage'
import TaskInnerPage from '/src/pages/TaskInnerPage'
import Page404 from '/src/pages/Page404'
import { APIProvider } from './contexts/APIProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <APIProvider>
        <Routes>
          <Route path='/' element={<TasksPage />} />
          <Route path='/create' element={<TaskCreationPage />} />
          <Route path='task/:id' element={<TaskInnerPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </APIProvider>
    </BrowserRouter>
  </StrictMode>,
)
