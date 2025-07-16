//conditional rendering = allows you to control what's being rendered
//                        in your application based on certain conditions
//                        (show, hide, or change component)

//gets ko na why typescript is being used, this can replace the prop-types from javascript
interface UserGreetingProps {
  //marking a property with a question mark
  //means its OPTIONAL
  isLoggedIn?: boolean; 
  username?: string;
}

function UserGreeting({isLoggedIn = false, username = "Guest"}: UserGreetingProps){

  return(isLoggedIn ? <h2>Welcome {username}</h2> : <h2>Please Log In</h2>);
}

export default function App() {

  return (
    <>
      <UserGreeting isLoggedIn = {false} username="Krarneas"/>
    </>
  )
}

