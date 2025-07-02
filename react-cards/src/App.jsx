//add imports here
import Card from './Card.jsx'
import Button from './Button/Button.jsx'

//learning props = read only properties that are shared berween components
//                 a parent component can send data to a child component
//                 <Component key = value/>
import Student from './Student.jsx'

function App() {
  return(
    <>
      <h2>React with CSS</h2>
      <Button/>
      <div/>
      <h2>React Card Components</h2>
      <Card/>
      <h2>React Props</h2>
      <Student name='Faye' age={19} isStudent={true}/>
      <Student name='Kaye' age={17} isStudent={true}/>
      <Student name='Alberto' age={19} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
