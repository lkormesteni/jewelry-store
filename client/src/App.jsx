import './App.css';
import Data from './components/Data.jsx';
import React, {useState} from 'react';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Navbar from './components/NavBar.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  const [view, setView] = useState('Login')
 
  const changeToProduct = () => {
    setView('products')
    
  }

  const changeToRegistration = () => {
    setView('Registration')
  }

  const changeToData = () => {
    setView('Data')
  }

   return (
    <div className="App">
      {view === 'Login' && <Login changeToData={changeToData} changeToRegistration={changeToRegistration} />}
      {view === 'Registration' && <Registration changeToData={changeToData}/>}
      {view === 'Data' && 
      <div>
      <Navbar changeToProduct={changeToProduct}/>
      <ProductList />
    </div>}
      {view === 'products' && <Data />}
    </div>
    
  );
}

export default App;
