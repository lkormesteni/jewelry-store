import './App.css';
import Navbar from './components/NavBar.jsx';
import ProductList from './components/ProductList.jsx';
import Data from './components/Data.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <Data />
    </div>
  );
}

export default App;
