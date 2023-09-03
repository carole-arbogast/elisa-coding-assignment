import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../app/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => <Navbar />,
};