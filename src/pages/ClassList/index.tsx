import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from 'react-bootstrap/Card';
import { Class } from "../../types/Class";
import { Button } from "react-bootstrap";
import { getClass } from "../../data/getClass";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function ClassList() {
  const [classes, setClasses] = useState<Class[]>([]);

  const handleDelete = async (id: number) => {
    try {
      await api({
        url: '/classes/' + id,
        method: 'DELETE'
      });

      const index = classes.findIndex((oneClass) => oneClass.id === id);

      if(index >= 0) {
        const newClasses = [ ... classes ];
        newClasses.splice(index, 1);
        
        setClasses(newClasses);
      }
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await getClass();

        setClasses(response.data.data);
      } catch(err: unknown) {
        window.alert(err);
      }
    }

    handleSearch();
  }, []);

  return (
    <>
      <Header />
      <main className="w-100 container mt-5">
        <div className="row">
          <h1>Turmas</h1>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <Link to='/cadastrar/turma' className="btn btn-primary">
              Cadastrar
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          {
          classes.length > 0 && classes.map((oneClass) => (
            <div className="col-12 col-lg 6 col-md-6" key={oneClass.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                    {oneClass.name}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link className='btn btn-primary' to={`/editar/turma/${oneClass.id}`}>Editar</Link>
                    <Button variant={'danger'} onClick={() => handleDelete(oneClass.id)}>Deletar</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
          }
        </div>
      </main>
    </>
  )
}