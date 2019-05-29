import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
  Users = [
    {
      id: 1,
      name: 'bob1',
      full_name: 'bob Example_1',
      password: 'abc123',
      nickname: 'bob',
      date_created: '5/29/2019',
      date_modified: '5/29/2019'
    },
    {
      id: 2,
      name: 'bob2',
      full_name: 'bob Example_2',
      password: 'abc123',
      nickname: 'bobby',
      date_created: '5/29/2019',
      date_modified: '5/29/2019'
    },
    {
      id: 3,
      name: 'bob3',
      full_name: 'bob Example_3',
      password: 'abc123',
      nickname: 'bobert',
      date_created: '5/29/2019',
      date_modified: '5/29/2019'
    },
  ]

  

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
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;
