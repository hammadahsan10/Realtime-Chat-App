import Chat from "./components/Chat";
import Signin from "./components/Signin";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {

  const [user] = useAuthState(auth)

  return (

    <div>
      {user ? <Chat /> : <Signin />}
    </div>

  );
}

export default App;
