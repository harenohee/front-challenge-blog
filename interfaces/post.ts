export type PostType = {
  title: string;
  date: string;
  coverImage: string;
  description: string;
  slug: string;
  tag: string[];
};
export interface IPost {
  [key: string]: string;
}
