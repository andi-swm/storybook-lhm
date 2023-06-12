import twigBreadcrumb from "./lhm-breadcrumb.twig";

export default {
  title: "LHM Digital/Components/Breadcrumb",
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["button", "submit"],
      },
    },
  },
};

const Template = () => twigBreadcrumb();

export const DefaultBreadcrumb = Template.bind({});

DefaultBreadcrumb.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A722&t=4uByRUZZeRsxSL1u-1",
  },
};
