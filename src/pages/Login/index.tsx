import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  type: 'student' | 'teacher';
  cpf: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <>
      <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-light">
        <main className="w-50 h-auto border p-3 rounded-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <div className="w-100 h-100 d-flex justify-content-center gap-5">
                <Form.Check 
                  type='radio'
                  label='Professor'
                  id='teacher'
                  value='teacher'
                  { ... register('type', { required: true })  }
                />
                <Form.Check 
                  type='radio'
                  label='Aluno'
                  id='student'
                  value='student'
                  { ... register('type', { required: true }) }
                />
              </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId="cpfInput">
              <Form.Label>CPF</Form.Label>
              <Form.Control type='text' placeholder='Digite o seu CPF' { ... register('cpf', { required: true })} />
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