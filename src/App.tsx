import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navigation isLoggedIn={false} navList={navigationList} />
      <Login />
      <Register/>
    </>
  );
}

export default App;
