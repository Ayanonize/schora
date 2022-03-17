import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './Pages/Main';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Profile from './Pages/Profile';
import Post from './Pages/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './Pages/Test';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';



function App() {


  return (
    <>


      <Router>

        <Header />

        <div className="container m-auto">

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>



            <Route exact path="/Home">
              <Home />
            </Route>


            <Route exact path="/Profile">
              <Profile />
            </Route>

            <Route exact path="/Post">
              <Post />
            </Route>

            <Route exact path="/Detail">
              <Detail />
            </Route>

            <Route exact path="/Test">
              <Test />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>


            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>



          </Switch>
        </div>
      </Router>


    </>
  );
}

export default App;
