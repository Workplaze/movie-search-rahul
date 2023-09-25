export interface MovieObject {
  id: number;
  name: string;
  image: string;
  rating: string;
  summary: string;
}

type DefaultValues = {
  first_name: string;
  last_name: string;
  dob: string;
  age: string;
  role: any;
  status: any;
  email: string;
  contact_number: string;
  id: string;
  gender: string;
};

export interface Form {
  title: string;
  closeModal: () => void;
  defaultValues?: DefaultValues;
  id?: string;
}
