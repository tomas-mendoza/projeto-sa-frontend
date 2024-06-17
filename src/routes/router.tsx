import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ClassRegister from "../pages/ClassRegister"
import CreateSubject from "../pages/CreateSubject";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/chamada',
    element: <ClassRegister />
  },
  {
    path: '/cadastrar/materia',
    element: <CreateSubject />
  }
]);

export default router;