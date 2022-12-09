export enum ROLES {
  ADMIN = "amdin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string;
  role: ROLES;
}

const arseltUser: User = {
  username: 'Arselt',
  role: ROLES.ADMIN
}
