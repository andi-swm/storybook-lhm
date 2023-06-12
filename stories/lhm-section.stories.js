import twigSection from "./lhm-section.twig";
import "./lhm-section.scss";

export default {
  title: "LHM Digital/Layout/Section",
  argTypes: {},
};

const Template = () => twigSection({});

export const DefaultSection = Template.bind({});

DefaultSection.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A954&t=4uByRUZZeRsxSL1u-1",
  },
};
