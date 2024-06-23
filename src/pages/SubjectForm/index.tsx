import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import env from "../../services/env";

interface IFormInputs {
  name: string;
  description: string;
}

export default function SubjectForm() {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  
  return (
    <>
      <Header />
      <main className="container mt-2">
        <div className="col-12">
          <h1 className="fs-3">Cadastro de matéria</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-2">
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