export default {
  title: "Example/M-Login Button",
  tags: ["autodocs"],
  render: ({ label, variant, size }) => {
    return `<button type="button" class="mlogin-btn ${
      size === "small" ? "mlogin-btn--small" : ""
    } ${
      variant === "secondary" ? "mlogin-btn--secondary" : ""
    }"><span>${label}</span></button>`;
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
  },
};

export const Primary = {
  args: {
    label: "Mit M-Login anmelden",
    variant: "primary",
    size: "large",
  },
};

export const PrimarySmall = {
  args: {
    label: "Mit M-Login anmelden",
    variant: "primary",
    size: "small",
  },
};

export const Secondary = {
  args: {
    label: "Mit M-Login anmelden",
    variant: "secondary",
    size: "large",
  },
};

export const SecondarySmall = {
  args: {
    label: "Mit M-Login anmelden",
    variant: "secondary",
    size: "small",
  },
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/OCkOc9TZUzaagGJpRpgr9Q/Anmeldebutton?type=design&node-id=506%3A216&t=D30VpMsK0Yqyl6es-1",
  },
};

PrimarySmall.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/OCkOc9TZUzaagGJpRpgr9Q/Anmeldebutton?type=design&node-id=506%3A216&t=D30VpMsK0Yqyl6es-1",
  },
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/OCkOc9TZUzaagGJpRpgr9Q/Anmeldebutton?type=design&node-id=506%3A216&t=D30VpMsK0Yqyl6es-1",
  },
};

SecondarySmall.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/OCkOc9TZUzaagGJpRpgr9Q/Anmeldebutton?type=design&node-id=506%3A216&t=D30VpMsK0Yqyl6es-1",
  },
};
