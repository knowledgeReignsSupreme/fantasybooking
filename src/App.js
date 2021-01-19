import React, { useState } from 'react';
import './styles/main.scss';
import { destinationsData, attractionsData, postsData } from './data';
import Home from './Pages/Home';
import {
  Route,
  BrowserRouter,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Logo from './design/Vector.svg';
import Destinations from './Pages/Destinations';
import Attractions from './Pages/Attractions';
import Blog from './Pages/Blog';
import SinglePost from './Components/Blog/SinglePost';
import SingleDestination from './Components/Destinations/SingleDestination';
import SingleAttraction from './Components/Attractions/SingleAttraction';

function App() {
  const [destinations, setDestinations] = useState(destinationsData);
  const [attractions, setAttractions] = useState(attractionsData);
  const [posts, setPosts] = useState(postsData);
  const [navOn, setNavOn] = useState(false);
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      {!navOn ? (
        <Link to='/' exact='true'>
          <img src={Logo} alt='logo' className='abs-logo' />{' '}
        </Link>
      ) : (
        ''
      )}
      <button className='nav-button' onClick={() => setNavOn(!navOn)}>
        {navOn ? 'X' : 'Navigate'}
      </button>
      <Nav navOn={navOn} setNavOn={setNavOn} />
      <Switch>
        <Route
          path='/'
          exact
          render={(props) => (
            <Home
              {...props}
              attractions={attractions}
              posts={posts}
              destinations={destinations}
            />
          )}
        />
        <Route
          path='/blog'
          exact
          render={(props) => <Blog {...props} posts={posts} />}
        />
        <Route
          path='/attractions'
          exact
          render={(props) => (
            <Attractions
              {...props}
              attractions={attractions}
              destinations={destinations}
            />
          )}
        />
        <Route
          path='/destinations'
          exact
          render={(props) => (
            <Destinations
              {...props}
              attractions={attractions}
              destinations={destinations}
            />
          )}
        />
        <Route path='/blog/post/:id' exact component={SinglePost} />
        <Route path='/destinations/:id' exact component={SingleDestination} />
        <Route path='/attractions/:id' ex component={SingleAttraction} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
