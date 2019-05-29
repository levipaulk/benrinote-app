import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import SignUpPage from '../../Routes/SignUpPage/SignUpPage';
import Landing from '../../Routes/Landing/Landing';
import ListOfCompiledNotes from '../../Routes/ListOfCompiledNotes/ListOfCompiledNotes';
import ListOfPublications from '../../Routes/ListOfPublications/ListOfPublications';
import Publication from '../../Routes/Publication/Publication';
import CompiledNotes from '../../Routes/CompiledNotes/CompiledNotes';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route 
              exact
              path={'/'}
              component={Landing}
            />
            <PublicOnlyRoute 
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute 
              path={'/register'}
              component={SignUpPage}
            />
            <PrivateRoute 
              path={'/publications'}
              component={ListOfPublications}
            />
            <PrivateRoute 
              path={'/publications/:publicationId'}
              component={Publication}
            />
            <PrivateRoute 
              path={'users/:user/notes'}
              component={ListOfCompiledNotes}
            />
            <PrivateRoute 
              path={'users/:user/notes/:note'}
              component={CompiledNotes}
            />
            <Route 
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
