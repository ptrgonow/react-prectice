import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Nested from "./pages/Nested";
import Hooks from "./pages/hooks/Hooks";
import Counter from "./pages/hooks/Counter";
import Cals from "./pages/hooks/Cals";
import Validation from "./pages/hooks/Validation";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

/*

createBrowserRouter : return browser component
createRoutesFromElements : return routes component

*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="nested" element={<Nested />} />
            <Route path="hooks" element={<Hooks/>}>
                <Route index element={<Counter />} />
                <Route path="counter" element={<Counter />} />
            </Route>
            <Route path="cals" element={<Cals />} />
            <Route path="validation" element={<Validation />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
