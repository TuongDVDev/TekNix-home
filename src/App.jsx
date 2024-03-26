import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomButton";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CustomButton />
    <div>
      TekNix Home
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
