import api from "../services/api";

interface UserResponse {
  name: string;
  birthdate: string;
  password: string;
  cpf: string;
  permission_level: number;
}

export async function getUserById(id: string, type: string) {
  const response = await api<{ data: UserResponse }>({
    url: `/${type}/${id}`,
    method: 'GET'
  });

  return response;
}

export async function getUser(type: string) {
  const response = await api<{ data: UserResponse }>({
    url: `/${type}`,
    method: 'GET'
  });

  return response;
}