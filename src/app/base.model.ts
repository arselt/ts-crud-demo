export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}

export type Id = string | number;
