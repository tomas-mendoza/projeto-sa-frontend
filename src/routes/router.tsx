import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ClassRegister from "../pages/ClassRegister"
import SubjectList from "../pages/SubjectList"
import CreateClass from "../pages/CreateClass";

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
    path: '/materias',
    element: <SubjectList />
  },
  {
    path: '/cadastroturma',
    element: <CreateClass />
  }
]);

export default router;