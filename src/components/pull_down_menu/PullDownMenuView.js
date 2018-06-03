import React,{Component} from 'react';
import PropTypes from 'prop-types'
import PullDownMenuCell from './PullDownMenuCell'



export default class PullDownMenuView extends Component{
    constructor(){
        super()
    }

    componentDidMount(){

    }
    
   

    render (){
        var menuViewStyle ={
            position: 'absolute',
            display: 'block',
            top: '-100vh',
            left: '0',
            height: '100vh',
            width: '100vw',
            background: '#B39DDB',
            zIndex: '100'
        }
        
        var menuListWrapStyle ={
            position: 'absolute',
            display: 'block',
            top:'50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'  
        }

        return (
            <div className='menuWrap' style={menuViewStyle}>
                 <nav className = "menu-list-wrapper" style={menuListWrapStyle}>
                 {this.props.MenuList.map((btnData,index) => <PullDownMenuCell key={index} btnTittle={btnData.btnTittle} btnFuc={btnData.btnFuc}/>)}
                 </nav>
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