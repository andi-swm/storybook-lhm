import twigVideo from "./lhm-video.twig";

export default {
  title: "LHM Digital/Components/Video",
  argTypes: {},
};

const TemplateVideo = () => twigVideo({});

export const YoutubeEmbed = TemplateVideo.bind({});

YoutubeEmbed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/tDn37wQf4r5cIoUWBUu28r/UI-Design?type=design&node-id=1%3A671&mode=design&t=NyPWwuWwePUjK4Qq-1",
  },
};
