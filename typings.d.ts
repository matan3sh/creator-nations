export type ContactData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

export interface HeaderLinks {
  title: string;
  link: string;
}

export interface Card {
  _id: string;
  name: string;
  image: string;
  title?: string;
}
