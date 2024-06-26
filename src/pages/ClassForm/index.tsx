import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';
import { createClass, editClass } from '../../data/setClass';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClassById } from '../../data/getClass';


interface IFormInput {
  description: string;
}

function ClassForm() {
  const { register, setValue, handleSubmit } = useForm<IFormInput>();
  const params = useParams();

  const handleCreate = async ({ description }: IFormInput) => {
    try {
      await createClass(description);
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  const handleEdit = async ({ description }: IFormInput) => {
    try {
      if(params.id) {
        await editClass(params.id, description)
      }
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if(params.id) {
          const response = await getClassById(params.id);

          setValue('description', response.data.data.name);
        }
      } catch(err: unknown) {
        window.alert(err);
      }
    }

    handleSearch();
  });

  return (
    <>
      <Header />
      <main className="container mt-4">
        <h1>Cadastro de Turma</h1>
        <Form onSubmit={handleSubmit(params.id ? handleEdit : handleCreate)}>
          <Form.Group className="mb-3 col-5">
            <Form.Label>Descrição da Turma</Form.Label>
            <Form.Control type="Descrição da turma" placeholder="Descrição da Turma" { ... register('description', { required: true })} required />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">Salvar</Button>
        </Form>
      </main>
    </>
  );
}

export default ClassForm;