import Layout from './comopnet/Layout/Layout';
import User from './container/User/User';
// import {Switch , Route} from 'react-router-dom'
import {Switch , Route} from 'react-router-dom'
import Medicine from './container/Medicine';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/User"} component={User}/>
        <Route exact path={"/medicine"} component={Medicine} />
      </Switch>
      {/* <Switch>
      <Route exact path={"/User"}  component={User}/>
      </Switch> */}
    </Layout>
  );
}

export default App;
