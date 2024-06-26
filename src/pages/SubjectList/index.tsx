import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Subject } from "../../types/Subject";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Button, Card } from "react-bootstrap";

export default function SubjectList() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    const handleDelete = async (id: number) => {
        try {
            await api({
                url: '/subjects/' + id,
                method: 'DELETE'
            });

            const index = subjects.findIndex((oldSubject) => oldSubject.id === id);

            if(index >= 0) {
                const newSubjects = [ ... subjects ];

                newSubjects.splice(index, 1);

                setSubjects(newSubjects);
            }
        } catch(err: unknown) {
            window.alert(err);
        }
    }

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await api<{ data: Subject[] }>({
                    url: '/subjects',
                    method: 'GET'
                });

                setSubjects(response.data.data);
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
                    <h1>Matérias</h1>
                </div>
                <div className="row mt-4">
                    <div className="col-3">
                        <Link to='/cadastrar/materia' className="btn btn-primary">
                            Cadastrar
                        </Link>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                    subjects.length > 0 && subjects.map((subject) => (
                        <div className="col-12 col-lg 6 col-md-6" key={subject.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Text>
                                    {subject.name}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary' to={`/editar/materia/${subject.id}`}>Editar</Link>
                                    <Button variant={'danger'} onClick={() => handleDelete(subject.id)}>Deletar</Button>
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