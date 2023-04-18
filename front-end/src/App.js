import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Register from './pages/Register';
import FormService from './pages/FormService';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={ Services }/>
      <Route path='/cadastro' Component={ Register }/>
      <Route path='/cadastro/servico' Component={ FormService }/>
      <Route path='/servico/:id' Component={ ServiceDetails } />
    </Routes>
  );
}

export default App;
