import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Main from './pages/Main';
import './App.sass'

const App: FC = () => {
  const render = (el: JSX.Element): JSX.Element => {
    if (sessionStorage.getItem('isLogged')!==null && sessionStorage.getItem('isLogged')!.length > 0) {
      return el;
    }
    return <Navigate to='/login' />;
  };
  
  const routes = [
    { path: '/', element: render(<Main />) },
    { path: '/login', element: <Login /> }
  ]
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
