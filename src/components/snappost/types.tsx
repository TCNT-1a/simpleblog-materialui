export type Post = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  tags: { id: number; name: string; slug: string }[];
  publicDate: string;
  slug: string;
  featureImage?: any;
  metaDescription: string;
  category: { slug: string };
};
