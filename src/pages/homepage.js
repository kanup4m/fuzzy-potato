import React from "react";

import LayoutOne from "../components/layout/LayoutOne";
import Introductions from "../components/sections/Introductions";


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
