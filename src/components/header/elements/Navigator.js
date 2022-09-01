import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import navigatorData from "../../../data/navigator.json";

function Navigator() {
  let navigate = useNavigate();

  const [token, setToken] = useState(false);
  const [admin, setAdmin] = useState()

  setTimeout(function () {
    let data = JSON.parse(localStorage.getItem('isAdmin'));
    setAdmin(data)
  }, 50);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link to={navigatorData.HOME.href}>
          <a className="navigation-item__title">{navigatorData.HOME.title}</a>
        </Link>
      </li>

      {/* <li className="navigation-item -toggleable">
        <Link to={navigatorData.ACTIVITIES.href}>
          <a className="navigation-item__title">{navigatorData.ACTIVITIES.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.ACTIVITIES.subMenu.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      <li className="navigation-item">
        <Link to={navigatorData.GALLERY.href}>
          <a className="navigation-item__title">
            {navigatorData.GALLERY.title}
          </a>
        </Link>
      </li>

      <li className="navigation-item -toggleable">
        <Link to={navigatorData.DOWNLOADS.href}>
          <a className="navigation-item__title">
            {navigatorData.DOWNLOADS.title}
          </a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.DOWNLOADS.subMenu.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="navigation-item">
        <Link to={navigatorData.ABOUT.href}>
          <a className="navigation-item__title">{navigatorData.ABOUT.title}</a>
        </Link>
      </li>

      <li className="navigation-item">
        <Link to={navigatorData.DONATE.href}>
          <a className="navigation-item_title">{navigatorData.DONATE.title}</a>
        </Link>
      </li>

      {token ? (

        admin == true ? (<>
          <li className="navigation-item">
            <a className="navigation-item__title" onClick={handleLogout}>
              Logout
            </a>
          </li>
          <li className="navigation-item">
            <Link to="/admin">
              <a className="navigation-item_title">Admin Panel</a>
            </Link>
          </li>
        </>) : (
          <li className="navigation-item">
            <a className="navigation-item__title" onClick={handleLogout}>
              Logout
            </a>
          </li >
        )


      ) : (
        <>
          <li className="navigation-item">
            <Link to={navigatorData.LOGIN.href}>
              <a className="navigation-item__title">
                {navigatorData.LOGIN.title}
              </a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link to={navigatorData.SIGNUP.href}>
              <a className="navigation-item__title">
                {navigatorData.SIGNUP.title}
              </a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default React.memo(Navigator);
