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
    url: "https://www.figma.com/file/PXwj2hl61LS7dSauqw66rb/muenchen.digital?type=design&node-id=1%3A2&t=UxcdsWG5UrNU2vuD-1",
  },
};
