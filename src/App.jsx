import 'bootstrap/dist/css/bootstrap.min.css';
import Saludar from './components/Saludar';

function App() {
  

  return (
    <>
      <h1 className='text-center pt-5 display-1'>Bienvenidos</h1>
      <Saludar hola ='my friend!'></Saludar>
    </>
  )
}

export default App
