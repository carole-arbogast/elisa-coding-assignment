import type { Meta, StoryObj } from "@storybook/react";

import { StyledLink } from "../app/StyledLink";

const meta: Meta<typeof StyledLink> = {
  title: "Components/StyledLink",
  component: StyledLink,
};

export default meta;

type Story = StoryObj<typeof StyledLink>;

export const Primary: Story = {
  render: () => <StyledLink href="#">Link</StyledLink>,
};
