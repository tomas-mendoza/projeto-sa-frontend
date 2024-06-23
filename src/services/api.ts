import axios from "axios";
import env from "./env";

interface ApiProps {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: string;
  body?: object;
  params?: object;
}

export default async function api<T>({ body, method, params, url }: ApiProps) {
  const response = await axios<T>({
    method,
    url: env.VITE_API_URL + url,
    data: body,
    params,
    withCredentials: true
  });

  return response;
}

