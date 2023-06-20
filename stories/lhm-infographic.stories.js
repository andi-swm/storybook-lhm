import twigInfographic from "./lhm-infographic.twig";

export default {
  title: "LHM Digital/Components/Infographic",
  argTypes: {},
};

const TemplateInfographic = () => twigInfographic({});

export const DefaultInfographic = TemplateInfographic.bind({});

DefaultInfographic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
