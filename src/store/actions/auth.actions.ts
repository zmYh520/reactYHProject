export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const RESET_SIGNUP = "RESET_SIGNUP" //1.先创建一个事件名称

export interface SingupPayload{
    name:string,
    password:string,
    email:string
}

export interface SignupAction{
    type:typeof SIGNUP
    payload:SingupPayload
}

export interface SignupSuccessAction{
    type:typeof SIGNUP_SUCCESS
}

export interface SignupFailAction{
    type:typeof SIGNUP_FAIL,
    message:string
}

export interface ResetSignupAction{//2定义action对象的接口
    type:typeof RESET_SIGNUP
}


export const signup = (payload:SingupPayload):SignupAction=>({
    type:SIGNUP,
    payload
})

export const signupSuccess = ():SignupSuccessAction=>({
    type:SIGNUP_SUCCESS
});

export const signupFail = (message:string):SignupFailAction=>({
    type:SIGNUP_FAIL,
    message
})

export const resetSignup = ():ResetSignupAction=>(//3定义actioncreator
    {
        type:RESET_SIGNUP
    }
)



export type AuthUnionType = SignupAction | SignupSuccessAction | SignupFailAction |ResetSignupAction;//4.放在联合类型里面（接下来去reducer里面，因为reducer接收这个action,swith case那边）tip1