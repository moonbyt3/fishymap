import React from 'react'

import {NavigationWrapper} from './navigation.css'

import { slide as Menu } from 'react-burger-menu'

const Navigation = () => {
    return (
        <NavigationWrapper>
           <Menu right>
                <span>Podešavanja:</span>
           </Menu>
        </NavigationWrapper>
    )
}

export default Navigation;