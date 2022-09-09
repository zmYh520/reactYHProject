import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'


interface PrivateRouterProps extends RouteProps {
    component:React.ComponentType<any>
}
const AdminRoute:FC<PrivateRouterProps> = ({component:Component,...rest}) => {
  return (
   <Route {...rest} render={
    props=>{
        const auth = isAuth();
        if(auth){
            const {user:{role}} = auth as Jwt;

            if(role === 1) return <Component {...rest} />
        }
        return <Redirect to='/signin'/>
    }
   }/>
  )
}

export default AdminRoute
