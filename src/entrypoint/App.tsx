import { ConteinerApp } from './app.styled'
import { ContentBody, Sidebar } from '../pages/Principal Page'

function App() {
  return (
    <ConteinerApp>
      <Sidebar />
      <ContentBody />
    </ConteinerApp>
  )
}

export default App
