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
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A922&t=MAUtbg71k4My7AX1-1",
  },
};
