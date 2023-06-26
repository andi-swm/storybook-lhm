import twigAccordion from "./lhm-accordion.twig";
import "./lhm-accordion.scss";

export default {
  title: "LHM Digital/Components/Accordion",
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["button", "submit"],
      },
    },
  },
};

const Template = () => twigAccordion();

export const DefaultAccordion = Template.bind({});

DefaultAccordion.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A38&t=1BYOi3WoYgOah4v2-1",
  },
};
