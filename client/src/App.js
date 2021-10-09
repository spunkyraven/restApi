import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import ContactList from "./Pages/ContactList";
import AddContact from "./Pages/AddContact";
import Error from "./Pages/Error";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={ContactList} />
        <Route path={["/addContact", "/edit/:id"]} component={AddContact} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
