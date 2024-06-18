import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../components/Header';

function CreateClass() {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <h1>Cadastro de Turma</h1>
        <Form>
          <Form.Group className="mb-3 col-5">
            <Form.Label>Descrição da Turma</Form.Label>
            <Form.Control type="Descrição da turma" placeholder="Descrição da Turma" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">Salvar</Button>
        </Form>
      </main>
    </>
  );
}

export default CreateClass;