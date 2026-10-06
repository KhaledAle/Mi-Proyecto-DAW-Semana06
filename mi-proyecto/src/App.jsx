import Ejercicio1 from './ejercicio1/Ejercicio1.jsx'
import Ejercicio2 from './ejercicio2/Ejercicio2.jsx'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-heading">
        <p className="app-kicker">Ejercicios de Laboratorio</p>
        <h1>Componentes y composición</h1>
        <p className="app-intro">
          Dos ejercicios para explorar maquetación responsive y comunicación
          entre componentes mediante props.
        </p>
      </header>
      <Ejercicio1 />
      <Ejercicio2 />
    </main>
  )
}

export default App
