import './Ejercicio2.css'

function Componente4({ persona }) {
  return (
    <div className="nest-level nest-four">
      <p className="nest-label">Componente4 · recibe persona</p>
      <article className="person-card">
        <div className="person-avatar" aria-hidden="true">
          {persona.nombre.charAt(0)}
        </div>
        <div>
          <p className="person-card-kicker">Ficha personal</p>
          <h3>{persona.nombre}</h3>
          <dl>
            <div>
              <dt>Dirección</dt>
              <dd>{persona.direccion}</dd>
            </div>
            <div>
              <dt>Ciudad</dt>
              <dd>{persona.ciudad}</dd>
            </div>
          </dl>
        </div>
      </article>
    </div>
  )
}

function Componente3({ persona }) {
  return (
    <div className="nest-level nest-three">
      <p className="nest-label">Componente3</p>
      <Componente4 persona={persona} />
    </div>
  )
}

function Componente2({ persona }) {
  return (
    <div className="nest-level nest-two">
      <p className="nest-label">Componente2</p>
      {/* El objeto se reenvía sin cambios hasta el componente que lo muestra. */}
      <Componente3 persona={persona} />
    </div>
  )
}

function Componente1() {
  // Componente1 define los datos y los inicia en la cadena de props.
  const persona = {
    nombre: 'Jaime',
    direccion: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  }

  return (
    <div className="nest-level nest-one">
      <p className="nest-label">Componente1 · define persona</p>
      <Componente2 persona={persona} />
    </div>
  )
}

function Ejercicio2() {
  return (
    <section className="exercise exercise-two" aria-labelledby="exercise-two-title">
      <div className="exercise-title-row">
        <div>
          <p className="exercise-eyebrow">Ejercicio 2</p>
          <h2 id="exercise-two-title">Props en cadena</h2>
        </div>
        <span className="exercise-tag">Prop drilling</span>
      </div>
      <Componente1 />
    </section>
  )
}

export default Ejercicio2
