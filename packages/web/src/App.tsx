import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './routes/Home/Home';
import { Characters } from './routes/Characters/Characters';
import { FilmDetail } from './routes/FilmDetail/FilmDetail';
import { CharacterDetail } from './routes/CharacterDetail/CharacterDetail';
import { PlanetDetail } from './routes/PlanetDetail/PlanetDetail';
import { SpecieDetail } from './routes/SpecieDetail/SpecieDetail';
import { StarshipDetail } from './routes/StarshipDetail/StarshipDetail';
import { VehicleDetail } from './routes/VehicleDetail/VehicleDetail';
import { ErrorBoundary } from './shared/components/ErrorBoundary';
import { NotFound } from './shared/components/NotFound';
import { Routes } from './shared/constants/routes';



export const App: React.FC<{}> = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route exact={true} path={Routes.HOME} component={Home}/>
        <Route exact={true} path={Routes.CHARACTERS} component={Characters}/>
        <Route exact={true} path={Routes.FILM_DETAIL} component={FilmDetail}/>
        <Route exact={true} path={Routes.CHARACTER_DETAIL} component={CharacterDetail}/>
        <Route exact={true} path={Routes.PLANET_DETAIL} component={PlanetDetail}/>
        <Route exact={true} path={Routes.SPECIES_DETAIL} component={SpecieDetail}/>
        <Route exact={true} path={Routes.STARSHIP_DETAIL} component={StarshipDetail}/>
        <Route exact={true} path={Routes.VEHICLE_DETAIL} component={VehicleDetail}/>
        <Route component={NotFound}/>
      </Switch>
    </ErrorBoundary>
  </Layout>
);
