export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddres;
}

interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: number;
  lng: number;
}
