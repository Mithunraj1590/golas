import Block from "./block";

const WidgetBlocks = ({
  widgets = [],
  ssrDeviceType,
  saveFolderType,
  saveFolderId,
  slug,
}) => {
  const child = widgets.map((widget) => (
    <Block
      key={widget.id}
      widget={widget}
      ssrDeviceType={ssrDeviceType}
      saveFolderType={saveFolderType}
      saveFolderId={saveFolderId}
      slug={slug}
    />
  ));
  return child;
};

export default WidgetBlocks;
