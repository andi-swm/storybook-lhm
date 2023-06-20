import twigHr from "./lhm-hr.twig";

export default {
  title: "LHM Digital/Components/HorizontalLine",
  argTypes: {},
};

const TemplateHr = () => twigHr({});

export const HrVariations = TemplateHr.bind({});

HrVariations.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
