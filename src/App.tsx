import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";

function App() {
  return (
    <>
      <Navigation isLoggedIn={false} navList={navigationList} />
    </>
  );
}

export default App;
