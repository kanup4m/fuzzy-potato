import { Breadcrumb, Form, Input, Button, message, Row, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import HeroSliderOne from "../../components/sections/hero-slider/HeroSliderOne"
import heroslideOneData from "../../data/sections/hero-slider.json";
import SectionTitle from "../../components/other/SectionTitle";


const Gallery = () => {



    return (
        <LayoutOne title="Login">
            <SectionTitle title="Gallery" className="-center" />

            <HeroSliderOne data={heroslideOneData.one} />
            <br />
            <br />
            <br />

        </LayoutOne>
    );
};

export default Gallery;