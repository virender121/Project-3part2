import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './pages/Signup/Singup';
import Login from './pages/Login/Login'
import Input from './Atom/Input/Input';
import Nextbutton from './pages/Next/Nextbutton'
import Singnewpage from './pages/SignupValid/Signupvalid';
import Forget from './pages/Forget/Forget'
import Home from './Components/Home/Home';
import personalProfile from './pages/personalProfile';
import {
  RecoilRoot
} from 'recoil';
// import Sidebar from './section/SideBar/SideBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Singup",
    element: <Singup/>,
  },
  {
    path: "Input",
    element: <Input />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Forget",
    element: <Forget/>
  },
  {
    path: "Nextbutton",
    element: <Nextbutton />,
  },
  {
    path: "Singnewpage",
    element: <Singnewpage />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "personalProfile",
    element: <personalProfile />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < RecoilRoot>
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
