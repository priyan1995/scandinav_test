
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainRoutes } from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
