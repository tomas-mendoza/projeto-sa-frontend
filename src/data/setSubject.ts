import api from "../services/api";

export async function createSubject(name: string) {
  const response = await api({
    url: '/subjects',
    method: 'POST',
    body: {
      name
    }
  });

  return response;
}

export async function editSubject(id: number, name: string) {
  const response = await api({
    url: '/subjects/' + id,
    method: 'PATCH',
    body: {
      name
    }
  });

  return response;
}