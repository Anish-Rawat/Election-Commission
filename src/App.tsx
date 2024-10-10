import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path,element},index)=> <Route key={index} path={path} element={element}/>)}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
