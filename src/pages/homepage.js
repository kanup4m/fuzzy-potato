import React, { useEffect, useState } from "react";

import LayoutOne from "../components/layout/LayoutOne";
import Introductions from "../components/sections/Introductions";
// import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne"
import heroslideOneData from "../data/sections/hero-slider.json";


export default function homepage() {
    return (
        <LayoutOne title="Homepage 2">
            {/* <HeroSliderOne data={heroslideOneData.one} /> */}
            {/* <Container>
                <PartnerOne />

            </Container> */}

            <Introductions />
        </LayoutOne>
    );
}
