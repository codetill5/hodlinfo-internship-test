import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__heading">Best Price to Trade</h1>

      <div className="dashboard__left">
        <h1>0.62 %</h1>
        <p>5 Mins</p>
</div>

<div className="dashboard__left-two">
        <h1>0.67 %</h1>
        <p>1 Hour</p>
      </div>

      <div className="dashboard__center">
        <h1> &#8377; 38, 34, 256</h1>
        <p>Average BTC/INR net price including commission</p>
      </div>

      <div className="dashboard__right">
        <h1>7.79 %</h1>
        <p>1 Day</p>
        </div>


<div className="dashboard__right-two">
        <h1>15.07 %</h1>
        <p>7 Days</p>
        </div>


    </div>
  );
}

export default Dashboard;
