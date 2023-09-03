import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../app/Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const newsArticle = {
  id: "123",
  title: "News Article",
  //   FIXME static dates
  creationDate: new Date(),
  publishDate: new Date(),
};

export const Primary: Story = {
  render: () => (
    <Card>
      <h2>{newsArticle.title}</h2>
    </Card>
  ),
};
