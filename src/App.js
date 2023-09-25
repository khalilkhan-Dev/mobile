// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Loader from './components/loading/Loader';




function App() {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=>{
    const fakeDataFetch = ()=>{
      setTimeout(()=>{
        setIsLoading(false);
      },2000)
    }
    fakeDataFetch();
  },[])

  return isLoading ? 
   

     <Loader/> :  <Home/>;
   
   
  
}

export default App;
