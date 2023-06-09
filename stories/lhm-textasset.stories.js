import twigTextAsset from "./lhm-textasset.twig";

export default {
  title: "LHM Digital/Components/TextAsset",
  argTypes: {},
};

const TemplateTextAsset = () => twigTextAsset({});

export const DefaultSection = TemplateTextAsset.bind({});

DefaultSection.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A696&t=MAUtbg71k4My7AX1-1",
  },
};
