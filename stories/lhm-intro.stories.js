import twigIntro from "./lhm-intro.twig";
import twigIntroHome from "./lhm-intro-home.twig";
import twigIntroReport from "./lhm-intro-report.twig";
import twigIntroEvent from "./lhm-intro-event.twig";

export default {
  title: "LHM Digital/Components/Intro",
  argTypes: {},
};

const TemplateDefault = () => twigIntro({});
const TemplateHome = () => twigIntroHome({});
const TemplateReport = () => twigIntroReport({});
const TemplateEvent = () => twigIntroEvent({});

export const DefaultIntro = TemplateDefault.bind({});
export const IntroHome = TemplateHome.bind({});
export const IntroReport = TemplateReport.bind({});
export const IntroEvent = TemplateEvent.bind({});

DefaultIntro.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};

IntroHome.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};

IntroReport.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};

IntroEvent.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=6%3A4&t=4uByRUZZeRsxSL1u-1",
  },
};
