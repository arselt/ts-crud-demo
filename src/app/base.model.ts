// Define the BaseModel interface with three properties:
export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}

// Define the Id type as a string or number
export type Id = string | number;
