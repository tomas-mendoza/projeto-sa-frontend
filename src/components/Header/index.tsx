import { Link } from "react-router-dom";

export default function Header() {
  const handleThemeChange = () => {
    const el = document.querySelector('body');

    if(el) {
      if(el.getAttribute('data-bs-theme') === 'dark') {
        el.setAttribute('data-bs-theme', 'light')
      } else {
        el.setAttribute('data-bs-theme', 'dark')
      }
    }
  }

  return (
    <header className="w-100 p-3 border-bottom d-flex">
      <div className="row w-100">
        <h5 className="m-0 col-2 text-center">Escola</h5>
        <nav className="col-7 d-flex gap-2">
          <Link to='/turmas'>Turmas</Link>
          <Link to='/materias'>Materias</Link>
        </nav>
        <div className="col-2 text-center">
          <button onClick={handleThemeChange} className="btn btn-primary">Trocar tema</button>
        </div>
      </div>
    </header>
  )
}