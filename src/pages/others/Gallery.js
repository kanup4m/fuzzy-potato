import React from "react";
import LayoutOne from "../../components/layout/LayoutOne";
import HeroSliderOne from "../../components/sections/hero-slider/HeroSliderOne";
import SectionTitle from "../../components/other/SectionTitle";

import one from '../../styles/images/one.jpg'
import two from '../../styles/images/two.jpg'
import three from '../../styles/images/three.jpg'
import four from '../../styles/images/four.jpg'
import five from '../../styles/images/five.jpg'
import six from '../../styles/images/six.jpg'
import seven from '../../styles/images/seven.jpg'


const Gallery = () => {
  const data = [one, two, three, four, five, six, seven];

  return (
    <LayoutOne title="Login">
      <SectionTitle title="Gallery" className="-center" />

      <HeroSliderOne data={data} />


      <br />
      <br />
    </LayoutOne>
  );
};

export default Gallery;
