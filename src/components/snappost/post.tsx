export type Post = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  tags: { id: number; tagName: string }[];
  publicDate: string;
  slug: string;
  featureImage?: any[];
  metaDescription: string;
  category: { slug: string };
};
