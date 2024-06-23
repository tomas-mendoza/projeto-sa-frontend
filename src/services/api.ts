import axios from "axios";

interface ApiProps {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: string;
  body?: object;
  params?: object;
}

export default async function api<T>({ body, method, params, url }: ApiProps) {
  const response = await axios<T>({
    method,
    url,
    data: body,
    params,
    withCredentials: true
  });

  return response;
}

