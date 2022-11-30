import Header from './components/header/Header'
import MainProduct from "./components/middle/MainProduct"
import Footer from './components/middle/Footer';
import './App.css';
import { useState} from 'react'

function App() {
  const [textSearch, setTextSearch] = useState()
  
  function scrollFunction() { 
    const headerTop = document.getElementsByClassName("header-top")[0]
    const suggest = document.getElementById("suggestSearch")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
      headerTop.style.display = "none";
      suggest.style.marginTop = "-30px"
    }
    else {headerTop.style.display = "flex";}
  }
    
  return (
    <>
      <div className='app'>
        <Header setTextSearch={setTextSearch} textSearch={textSearch} />
        <MainProduct textSearch={textSearch} />
        <Footer />
        {window.onscroll= () => {scrollFunction()}}
      </div>
    </>
  );
}

export default App;
