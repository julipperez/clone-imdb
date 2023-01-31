import logo from './logo.svg';
import './App.css';
import MovieTittle from './components/MovieBanner'

function App() {
  return (
    <div className="App">
       <div id= "card">
        <MovieTittle name= {'Batman'} />
       </div>
    </div>
  );
}

export default App;
