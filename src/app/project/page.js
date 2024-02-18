import React from "react";

import WidgetBlocks from "../../utils/WidgetBlock";
import { pageData } from "../../api/staticData/project";
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = params.id;

//   const product = await fetch(`https://.../${id}`).then((res) => res.json());
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }
const ProjectPage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default ProjectPage;
