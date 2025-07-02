//add imports here
import Card from './Card.jsx'
import Button from './Button/Button.jsx'

//learning props = read only properties that are shared berween components
//                 a parent component can send data to a child component
//                 <Component key = value/>

function App() {
  return(
    <>
    <Button/>
    <div/>
    <Card/>
    <Card/>
    </>
  );
}

export default App
