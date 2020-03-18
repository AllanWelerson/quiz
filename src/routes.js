import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Capitais from './pages/Capitais';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => <div>inicio</div>}/>
        <Route exact path="/capitais" component={Capitais}/>
        <Route path="*" component={() => <div>Erros</div>}/>
    </Switch>
);

export default Routes;
