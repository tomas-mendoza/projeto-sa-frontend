import api from "../services/api";

interface Props {
  type: 'students' | 'teachers' | 'admins';
  name: string;
  cpf: string;
  birthdate: string;
  password: string;
}

export async function createUser({ birthdate, cpf, name, password, type }: Props) {
  const response = await api({
    url: `/${type}/`,
    method: 'POST',
    body: {
      name,
      password,
      cpf,
      birthdate: new Date(birthdate).toISOString()
    }
  });

  return response;
}