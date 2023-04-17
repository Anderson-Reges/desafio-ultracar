import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={ Services }/>
      <Route path='/cadastro' Component={ Register }/>
    </Routes>
  );
}

export default App;
