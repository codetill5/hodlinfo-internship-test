import React from 'react';
import "./CryptoTable.css";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function CryptoTable() {
    return (
        <div className="table-container">
            <div className="before-table">
  <table>
    <tr>
      <th>#</th>
      <th>Platform</th>
      <th>Last Trading Price</th>
      <th>Buy / Sell Price</th>
      <th>Difference</th>
      <th>Savings</th>
      
    </tr>
    <tr style={{borderRadius:"100px"}} >
      <td>1</td>
      <td >Wazir</td>
      <td>&#8377; 40,70,000</td>
      <td>&#8377; 40,70,000 / &#8377; 40,81,455</td>
      <td style={{color:"#3dc6c1"}}>6.15 %</td>
      <td style={{color:"#3dc6c1"}}> <ArrowDropUpIcon /> &#8377; 2,35,743</td>
     
    </tr>
    <br/>
    <tr >
      <td>2</td>
      <td>Bitbns</td>
      <td>&#8377; 40,75,926</td>
      <td>&#8377; 40,66,126 / &#8377; 40,70,499</td>
      <td style={{color:"#3dc6c1"}}>6.30 %</td>
      <td style={{color:"#3dc6c1"}}><ArrowDropUpIcon /> &#8377; 2,41,670</td>
      
    </tr>
    <br/>
    <tr>
      <td>3</td>
      <td>Giotus</td>
      <td>&#8377; 40,75,926</td>
      <td>&#8377; 40,66,126 / &#8377; 40,70,499</td>
      <td style={{color:"#3dc6c1"}}>6.30 %</td>
      <td style={{color:"#3dc6c1"}}><ArrowDropUpIcon /> &#8377; 2,41,670</td>
     
    </tr>

    <br/>
    <tr>
      <td>4</td>
      <td>Colodax</td>
      <td>&#8377; 40,75,926</td>
      <td>&#8377; 40,66,126 / &#8377; 40,70,499</td>
      <td style={{color:"orangeRed"}}>6.30 %</td>
      <td style={{color:"orangeRed"}}><ArrowDropUpIcon /> &#8377; 2,41,670</td>
     
    </tr>

    <br/>
    <tr>
      <td>5</td>
      <td>Zebpay</td>
      <td>&#8377; 40,75,926</td>
      <td>&#8377; 40,66,126 / &#8377; 40,70,499</td>
      <td style={{color:"#3dc6c1"}}>6.30 %</td>
      <td style={{color:"#3dc6c1"}}><ArrowDropUpIcon /> &#8377; 2,41,670</td>
     
    </tr>

    <br/>
    <tr>
      <td>6</td>
      <td>CoinDCX</td>
      <td>&#8377; 40,75,926</td>
      <td>&#8377; 40,66,126 / &#8377; 40,70,499</td>
      <td style={{color:"#3dc6c1"}}>6.30 %</td>
      <td style={{color:"#3dc6c1"}}><ArrowDropUpIcon /> &#8377; 2,41,670</td>
     
    </tr>
  </table>
</div>
        </div>
    )
}

export default CryptoTable
