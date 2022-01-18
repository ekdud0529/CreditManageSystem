import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./pages/pages";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
