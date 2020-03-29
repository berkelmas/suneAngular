import { IGeneralResponse } from "./general.model";

export interface IBurs {
  id: string;
  title: string;
  description: string;
}

export interface IGetAllBurslar extends IGeneralResponse {
  result: IBurs[];
}
