import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";

function App() {
  return (
    <>
      <Navigation isLoggedIn={true} navList={navigationList} />
    </>
  );
}

export default App;
