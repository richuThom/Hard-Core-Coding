import { useState } from "react";
import logo from "./../../../NamasteReact/Food App icon.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnValue, setBtnValue] = useState(["LogOut"]);
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status
            {status ? (
              <img src="https://cdn0.iconfinder.com/data/icons/simple-icons-ii/69/04-64.png"></img>
            ) : (
              "red"
            )}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li style={{ fontWeight: "bold" }}>
            <Link to={"/cart"}>Cart({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7UJaw2ZL7N4Oqd1fWD0BhkBJHgLuJmQW5Pap4COwp3qVpp-oR11DA6sEAuGEwY2ElgU&usqp=CAU"
              style={{ width: "26px" }}
            ></img>
          </li>
          <li>
            <button
              type="login"
              className="login"
              style={{
                backgroundColor: "lightpink",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                btnValue == "LogOut"
                  ? setBtnValue("Login")
                  : setBtnValue("LogOut");
              }}
            >
              {btnValue}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
