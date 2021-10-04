import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Episode from './screens/Episode';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <main className="container mt-4">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/episodes/:id" component={Episode} exact/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
