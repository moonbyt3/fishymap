import React, {useContext} from 'react'

import {NavigationWrapper} from './navigation.css'

import { slide as Menu } from 'react-burger-menu'

import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import LogOut from '../LogOut/LogOut'
import { AuthContext } from "../../App";

const Navigation = () => {

    const Auth = useContext(AuthContext);

    return (
        <NavigationWrapper>
           <Menu right>
                
                {Auth.isLoggedIn && <>
                    <LogOut />
                    <span>Podešavanja:</span>
                </>}
                {!Auth.isLoggedIn && <>
                    <LogIn />
                    <SignUp />
                </>}
           </Menu>
        </NavigationWrapper>
    )
}

export default Navigation;