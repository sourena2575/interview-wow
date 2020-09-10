import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./containers/main/Main";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <>
      <div className="px-32 pt-10">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
