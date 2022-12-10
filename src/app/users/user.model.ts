import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = "amdin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
