import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ClassRegister from "../pages/ClassRegister"
import SubjectList from "../pages/SubjectList"
import CreateClass from "../pages/CreateClass";
import SubjectForm from "../pages/SubjectForm";
import authValidator from "../middleware/authValidator";
import UserForm from '../pages/UserForm';

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
  },
  {
    path: '/cadastrar/usuario/',
    element: <UserForm />,
    loader: async () => {
      if(!(await authValidator())) {
        window.location.href = '/login';
      }

      return null;
    }
  },
  {
    path: '/editar/:type/:id',
    element: <UserForm />,
    loader: async (route) => {
      if(!(await authValidator())) {
        window.location.href = '/login';
        return;
      }

      const type = route.params.type;

      if(!type) {
        window.location.href = '/'
        return;
      }

      if(!['administrador', 'estudante', 'professor'].includes(type)) {
        window.location.href = '/'
        return;
      }

      return null;
    }
  }
]);

export default router;