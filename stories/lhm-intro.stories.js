import twigIntro from "./lhm-intro.twig";

export default {
  title: "LHM Digital/Components/Intro",
  argTypes: {},
};

const Template = () => twigIntro({});

export const DefaultIntro = Template.bind({});

DefaultIntro.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
