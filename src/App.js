import React from "react";
import "./App.css";
import Header from './Header';
import Dashboard from './Dashboard';
import BannerOne from './BannerOne';
import CryptoTable from './CryptoTable';
import BannerTwo from './BannerTwo';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BannerOne />
      <CryptoTable />
      <BannerTwo />
    </div>
  );
}

export default App;
