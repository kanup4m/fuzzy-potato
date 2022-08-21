import React from "react";
import classNames from "classnames";
import { Button } from "antd";

export default function SocialIcons({ className, type = "link", shape }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} href="https://www.facebook.com/yugsrijeta.up">
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="https://twitter.com/YSrijeta">
          <i className="fab fa-twitter"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="https://www.instagram.com/yugsrijeta.up/">
          <i className="fab fa-instagram"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="https://www.youtube.com/channel/UCsxWOgErs4Zvl9J3LLkeBpQ">
          <i className="fab fa-youtube"></i>
        </Button>
      </li>
    </ul>
  );
}
