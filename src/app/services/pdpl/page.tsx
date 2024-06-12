import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import PDPL from "@/components/Services/PDPL";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="PDPL"
        homePageUrl="/"
        homePageText="Home"
        activePageText="PDPL"
      />

      <PDPL />

      <PartnersTwo />

      <Footer />
    </>
  );
}