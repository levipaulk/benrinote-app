import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import SignUpPage from '../../Routes/SignUpPage/SignUpPage';
import Landing from '../../Routes/Landing/Landing';
import Dashboard from '../../Routes/Dashboard/Dashboard';
import ListOfPublications from '../../Routes/ListOfPublications/ListOfPublications';
import Publication from '../../Routes/Publication/Publication';
import CompiledNotes from '../../Routes/CompiledNotes/CompiledNotes';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import UserPubApiService from '../../services/user-pub-api-service';
import PublicationApiService from '../../services/pub-api-service';
import SectionsApiService from '../../services/sec-api-service';
import NoteApiService from '../../services/note-api-service';
import './App.css';

class App extends React.Component {

  state = { 
    hasError: false,
    error: null,
    user: {
      // user_name: '',
      // nickname: '',
      // type: ''
    },
    userpub: [
      // {pub_id: 1, date_created: '5/31/2019', title: 'Publication 1', cover: 'url'},
      // {pub_id: 2, date_created: '6/1/2019', title: 'Publication 2', cover: 'url'}
    ],
    activePub: null,
    publications: [
      // {id: 1, title: 'Publication 1', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'},
      // {id: 2, title: 'Publication 2', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'},
      // {id: 3, title: 'Publication 3', cover: 'url', summary: 'summary', date_created: 'date', author: 'User 1', publisher: 'User 3'}
    ],
    sections: [
      // {id, pub_id: 1, section: 1, title: 'first section', text: '...Stuff'},
      // {id, pub_id: 1, section: 2, title: 'second section', text: '...Stuff'},
      // {id, pub_id: 2, section: 1, title: 'first section', text: '...Stuff'},
    ],
    notes: [
      // {id: 1, pub_id: 1, sec_id: 1, title: 'first section', text: 'These are my notes, lalalalaalalalalala'},
      // {id: 2, pub_id: 1, sec_id: 2, title: 'second section', text: 'These are my notes, lalalalaalalalalala'},
      // {id: 3, pub_id: 2, sec_id: 1, title: 'first section', text: 'These are my notes, lalalalaalalalalala'}
    ]
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  clearError = () => {
    this.setState({ error: null })
  }
  setUser = user => {
    this.setState({ user })
  }
  setUserPub = userpub => {
    this.setState({ userpub })
  }
  getActivePub = pubId => {
    PublicationApiService.getPublication(pubId)
      .then(activePub => {
        this.setState({ activePub })
      })
      .catch(e => console.error(e))
  }
  getNotes = () => {
    NoteApiService.getNotesByPubId(this.state.activePub.id)
      .then(notes => this.setState({notes}))
      .catch(e => console.error(e))
  }
  getSections = (id) => {
    SectionsApiService.getSections(this.state.activePub.id)
      .then(sections => {
        console.log(sections)
        this.setSections(sections)
      })
      .catch(e => console.error(e))
  }
  setPublications = publications => {
    this.setState({ publications })
  }
  setSections = sections => {
    this.setState({ sections })
  }
  setNotes = notes => {
    this.setState({ notes })
  }
  clearUser = () => {
    this.setUser({})
    this.setPublications([])
    this.setUserPub([])
    this.setSections([])
    this.setNotes([])
    this.setState({ activePub: null })
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  getUserInfo = () => {
    UserPubApiService.getUserInfo()
      .then(user => this.setUser(user))
      .then(() => this.getUserPub())
  }

  getUserPub = () => {
    console.log('getUserPub ran from app.js')
    UserPubApiService.getUserPublications()
      .then(userpub => {
        console.log(userpub)
        this.setUserPub(userpub)
      })
  }

  addUserPub = (pubId) => {
    UserPubApiService.postUserPublications(pubId)
      .then(() => this.getUserPub())
  }

  deleteUserPub = (pubId) => {
    UserPubApiService.deleteUserPublications(pubId)
      .then(() => this.getUserPub())
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Header 
            clearUser={this.clearUser}
            getUserPub={this.getUserPub}
          />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route 
              exact
              path={'/'}
              component={Landing}
              clearError={this.clearError}
            />
            <Route 
              path={'/login'}
              render={() => TokenService.hasAuthToken()
                ? <Redirect to={'/'} />
                : <LoginPage 
                    getUserInfo={this.getUserInfo} 
                  />
              }
            />
            <Route 
              path={'/register'}
              render={() => TokenService.hasAuthToken()
                ? <Redirect to={'/'} />
                : <SignUpPage />
              }
            />
            <Route 
              path={'/publication/:publication'}
              render={() => TokenService.hasAuthToken()
                ? <Publication 
                    error={this.state.error} 
                    setError={this.setError} 
                    clearError={this.clearError}
                    userpub={this.state.userpub}
                    sections={this.state.sections}
                    notes={this.state.notes}
                    activePub={this.state.activePub}
                    getActivePub={this.getActivePub}
                    getNotes={this.getNotes}
                    setNotes={this.setNotes}
                    getSections={this.getSections}
                    setSections={this.setSections}
                  />
                : <Redirect to={'/login'} /> 
              }
            />
            <Route 
              path={'/publications'}
              render={() => TokenService.hasAuthToken()
                ? <ListOfPublications 
                    error={this.state.error} 
                    setError={this.setError} 
                    clearError={this.clearError}
                    getPublications={PublicationApiService.getPublications}
                    setPublications={this.setPublications}
                    addUserPub={this.addUserPub}
                    publications={this.state.publications}
                    userpub={this.state.userpub}
                    getSections={this.state.getSections}
                  />
                : <Redirect to={'/login'} /> 
              }
            />
            <Route 
              path={'/dashboard/:pubId'}
              render={() => TokenService.hasAuthToken()
                ? <CompiledNotes 
                    error={this.state.error} 
                    setError={this.setError} 
                    clearError={this.clearError}
                    userpub={this.state.userpub}
                    notes={this.state.notes}
                    activePub={this.state.activePub}
                    getActivePub={this.getActivePub}
                  />
                : <Redirect to={'/login'} /> 
              }
            />
            <Route 
              path={'/dashboard'}
              render={() => TokenService.hasAuthToken()
                ? <Dashboard 
                    error={this.state.error} 
                    setError={this.setError} 
                    clearError={this.clearError}
                    user={this.state.user}
                    userpub={this.state.userpub}
                    deleteUserPub={this.deleteUserPub}
                    getUserInfo={this.getUserInfo}
                    getActivePub={this.getActivePub}
                  />
                : <Redirect to={'/login'} /> 
              }
            />
            <Route 
              component={NotFoundPage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
