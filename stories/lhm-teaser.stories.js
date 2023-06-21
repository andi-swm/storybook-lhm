import twigTeaser from "./lhm-teaser.twig";
import twigTeaserNoimage from "./lhm-teaser-noimage.twig";
import twigTeaserEvent from "./lhm-teaser-event.twig";
import twigTeaserReport from "./lhm-teaser-report.twig";
import twigTeaserHero from "./lhm-teaser-hero.twig";

export default {
  title: "LHM Digital/Components/Teaser",
  argTypes: {},
};

const Template = () => twigTeaser({});
const TemplateNoImage = () => twigTeaserNoimage({});
const TemplateEvent = () => twigTeaserEvent({});
const TemplateReport = () => twigTeaserReport({});
const TemplateHero = () => twigTeaserHero({});

export const DefaultTeaser = Template.bind({});
export const TeaserNoImage = TemplateNoImage.bind({});
export const TeaserEvent = TemplateEvent.bind({});
export const TeaserReport = TemplateReport.bind({});
export const TeaserHero = TemplateHero.bind({});

DefaultTeaser.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A804&t=MAUtbg71k4My7AX1-1",
  },
};

TeaserNoImage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A804&t=MAUtbg71k4My7AX1-1",
  },
};

TeaserEvent.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A804&t=MAUtbg71k4My7AX1-1",
  },
};

TeaserReport.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A804&t=MAUtbg71k4My7AX1-1",
  },
};

TeaserHero.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A804&t=MAUtbg71k4My7AX1-1",
  },
};
