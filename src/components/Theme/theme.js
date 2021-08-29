import React from 'react';
import { Button } from '@material-ui/core';
//import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import {ThemeContext} from '../../context/ThemeContext.js';

export default class Theme extends React.Component{
    static contextType = ThemeContext;

    render(){
        return(
            <>
                <Button onClick={this.context.toggleMode} > Change Mode </Button>
            </>
        )
    }
};