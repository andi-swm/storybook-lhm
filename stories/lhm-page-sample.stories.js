import twigPageSample from "./lhm-page-sample.twig";

export default {
  title: "LHM Digital/Pages/Sample",
  argTypes: {},
};

const Template = () => twigPageSample({});

export const DefaultSamplePage = Template.bind({});

DefaultSamplePage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=0%3A1&t=SHBesJN0n5VPwfVS-1",
  },
};
