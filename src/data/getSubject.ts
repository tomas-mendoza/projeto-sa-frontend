import api from "../services/api";

export interface SubjectResponse {
  name: string;
}

export async function getSubjectById(id: number) {
  const response = await api<{ data: SubjectResponse }>({
    url: `/subjects/${id}`,
    method: 'GET'
  });

  return response;
}