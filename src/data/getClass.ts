import api from "../services/api";
import { Class } from "../types/Class";
import { Subject } from "../types/Subject";
import { User } from "../types/User";

interface ClassResponse {
  data: {
    name: string;
    users: User[];
    subjects: Subject[];
  }
}

export async function getClassById(id: string) {
  const response = await api<ClassResponse>({
    url: '/classes/' + id,
    method: 'GET'
  });

  return response;
}

export async function getClass() {
  const response = await api<{ data: Class[] }>({
    url: '/classes',
    method: 'GET'
  });

  return response;
}