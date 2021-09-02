export interface ARTICLE {
  _id: string;
  title: string;
  content: string;
  publisher: {
    id: string;
    name: string;
  }
  createdAt: string;
}

export const defaultArticle: ARTICLE = {
  _id: '',
  title: '',
  content: '',
  publisher: {
    id: '',
    name: '',
  },
  createdAt: ''
}