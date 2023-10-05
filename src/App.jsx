import { cars } from './assets/carsAPI'
import './App.css'
import Cars from './components/Cars'
import Button from './components/button'
import Card from './components/Card'
function App() {
  return (
    <div>
      <Card>
        <Cars cars={cars} />
        <Button button />
      </Card>
    </div>
  )
}
export default App