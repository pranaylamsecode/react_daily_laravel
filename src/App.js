import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
const App = () => {
  return (
    <>
      <div ui-view="" autoscroll="true" className="ng-scope">
        <div id="headerTheme" className="ng-scope">
          <div id="winterTheme" className="resetHeader">
            <Header />
            <Hero />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
