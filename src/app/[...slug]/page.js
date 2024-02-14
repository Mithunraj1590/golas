

import { pageData } from "@/src/api/staticData/home";
import WidgetBlocks from "@/src/utils/WidgetBlock";
// import nextFetch from "@/utils/nextFetch";

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

const CommonPage = async ({ params, searchParams }) => {
  //   const data = await nextFetch(`/${slug}${langParam}`, options);

  //   const widgets = data?.data?.widgets ?? null;

  //   if (!data) {
  //     notFound();
  //   }

  return (
    <main>
      <WidgetBlocks widgets={pageData?.widgets} />
    </main>
  );
};

export default CommonPage;
