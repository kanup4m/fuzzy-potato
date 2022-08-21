import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import navigatorData from "../../../data/navigator.json";
import SocialIcons from "../../other/SocialIcons";

function MobileNavigator() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
      >
        <Menu key="homepage" title={navigatorData.HOME.title}>
        </Menu>
        <SubMenu key="activities" title={navigatorData.ACTIVITIES.title}>
          {navigatorData.ACTIVITIES.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link to={process.env.PUBLIC_URL + item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="gallery">
          <Link to={process.env.PUBLIC_URL + navigatorData.GALLERY.href}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigatorData.GALLERY.title}
            </a>
          </Link>
        </Menu.Item>
        <SubMenu key="downloads" title={navigatorData.DOWNLOADS.title}>
          {navigatorData.DOWNLOADS.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link to={process.env.PUBLIC_URL + item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="about">
          <Link to={process.env.PUBLIC_URL + navigatorData.DONATE.href}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="donate">
          <Link to={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>



      </Menu>
      <div className="menu-mobile-functions">
        <Link to={process.env.PUBLIC_URL + "/other/login"}>
          <a className="menu-mobile-functions__login">Login / Register</a>
        </Link>
        <SocialIcons />
      </div>
    </div>
  );
}

export default React.memo(MobileNavigator);
