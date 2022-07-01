/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
return (
<BrowserRouter>
<Routes>
  <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
  <Route path="/movie/:id" element={<Detail />} />
</Routes>
</BrowserRouter>
);
}

export default App;