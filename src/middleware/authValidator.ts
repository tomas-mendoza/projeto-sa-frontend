import api from "../services/api";

export default async function authValidator() {
  try {
    await api({
      url: '/auth/',
      method: 'GET'
    });

    return true;
  } catch(err) {
    return false;
  }
}