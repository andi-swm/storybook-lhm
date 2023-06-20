import twigLinklist from "./lhm-linklist.twig";

export default {
  title: "LHM Digital/Components/Linklist",
  argTypes: {},
};

const TemplateLinklist = () => twigLinklist({});

export const DefaultLinklist = TemplateLinklist.bind({});

DefaultLinklist.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
