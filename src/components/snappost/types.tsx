export type Post = {
  id: number;
  title: string;
  content: string;
  postViews: number;
  tags: { id: number; name: string; slug: string }[];
  publicDate: string;
  slug: string;
  post_thumbnail?: any;
  heading_tag: any;
  category: { slug: string };
};
