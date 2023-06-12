import twigFooter from "./lhm-footer.twig";

export default {
  title: "LHM Digital/Layout/Footer",
  argTypes: {},
};

const Template = () => twigFooter({});

export const DefaultFooter = Template.bind({});

DefaultFooter.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=0%3A1&t=4uByRUZZeRsxSL1u-1",
  },
};
