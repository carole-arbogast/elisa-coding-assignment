import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCardContent } from "../app/ArticleCardContent";

const meta: Meta<typeof ArticleCardContent> = {
  title: "Components/ArticleCardContent",
  component: ArticleCardContent,
};

export default meta;

type Story = StoryObj<typeof ArticleCardContent>;

const newsArticle = {
  id: "123",
  title: "Turun seudulle uusinta 5G-teknologiaa – 3G-verkko poistuu käytöstä",
  creationDate: new Date("2023-08-23"),
  publishDate: new Date("2023-08-23"),
};

export const Primary: Story = {
  render: () => <ArticleCardContent article={newsArticle} />,
};
