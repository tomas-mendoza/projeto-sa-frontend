import { useEffect } from "react";
import Header from "../../components/Header";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getSubjectById } from "../../data/getSubject";
import { createSubject, editSubject } from "../../data/setSubject";

interface IFormInputs {
  name: string;
}

export default function SubjectForm() {
  const { register, handleSubmit, setValue } = useForm<IFormInputs>();
  const params = useParams();

  useEffect(() => {
    const handleGetSubject = async () => {
      if(params.id) {
        const response = await getSubjectById(parseInt(params.id));

        setValue('name', response.data.data.name);
      }
    }

    handleGetSubject();
  }, []);

  const handleCreate = async (data: IFormInputs) => {
    try {
      await createSubject(data.name);
      window.alert('Matéria criada com sucesso');
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  const handleEdit = async (data: IFormInputs) => {
    try {
      if(params.id) {
        await editSubject(parseInt(params.id), data.name);
        window.alert('Matéria atualizada com sucesso');
      }
    } catch(err: unknown) {
      window.alert(err);
    }
  }
  
  return (
    <>
      <Header />
      <main className="container mt-2">
        <div className="col-12">
          <h1 className="fs-3">Cadastro de matéria</h1>
        </div>
        <Form onSubmit={handleSubmit(params.id ? handleEdit : handleCreate)} className="mt-2">
          <Form.Group className="col-6 mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Insira o nome da matéria" { ... register('name', { required: true })} required />
            <Form.Control.Feedback type="invalid">
              É necessário inserir o nome da matéria
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </main>
    </>
  )
}