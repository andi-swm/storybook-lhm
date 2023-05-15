import "./lhm-footer.scss";
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
    url: "https://www.figma.com/file/PXwj2hl61LS7dSauqw66rb/muenchen.digital?type=design&node-id=1%3A2&t=UxcdsWG5UrNU2vuD-1",
  },
};
