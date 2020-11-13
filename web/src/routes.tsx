import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes = () => {
    return(
        // BrowserRouter deve conter todas as rotas do projeto
        <BrowserRouter>
            {/* O Switch permite que apenas um componente seja chamado em tela, recomendado para projetos */}
            <Switch>
                {/* cada Route recebe 2 parametros, o path que indica o caminho por uma '/' e o componente a ser mostrado na tela */}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;