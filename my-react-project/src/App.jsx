import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  
  return( //note that return can only return a single element
    //we enclose it with a "fragment" when we have two or more components
    <>
    <Header/> 
    <Food/>
    <Footer/>
    </>
  );
}

export default App
