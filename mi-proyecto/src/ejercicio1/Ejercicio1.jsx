import './Ejercicio1.css'

function HeaderComponent() {
  return (
    <header className="layout-header">
      <span className="layout-index">01 / ESTRUCTURA</span>
      <h2>Maquetación semántica</h2>
    </header>
  )
}

function NavComponent() {
  return (
    <nav className="layout-nav" aria-label="Navegación del ejercicio">
      <a href="#articulo-1">Artículo 1</a>
      <a href="#articulo-2">Artículo 2</a>
      <a href="#panel-lateral">Panel lateral</a>
    </nav>
  )
}

function Article1Component() {
  return (
    <article className="layout-article" id="articulo-1">
      <span className="layout-label">ARTICLE 01</span>
      <h3>Contenido principal</h3>
      <p>
        Cada región usa una etiqueta semántica y conserva su lugar al cambiar
        entre escritorio, tablet y móvil.
      </p>
    </article>
  )
}

function Article2Component() {
  return (
    <article className="layout-article" id="articulo-2">
      <span className="layout-label">ARTICLE 02</span>
      <h3>Diseño adaptable</h3>
      <p>
        Flexbox organiza los artículos, mientras las media queries reorganizan
        el panel lateral en pantallas más estrechas.
      </p>
    </article>
  )
}

function MainSectionComponent() {
  return (
    <section className="layout-main" aria-label="Artículos principales">
      <div className="layout-main-heading">
        <span className="layout-label">MAIN SECTION</span>
        <span className="layout-main-note">Dos artículos</span>
      </div>
      <div className="layout-articles">
        <Article1Component />
        <Article2Component />
      </div>
    </section>
  )
}

function AsideComponent() {
  return (
    <aside className="layout-aside" id="panel-lateral">
      <span className="layout-label">ASIDE</span>
      <h3>Información lateral</h3>
      <p>En escritorio acompaña al contenido; en tablet baja y en móvil se apila.</p>
    </aside>
  )
}

function FooterComponent() {
  return (
    <footer className="layout-footer">
      <span>FOOTER</span>
      <span>Fin del ejercicio 1</span>
    </footer>
  )
}

function Ejercicio1() {
  return (
    <section className="exercise exercise-one" aria-labelledby="exercise-one-title">
      <div className="exercise-title-row">
        <div>
          <p className="exercise-eyebrow">Ejercicio 1</p>
          <h2 id="exercise-one-title">Siete componentes, un layout</h2>
        </div>
      </div>
      <div className="layout-demo">
        <HeaderComponent />
        <NavComponent />
        <div className="layout-content">
          <MainSectionComponent />
          <AsideComponent />
        </div>
        <FooterComponent />
      </div>
    </section>
  )
}

export default Ejercicio1
