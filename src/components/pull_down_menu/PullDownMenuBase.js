import React,{Component} from 'react';
import PropTypes from 'prop-types'
import PullDownMenuView from './PullDownMenuView'

export default class PullDownMenuBase extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        this.testMenuProps = [
            {btnTittle:"testet",btnFuc:()=>{console.log("testet")}},
            {btnTittle:"testet",btnFuc:()=>{console.log("testet")}},
            {btnTittle:"testet",btnFuc:()=>{console.log("testet")}},
        ]
    }

    render (){
        return (
            <div>
               <PullDownMenuView MenuList={this.testMenuProps}/>
            </div>
        )
    }
}


PullDownMenuView.protoTypes = {
    MenuList:PropTypes.arrayOf(
        PropTypes.shape(
            {
                btnTittle:PropTypes.string.isRequired,
                btnFuc:PropTypes.func.isRequired
            }
        ).isRequired
    ).isRequired
}