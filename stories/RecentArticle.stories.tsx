import type { Meta, StoryObj } from "@storybook/react";

import { RecentArticle } from "../app/news/[id]/RecentArticle";

const meta: Meta<typeof RecentArticle> = {
  title: "Components/News/RecentArticle",
  component: RecentArticle,
};

export default meta;

type Story = StoryObj<typeof RecentArticle>;

const newsArticle = {
  id: "123",
  title: "Turun seudulle uusinta 5G-teknologiaa – 3G-verkko poistuu käytöstä",
  //   FIXME static dates
  creationDate: new Date(),
  publishDate: new Date(),
};

export const Primary: Story = {
  render: () => <RecentArticle article={newsArticle} />,
};
