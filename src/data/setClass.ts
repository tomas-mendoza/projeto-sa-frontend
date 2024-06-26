import api from "../services/api";

export async function createClass(name: string) {
  const response = await api({
    url: '/classes',
    method: 'POST',
    body: {
      name
    }
  });

  return response;
}

export async function editClass(id: string, name: string) {
  const response = await api({
    url: '/classes/' + id,
    method: 'PATCH',
    body: {
      name
    }
  });

  return response;
}