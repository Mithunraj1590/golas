import React from "react";
import { pageData } from "../../data/about";
import WidgetBlocks from "../../components/WidgetBlock";


const AboutPage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default AboutPage;

