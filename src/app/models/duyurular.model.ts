import { IGeneralResponse } from "./general.model";

export interface IDuyuru {
  id: string;
  title: string;
  description: string;
}

export interface IGetDuyurularResponse extends IGeneralResponse {
  result: IDuyuru[];
}
