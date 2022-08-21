import React from "react";
import { Link } from "react-router-dom";

import navigatorData from "../../../data/navigator.json";

function Navigator() {

  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link to={navigatorData.HOME.href}>
          <a className="navigation-item__title">{navigatorData.HOME.title}</a>
        </Link>
      </li>
      <li className="navigation-item -toggleable">
        <Link to={process.env.PUBLIC_URL + navigatorData.ACTIVITIES.href}>
          <a className="navigation-item__title">{navigatorData.ACTIVITIES.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.ACTIVITIES.subMenu.map((item, index) => (
            <li key={index}>
              <Link to={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="navigation-item">
        <Link to={process.env.PUBLIC_URL + navigatorData.GALLERY.href}>
          <a className="navigation-item__title">{navigatorData.GALLERY.title}</a>
        </Link>
      </li>
      <li className="navigation-item -toggleable">
        <Link to={process.env.PUBLIC_URL + navigatorData.DOWNLOADS.href}>
          <a className="navigation-item__title">{navigatorData.DOWNLOADS.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.DOWNLOADS.subMenu.map((item, index) => (
            <li key={index}>
              <Link to={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="navigation-item">
        <Link to={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
          <a className="navigation-item__title">{navigatorData.ABOUT.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link to={process.env.PUBLIC_URL + navigatorData.DONATE.href}>
          <a className="navigation-item_title">{navigatorData.DONATE.title}</a>
        </Link>
      </li>
    </ul >
  );
}

export default React.memo(Navigator);
