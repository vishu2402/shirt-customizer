import { swatch, fileIcon, ai, logoShirt, stylishShirt, colorpicker, upload, shirtWithLogo } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: colorpicker,
  },
  {
    name: "filepicker",
    icon: upload,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: shirtWithLogo,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
