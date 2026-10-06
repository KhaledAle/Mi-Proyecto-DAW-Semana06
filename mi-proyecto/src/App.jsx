import Ejercicio1 from './ejercicio1/Ejercicio1.jsx'
import Ejercicio2 from './ejercicio2/Ejercicio2.jsx'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-heading">
        <p className="app-kicker">Ejercicios de Laboratorio</p>
        <h1>Componentes, JSX, Typescript y Estilos en React</h1>
        <p className="app-intro">
          Desarrollo de Ejercicio 1 y Ejercicio 2 de la sección de React del curso de Frontend de Coderhouse. En el primer ejercicio se construye un layout con siete componentes, mientras que en el segundo se pasa un objeto como prop a través de una cadena de cuatro componentes.
        </p>
      </header>
      <Ejercicio1 />
      <Ejercicio2 />
    </main>
  )
}

export default App
