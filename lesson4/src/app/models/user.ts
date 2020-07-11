export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;

}

interface Geo {
  lat: number;
  lng: number;
}
