import React, { useState } from "react";
import "./App.css";
import logo from "./assests/Shopify-Logo.png";
import { BiChevronDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toggleBorder = (container) => {
    if (container === selectedContainer) {
      setSelectedContainer(null);
    } else{
      setSelectedContainer(container);
    }
  };

  const isContainerSelected = (container) => {
    return container === selectedContainer ? "clicked" : "";
  };

  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      <div className="navbar">
        <div className="left-side">
          <div className="logo">
            <img src={logo} alt="Shopify Logo" />
          </div>
          <div className="options">
            <div className="option">
              Solutions <BiChevronDown />
            </div>
            <div className="option">Pricing</div>
            <div className="option resources">
              Resources <BiChevronDown />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="login">Login</div>
          <div className="start-trial">Start a Free Trial</div>
        </div>
      </div>
      <div className="body">
        <div className="body-part">
          <div className="button-background">
            <button
              className={selectedOption === "monthly" ? "selected" : ""}
              onClick={() => handleOptionChange("monthly")}
            >
              Pay Monthly
            </button>
            <button
              className={selectedOption === "yearly" ? "selected" : ""}
              onClick={() => handleOptionChange("yearly")}
            >
              Pay Yearly (Save 25%)
            </button>
          </div>
        </div>
        <div className="container-row">
          <div className={`container ${isContainerSelected(0)}`} onClick={() => toggleBorder(0)}>
            <h1 className="heading">Basic</h1>
            <p className="para">FOR INDIVIDUAL & SMALL BUSINESS</p>
            <p className="para">
              Everything you need to create your store, ship products and
              process payments
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h1>
                <FaRupeeSign style={{ fontSize: "25px" }} />
                1,994
              </h1>
              <div style={{ fontSize: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span>INR</span>
                <span>/Mo</span>
              </div>
            </div>

            <div className="para2">
              <p>Get your first 3 months for $20/mo</p>
            </div>
            <div className="included-options">
              <h2>What's included on Basic:</h2>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> Basic Reports
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> Up to 1,000 Inventory
                Locations
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> 2{" "}
                <span style={{ fontWeight: "bold" }}>Staff Accounts</span>
              </div>
            </div>
            <div className="try-for-free-button">
              <button className="try-for-free">Try for free</button>
            </div>
          </div>

          <div className={`container ${isContainerSelected(1)}`} onClick={() => toggleBorder(1)}>
            <h1 className="heading">Shopify</h1>
            <p className="para">FOR SMALL BUSINESSES</p>
            <p className="para">
              Level up your business with professional reporting and more staff
              accounts
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h1>
                <FaRupeeSign style={{ fontSize: "25px" }} />
                7,447
              </h1>
              <div style={{ fontSize: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span>INR</span>
                <span>/Mo</span>
              </div>
            </div>
            <div>
              <p className="para2">Get your first 3 months for $25/mo</p>
            </div>
            <div className="included-options">
              <h2>What's included on Shopify</h2>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> professional Reports
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> Up to 1,000 Inventory
                Locations
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> 5{" "}
                <span style={{ fontWeight: "bold" }}>Staff Accounts</span>
              </div>
            </div>
            <div className="try-for-free-button">
              <button className="try-for-free">Try for free</button>
            </div>
          </div>

          <div className={`container ${isContainerSelected(2)}`} onClick={() => toggleBorder(2)}>
            <h1 className="heading">Premium</h1>
            <p className="para">FOR LARGE BUSINESSES</p>
            <p className="para">
              Get the best of Shopify with custom reporting and our lowest
              transaction fees
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h1>
                <FaRupeeSign style={{ fontSize: "25px" }} />
                30,164
              </h1>
              <div style={{ fontSize: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span>INR</span>
                <span>/Mo</span>
              </div>
            </div>
            <div>
              <p className="para2">Get your first 3 months for $30/mo</p>
            </div>
            <div className="included-options">
              <h2>What's included on Premium</h2>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> Custom Report Builder
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> Up to 1,000 Inventory
                Locations
              </div>
              <div style={{ fontSize: "12px" }}>
                <FaCheck className="check-icons" /> 15{" "}
                <span style={{ fontWeight: "bold" }}>Staff Accounts</span>
              </div>
            </div>
            <div className="try-for-free-button">
              <button className="try-for-free">Try for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

