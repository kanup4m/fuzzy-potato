import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import CategoriesOne from "../../components/sections/CategoriesOne";
import categoriesOneData from "../../data/sections/categories.json";

export default function Abut() {
  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Form" className="-center" />
      <CategoriesOne data={categoriesOneData.one} />

      {/* <HeroSliderOne data={heroslideOneData.one} /> */}
      {/* <Container>
                <PartnerOne />

            </Container> */}
    </LayoutOne>
  );
}
