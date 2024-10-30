import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";
import Login from "./components/Login/Login";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Navigation isLoggedIn={false} navList={navigationList} />
      <Login />
    </>
  );
}

export default App;
