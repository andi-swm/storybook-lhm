import "./lhm-header.scss";
import twigHeader from "./lhm-header.twig";

export default {
  title: "LHM Digital/Layout/Header",
  argTypes: {},
};

const Template = () => twigHeader({});

export const DefaultHeader = Template.bind({});

DefaultHeader.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/PXwj2hl61LS7dSauqw66rb/muenchen.digital?type=design&node-id=106%3A192&t=UxcdsWG5UrNU2vuD-1",
  },
};
