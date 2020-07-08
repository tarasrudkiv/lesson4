export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: IAddres;
}

interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: IGeo;
}

interface IGeo {
  lat: number;
  lng: number;
}
