import { CategoryUnionType, GET_CATEGOTY, GET_CATEGOTY_SUCCESS } from "../actions/category.action";
import { Category } from "../models/category";

export interface categoryState{
    category:{
        loaded:boolean,
        success:boolean,
        result:Category[]
    }
}

const initialSate:categoryState={
    category:{
        loaded:false,
        success:false,
        result:[]
    }
}

export default function categoryReduce(state=initialSate,action:CategoryUnionType){
    console.log(action);
    
    switch(action.type){
        case GET_CATEGOTY:
            return{
                ...state,
                category:{
                    loaded:true,
                    success:false,
                    result:[]
                }
            }
        case GET_CATEGOTY_SUCCESS:
            return{
                ...state,
                category:{
                    loaded:true,
                    success:true,
                    result:action.payload
                }
            }

        default:
            return state
    }
}