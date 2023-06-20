import twigQuote from "./lhm-quote.twig";

export default {
  title: "LHM Digital/Components/Quote",
  argTypes: {},
};

const Template = () => twigQuote({});

export const DefaultQuote = Template.bind({});

DefaultQuote.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A954&t=4uByRUZZeRsxSL1u-1",
  },
};
