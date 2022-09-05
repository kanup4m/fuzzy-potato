import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import navigatorData from "../../../data/navigator.json";

function MobileNavigator() {
  let navigate = useNavigate();
  const { SubMenu } = Menu;

  const [token, setToken] = useState(false);
  const [admin, setAdmin] = useState();

  setTimeout(function () {
    let data = JSON.parse(localStorage.getItem("isAdmin"));
    setAdmin(data);
  }, 50);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"
        onClick={handleClick}
        mode="inline"
      >
        <Menu key="homepage" title={navigatorData.HOME.title}></Menu>

        {/* <SubMenu key="activities" title={navigatorData.ACTIVITIES.title}>
          {navigatorData.ACTIVITIES.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link to={item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu> */}

        <Menu.Item key="gallery">
          <Link to={navigatorData.GALLERY.href}>
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
              <Link to={item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>

        <Menu.Item key="donate">
          <Link to={navigatorData.DONATE.href}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigatorData.DONATE.title}
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to={navigatorData.ABOUT.href}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>

        {token ? (
          admin == true ? (
            <>
              <Menu.Item key="logout">
                <a onClick={handleLogout}>Logout</a>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/admin">
                  <a>Admin Panel</a>
                </Link>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="logout">
              <a onClick={handleLogout}>Logout</a>
            </Menu.Item>
          )
        ) : (
          <>
            {" "}
            <Menu.Item key="login">
              <Link to={navigatorData.LOGIN.href}>
                <a>{navigatorData.LOGIN.title}</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to={navigatorData.SIGNUP.href}>
                <a>{navigatorData.SIGNUP.title}</a>
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
}

export default React.memo(MobileNavigator);
