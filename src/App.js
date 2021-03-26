import React from "react";
import "./App.css";
import Header from './Header';
import Dashboard from './Dashboard';
import BannerOne from './BannerOne';
import CryptoTable from './CryptoTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BannerOne />
      <CryptoTable />
    </div>
  );
}

export default App;
