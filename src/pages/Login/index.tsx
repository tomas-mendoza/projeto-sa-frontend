import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import login from '../../data/login';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
  cpf: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async ({ cpf, password }) => {
    try {
      await login(cpf, password);
      navigate('/turmas');
    } catch(err: unknown) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-light">
        <main className="w-50 h-auto border p-3 rounded-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3' controlId="cpfInput">
              <Form.Label>CPF</Form.Label>
              <Form.Control type='text' maxLength={11} placeholder='Digite o seu CPF' { ... register('cpf', { required: true })} />
            </Form.Group>
            <Form.Group className='mb-3' controlId="passwordInput">
              <Form.Label>Senha</Form.Label>
              <Form.Control type='password' placeholder='Digite a sua senha' { ... register('password', { required: true })} />
            </Form.Group>
            <div className="d-flex">
              <Button variant='primary' type='submit'>
                Entrar
              </Button>
            </div>
          </Form>
        </main>
      </div>
    </>
  )
}