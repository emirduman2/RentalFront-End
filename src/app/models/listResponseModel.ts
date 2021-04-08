
import { ResponseModel } from "./responseModel";
import { SingleResponseModel } from "./singleResponseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
}