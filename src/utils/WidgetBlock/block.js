import HomeBanner from "../../widgets/HomeBanner";
import AboutBanner from "../../widgets/AboutBanner";
import HomeAbout from "../../widgets/HomeAbout";
import HomeWorks from "../../widgets/HomeWorks";
import HomeService from "../../widgets/HomeServices";
import HomeArticles from "../../widgets/HomeArticles";
import HomeAboutExpertise from "../../widgets/HomeAboutExpertise";
import HomeRatingsAndAwards from "../../widgets/HomeRatingsAndAwards";

const setComponent = (widget) => {
  const components = {
    HomeBanner,
    HomeAbout,
    HomeWorks,
    AboutBanner,
    HomeService,
    HomeArticles,
    HomeAboutExpertise,
    HomeRatingsAndAwards,
  };
  return components[widget.widget_type] || components["default"];
};
const Block = ({
  widget,
  ssrDeviceType,
  saveFolderType,
  saveFolderId,
  slug,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
      ssrDeviceType={ssrDeviceType}
      saveFolderId={saveFolderId}
      saveFolderType={saveFolderType}
      slug={slug}
    />
  );
};

export default Block;
