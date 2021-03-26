import React, { useState } from "react";
import "./Header.css";
import logo from "./images/logo.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Button } from "reactstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleTwo = () => setDropdownOpenTwo((prevState) => !prevState);
  const value = 50;
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__icon" />
      <p className="icon__txt">
        Powered By <span className="header__icon-text">Finstreet</span>
      </p>

      <div className="header__center">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            style={{
              backgroundColor: "#2e3241",
              border: "none",
              borderRadius: "0.5rem",
            }}
            caret
            className="header__center-dropdown"
          >
            INR
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>INR</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={dropdownOpenTwo} toggle={toggleTwo}>
          <DropdownToggle
            style={{
              backgroundColor: "#2e3241",
              border: "none",
              borderRadius: "0.5rem",
            }}
            caret
            className="header__center-dropdown"
          >
            BTC
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>BTC</DropdownItem>
            <DropdownItem>ETH</DropdownItem>
            <DropdownItem>USDT</DropdownItem>
            <DropdownItem>XRP</DropdownItem>
            <DropdownItem>TRX</DropdownItem>
            <DropdownItem>DASH</DropdownItem>
            <DropdownItem>ZEC</DropdownItem>
            <DropdownItem>XEM</DropdownItem>
            <DropdownItem>IOST</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button
          style={{
            backgroundColor: "#2e3241",
            border: "none",
            borderRadius: "0.5rem",
          }}
          className="header__center-dropdown"
        >
          Buy BTC
        </Button>
      </div>

      <div className="header__right">
        <CircularProgressbar
          value={value}
          maxValue={100}
          text={`${value}`}
          className="progress__bar"
          styles={buildStyles({
            textColor: "#3dc6c1",
            pathColor: "#fff",
            trailColor: "#3dc6c1",
            textSize: "45px",
          })}
        />

        <Button
          style={{ backgroundColor: "#3dc6c1", borderRadius: "10px" }}
          className="telegram"
        >
          <TelegramIcon /> Connect Telegram
        </Button>

   <div className="toggle__btn">

        <label class="switch">
  <input type="checkbox" checked />
  <span class="slider round"></span></label></div>

    </div>

      </div>

     
  );
}

export default Header;
