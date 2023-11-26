import { SearcherContextProvider } from './context/SearcherContext'
import { Home } from './views/Home'
import { Header } from './components/Header/Header'
import './style.css'

export function App () {
  return (
    <SearcherContextProvider>
      <Header />
      <main className='App'>
        <Home />
      </main>
    </SearcherContextProvider>
  )
}
