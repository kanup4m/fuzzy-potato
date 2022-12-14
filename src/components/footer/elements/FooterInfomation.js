import React from "react";
import { Link } from "react-router-dom";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link to={"/"}>
        <span style={{ fontWeight: "800" }}>Yug Srijeta U.P.</span>
      </Link>
      <ul>
        <li>Address: VG44+CQ5, Nanpara, Uttar Pradesh 271865</li>
        <li>Phone: +91 94507 51307</li>
        <li>Email: yugsrijeta.awgpup@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
