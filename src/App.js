import React from "react";
import "./App.css";
import Header from './Header';
import Dashboard from './Dashboard';
import BannerOne from './BannerOne';
import CryptoTable from './CryptoTable';
import BannerTwo from './BannerTwo';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BannerOne />
      <CryptoTable />
      <BannerTwo />
      <Footer />
    </div>
  );
}

export default App;
