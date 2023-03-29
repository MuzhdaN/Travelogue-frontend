import './App.css'
import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' render={() => <h1>Homepage</h1>} />
          <Route exact path='/write' render={() => <h1>Write</h1>} />
          <Route exact path='/saved' render={()=> <h1>Reading List</h1>} />
          <Route exact path='/signin' render={()=> <h1>Sign in</h1>} />
          <Route exact path='/signup' render={()=> <SignUpForm /> } />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  )
}

export default App

