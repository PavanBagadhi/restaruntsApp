import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Restarunts from './Components/Restarunts';
import RestaruntDetails from './Components/RestaruntDetails';

function App() {
  return (
    <Switch>
      <Route path="/restarunts/:state" component={Restarunts} exact />
      <Route path="/restarunts/details/:restaruntId" component={RestaruntDetails} exact/>
      <Route path="/home"></Route>
      <Route Path="*" component={Homepage} />
    </Switch>
  );
}

export default App;
