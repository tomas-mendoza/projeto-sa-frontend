import api from "../services/api";

interface LoginResponse {
  message: string;
  token: string;
}

export default async function login(cpf: string, password: string) {
  const response = await api<{ data: LoginResponse }>({
    method: 'POST',
    url: '/auth',
    body: {
      cpf,
      password
    }
  });

  return response;
}