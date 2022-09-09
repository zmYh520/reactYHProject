
/**注册 */
export const SIGNUP = "SIGNUP";//注册
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";//注册成功
export const SIGNUP_FAIL = "SIGNUP_FAIL";//注册失败
export const RESET_SIGNUP = "RESET_SIGNUP" //1.先创建一个事件名称()

/**登陆 */
export const SIGNIN = "SIGNIN"//登陆
export const SIGNIN_SUCCESS="SIGNIN_SUCCESS"//登陆成功
export const SIGNIN_FAIL="SIGNIN_FAIL"//登陆失败

/**注册 */
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


/**登陆 */


export interface SigninPaylod{
    email:string,
    password:string
}

export interface SigninAction{
    type:typeof SIGNIN,
    payload:SigninPaylod
}

export interface SigninSuccessAction{
    type:typeof SIGNIN_SUCCESS
}

export interface SigninFailAction{
    type:typeof SIGNIN_FAIL,
    message:string
}


/**注册 */

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

/**登陆 */


export const signin = (payload:SigninPaylod):SigninAction=>({
    type:SIGNIN,
    payload
})

export const signinSuccess = ():SigninSuccessAction=>({
    type:SIGNIN_SUCCESS
})

export const signinFail = (message:string):SigninFailAction=>({
    type:SIGNIN_FAIL,
    message
})



export type AuthUnionType = 
SignupAction 
| SignupSuccessAction 
| SignupFailAction 
| ResetSignupAction
| SigninAction
| SigninSuccessAction
| SigninFailAction;//4.放在联合类型里面
//（接下来去reducer里面，因为reducer接收这个action,swith case那边）tip1