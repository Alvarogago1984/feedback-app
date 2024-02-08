import { ConteinerApp } from './StyledApp'
import { ContentBody, Sidebar } from './components'

function App() {
  return (
    <ConteinerApp>
      <Sidebar />
      <ContentBody />
    </ConteinerApp>
  )
}

export default App
