import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ClassRegister from "../pages/ClassRegister"
import SubjectList from "../pages/SubjectList"
import CreateClass from "../pages/CreateClass";
import SubjectForm from "../pages/SubjectForm";
import authValidator from "../middleware/authValidator";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/login',
    element: <Login />,
    loader: async () => {
      if(await authValidator()) {
        window.location.href = '/';
      }
      
      return null;
    }
  },
  {
    path: '/chamada',
    element: <ClassRegister />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/materias',
    element: <SubjectList />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/cadastrar/turma',
    element: <CreateClass />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/cadastrar/materia',
    element: <SubjectForm />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/editar/materia/:id',
    element: <SubjectForm />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  }
]);

export default router;