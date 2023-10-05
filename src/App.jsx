import { cars } from './assets/carsAPI'
import './App.css'
import Cars from './components/Cars'
import Button from './components/button'
import Organizmo from './components/organizmo'
function App() {
  return (
    <div>
      <Organizmo>
        <Cars cars={cars} />
        <Button button />
      </Organizmo>
    </div>
  )
}
export default App