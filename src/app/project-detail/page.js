import React from "react";

import WidgetBlocks from "../../utils/WidgetBlock";
import { pageData } from "../../api/staticData/project-detail";

const ProductPage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default ProductPage;
