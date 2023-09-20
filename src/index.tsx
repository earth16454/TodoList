import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./state/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Menu';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/menu",
    element: <Dashboard />
  },
  {
    path: "/todo-list",
    element: <TodoList />
  },
  {
    path: "/color-changing-box",
    element: <div></div>
  },
  {
    path: "/fetching-and-displaying",
    element: <div></div>
  },
  {
    path: "/simple-form",
    element: <div></div>
  }
])

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
