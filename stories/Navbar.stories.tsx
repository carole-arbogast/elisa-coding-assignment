import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Navbar } from "../app/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => <Navbar />,
};

export const OpenMenu: Story = {
  render: () => <Navbar />,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hamburgerIcon = canvas.getByLabelText("Open menu");

    await userEvent.type(hamburgerIcon, "onClick");
    const mobileMenu = canvas.getByLabelText("Mobile Menu");

    expect(mobileMenu).toBeInTheDocument();
  },
};
