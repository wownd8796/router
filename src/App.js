import "./Style.scss";
import Main from "./component/Main";
import Sub1 from "./component/Sub1";
import Sub2 from "./component/Sub2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/Sub1">Sub1</Link>
        <Link to="/Sub2">Sub2</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Sub1/:id" element={<Sub1 />} />
          <Route path="/Sub2" element={<Sub2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
