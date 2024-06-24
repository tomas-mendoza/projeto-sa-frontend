import { useEffect } from "react";
import Header from "../../components/Header";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createUser } from "../../data/setUser";
import { getUserById } from "../../data/getUser";

interface IFormInputs {
  type: 'students' | 'teachers' | 'admins';
  name: string;
  cpf: string;
  birthdate: string;
  password: string;
}

export default function UserForm() {
  const { register, handleSubmit, setValue } = useForm<IFormInputs>();
  const params = useParams();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if(params.id) {
          const response = await getUserById(params.id, "admin");

          setValue("name", response.data.data.name);
          setValue("cpf", response.data.data.cpf);
          setValue("birthdate", response.data.data.birthdate);
          
          if(response.data.data.permission_level === 0) {
            setValue("type", "admins");
          }

          if(response.data.data.permission_level === 1) {
            setValue("type", "teachers");
          }

          if(response.data.data.permission_level === 2) {
            setValue("type", "students");
          }
        }
      } catch(err: unknown) {
        window.alert(err);
      }
    }

    handleSearch();
  });

  const handleCreate = async (data: IFormInputs) => {
    try {
      await createUser(data);
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  const handleEdit = async () => {
    try {
      
    } catch(err: unknown) {
      window.alert(err);
    }
  }

  return (
    <>
      <Header />
      <main className="container mt-2">
        <div className="col-12">
          <h1 className="fs-3">{ params.id ? 'Edição' : 'Cadastro'} de matéria</h1>
        </div>
        <Form onSubmit={handleSubmit(params.id ? handleEdit : handleCreate)} className="mt-2">
        <Form.Group className="col-6 mb-3" controlId="type">
            <Form.Label>Tipo de usuário</Form.Label>
            <Form.Select { ... register('type', { required: true })} >
              <option value="students">Aluno</option>
              <option value="teachers">Professor</option>
              <option value="admins">Administrador</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-6 mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Insira o nome do usuário" { ... register('name', { required: true })} required />
          </Form.Group>
          <Form.Group className="col-6 mb-3" controlId="cpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control maxLength={11} type="text" placeholder="Insira o CPF do usuário" { ... register('cpf', { required: true })} required />
          </Form.Group>
          <Form.Group className="col-6 mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Insira a senha do usuário" { ... register('password', { required: true })} required />
          </Form.Group>
          <Form.Group className="col-6 mb-3" controlId="birthdate">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control type="date"  { ... register('birthdate', { required: true })} required />
          </Form.Group>
          <Button variant="primary" type="submit">
          { params.id ? 'Editar' : 'Cadastrar'}
          </Button>
        </Form>
      </main>
    </>
  )
}