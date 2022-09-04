import SignUp from "../../components/core/SignUp";
import { AuthUnionType, RESET_SIGNUP, SIGNUP, signup, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/auth.actions";

export interface AuthState {
    signup:{
        loaded:boolean,
        success:boolean,
        message:string
    }
}


const initState:AuthState = {
    signup:{
        loaded:false,
        success:false,
        message:''
    }
}
export default function authReducer(state=initState,action:AuthUnionType){
    
    switch(action.type){
        
        case SIGNUP:
            return {
                ...state,
                signup:{
                    loaded:false,
                    success:false,
                }
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                signup:{
                    loaded:true,
                    success:true,
                }
            }
        case SIGNUP_FAIL:
            return{
                ...state,
                signup:{
                    loaded:true,
                    success:false,
                    message:action.message
                }
            }
        case RESET_SIGNUP://tip1//接下来去dispatch调用 
            return{
                ...state,
                signup:{
                    loaded:false,
                    success:false,
                    message:''
                }
            }
        default:
            return state
    }

    
    
}