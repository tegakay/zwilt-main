import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Layoutcomp } from "./components/Layoutcomp";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layoutcomp />}>
      <Route index element={<Home />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
