/**
 * Created by jim on 2016/6/15.
 */
import React,{ Component } from 'react';
import Const from '../utils/const.js';
import '../less/app.less';

export class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1> Hello Wrold!!!{`${Const.text}`}</h1>
        )
    }
}