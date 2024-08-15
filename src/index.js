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
                {/*cals 가 이 위치에 들어가면 왜 404 뜨는지 질문*/}
            </Route>
            <Route path="cals" element={<Cals />} />
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
