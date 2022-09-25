import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import CategoriesOne from "../../components/sections/CategoriesOne";
import BookData from "../../data/sections/books.json";

export default function Abut() {
  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Books" className="-center" />
      <CategoriesOne data={BookData.one} />
    </LayoutOne>
  );
}
