import React, { useEffect } from "react";

import LayoutOne from "../components/layout/LayoutOne";
import Introductions from "../components/sections/Introductions";


export default function Homepage() {

    // useEffect(() => {
    //     // Clear all local storage item
    //     localStorage.clear();
    // });

    return (
        <LayoutOne title="Homepage 2">
            <Introductions />
        </LayoutOne>
    );
}
