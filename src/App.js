import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./News/News.js";
import Footer from "./Footer/footer.js";
import Pets from "./components/Pets/Pets.js"
import AboutUs from "./components/about-us/AboutUs.js"
import Contact from "./components/contact/contact.js"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header image='url("/images/header-photo.svg")' title="SAVE ME" love="and find love of your life" />
            <News
/>
            <Footer />
          </Route>
          <Route path="/about-us">
            <Header image='url("/images/about-us.svg")' title="About us" />
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/dogs">
            <Header image='url("/images/dogs.svg")' title="Dogs" mgTop="10rem" />
            <Pets category="dogs" />
            <Footer />
          </Route>
          <Route path="/cats">
            <Header image='url("/images/cats.svg")' title="Cats" mgTop="10rem" />
            <Pets category="cats" />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header image='url("/images/contact.svg")' title="Contact" mgTop="10rem" />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
