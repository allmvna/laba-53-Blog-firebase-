export interface IPostForm {
  title: string;
  description: string;
}

export interface IPost {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface IPostAPI {
  [id: string]: IPost;
  date: string;
  title: string;
  description: string;
}
