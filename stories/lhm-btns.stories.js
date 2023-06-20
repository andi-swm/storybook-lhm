import twigBtnPrimary from "./lhm-btn-primary.twig";
import twigBtnSecondary from "./lhm-btn-secondary.twig";

export default {
  title: "LHM Digital/Components/Buttons",
  argTypes: {},
};

const TemplatePrimary = () => twigBtnPrimary({});
const TemplateSecondary = () => twigBtnSecondary({});

export const PrimaryButton = TemplatePrimary.bind({});
export const SecondaryButton = TemplateSecondary.bind({});

PrimaryButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
