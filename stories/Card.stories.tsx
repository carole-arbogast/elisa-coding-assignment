import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../app/_components/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: () => <Card>Card Content</Card>,
};
