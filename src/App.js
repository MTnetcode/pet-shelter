import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News.js";
import Footer from "./components/Footer/footer.js";
import Pets from "./components/Pets/Pets.js"
import AboutUs from "./components/about-us/AboutUs.js"
import Contact from "./components/contact/contact.js"
import PetsInfo from "./components/pets-info/petsInfo.js"
import Login from "./components/Login/Login.js"
import DashboardHeader from "./components/dashboard-header/dashboardHeader.js"
import NewsDashboard from "./components/news-dashboard/NewsDashboard.js"
import PetsDashboard from "./components/pets-dashboard/PetsDashboard.js";
import Delete from "./components/delete/delete.js"
import Post from "./components/post/post.js"
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
          <Route path="/info">
           
            <PetsInfo />
       
          </Route>

          <Route path="/login">
           
           <Login />
      
         </Route>

         <Route path="/dashboard-news">
           
           <DashboardHeader />
           <NewsDashboard />
      
         </Route>
         <Route path="/dashboard-dogs">
           
           <DashboardHeader />
           <PetsDashboard />
      
         </Route>
         <Route path="/dashboard-cats">
           
           <DashboardHeader />
           <PetsDashboard />
      
         </Route>
         <Route path="/delete">
           
           <Delete />
      
         </Route>
         <Route path="/post">
           
           <Post />
      
         </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
