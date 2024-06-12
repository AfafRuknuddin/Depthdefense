import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionsNAC from "@/components/Solutions/SolutionsNAC";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Network Access Control"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Network Access Control"
      />
      <SolutionsNAC />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}