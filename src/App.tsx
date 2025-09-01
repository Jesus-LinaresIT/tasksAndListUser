import { Provider } from 'react-redux'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './store'
import { TasksPage } from './features/tasks/TasksPage'
import { ListPage } from './pages/ListPage'


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/listed" element={<ListPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
