import './App.scss';
import Header from './Components/Header/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Popular from './Components/Movies/Popular';
import TopRated from './Components/Movies/TopRated';
import Upcoming from './Components/Movies/Upcoming';
import MoviePage from './Components/MoviePage/MoviePage';
import Footer from './Components/Footer/Footer';
import UpButton from './Components/UpButton/UpButton';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/popularmovies' element={<Popular />} />
        <Route path='/topratedmovies' element={<TopRated />} />
        <Route path='/upcomingmovies' element={<Upcoming />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <UpButton />
      <Footer />
    </Router>


    </>

  );
}

export default App;
