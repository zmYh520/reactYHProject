import { Menu } from 'antd'
import { RouterState } from 'connected-react-router'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { AppState } from '../../store/reducers'


function useActiveClass(currentPath:string,path:string) {
    return currentPath === path?'ant-menu-item-selected':''
}
const Navigation = () => {
    const router = useSelector<AppState,RouterState>(state => state.router);
    const pathName = router.location.pathname
    const homeActive = useActiveClass(pathName,'/');
    const shopActive = useActiveClass(pathName,'/shop');
    const inActive = useActiveClass(pathName,'/signin');
    const upActive = useActiveClass(pathName,'/signup');
    const dashboardActive = useActiveClass(pathName,getAuthType());

    function getAuthType(){
      let url = '/user/dashboard';
      if(isAuth()){
        const {user:{role}} = isAuth() as Jwt;

        if(role === 1){
          url = '/admin/dashboard';
        }
      }
      return url
    }
  return (
    <div>
      <Menu mode='horizontal' selectable={false}>
        <Menu.Item className={homeActive}>
            <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item className={shopActive}>
            <Link to='/shop'>商城</Link>
        </Menu.Item>
        {
          !isAuth()&&
          <>
            <Menu.Item className={inActive}>
              <Link to='/signin'>登陆</Link>
            </Menu.Item>
            <Menu.Item className={upActive}>
                <Link to='/signup'>注册</Link>
            </Menu.Item>
          </>
        }
        {
          isAuth()&&<>
          <Menu.Item className={dashboardActive}>
              <Link to={getAuthType()}>dashboard</Link>
            </Menu.Item>
          </>
        }
      </Menu>
    </div>
  )
}

export default Navigation
