import Props from "./components/Props"
import vinita from './assets/vinita.jpg'

function App() {
  return (
    <div className="container">
      <Props name='Vinita' image={vinita} style={{borderRadius:"15px"}}/>
    </div>

  )
}
export default App
