import { Category } from "../models/category";

export const GET_CATEGOTY = 'GET_CATEGOTY';
export const GET_CATEGOTY_SUCCESS = 'GET_CATEGOTY_SUCCESS';

export interface GetcategotyAction{
    type:typeof GET_CATEGOTY,
}

export interface GetcategotySucessAction{
    type:typeof GET_CATEGOTY_SUCCESS,
    payload:Category[]
}

export const getCategoty =():GetcategotyAction=>({
    type:GET_CATEGOTY
})

export const getCategorySuccess = (payload:Category[]):GetcategotySucessAction=>({
    type:GET_CATEGOTY_SUCCESS,
    payload
})


export type CategoryUnionType = 
GetcategotyAction|
GetcategotySucessAction
