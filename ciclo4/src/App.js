import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { ListarCliente } from './views/Cliente/ListarCliente';
import { ListarPedido } from './views/Pedido/ListarPedido';
import { ListarServico } from './views/Servico/ListarServico';
import { Menu } from './components/Menu';


function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar-cliente" component={ListarCliente} />
          <Route path="/listar-pedido" component={ListarPedido} />
          <Route path="/listar-servico" component={ListarServico} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
