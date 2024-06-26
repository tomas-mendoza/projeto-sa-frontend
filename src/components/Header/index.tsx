import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full p-3 border-bottom d-flex gap-5 align-items-center">
      <h5 className="m-0">Escola</h5>
      <nav className="d-flex gap-2">
        <Link to='/turmas'>Turmas</Link>
        <Link to='/materias'>Materias</Link>
      </nav>
    </header>
  )
}