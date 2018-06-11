import React,{Component} from 'react'
import styles from './sample_style.css.js'

//Button
import TestBtn from '../components/button/TestBtn'

//MenuView
import OverlayMenuView from '../components/overlay_menu/OverlayMenuView'

class OverlayMenuSample
 extends Component {




    constructor (props){
        super(props)
        this.state ={
            isMenuOpen:false,
           
        }
    }

    btnClicked (){
        console.log("itemClicked")
        this.setState({ 
            isMenuOpen:!this.state.isMenuOpen,
        })
        
    }


    componentWillMount(){
        this.testMenuProps = [
            {btnTittle:"testet",btnFuc:()=>{console.log("button01")}},
            {btnTittle:"testet",btnFuc:()=>{console.log("button02")}},
            {btnTittle:"testet",btnFuc:()=>{console.log("button03")}},
        ]
    }

    render (){
        if(this)
        return (
            <div>
               
                <div style={styles.sample_base_view}>
                    <div style={styles.sample_base_contents}>
                         <h1 className='test'> OverlayMenuSample  </h1>
                         <div style={styles.item_margin}/>
                         <TestBtn  
                         text={this.state.isMenuOpen ? "OPEN" : "CLOSE"} 
                         onClick={this.btnClicked.bind(this)}/>
                    </div>
                </div>
                <OverlayMenuView 
                 isMenuOpen={this.state.isMenuOpen}
                 onClickedFrame = {this.btnClicked.bind(this)}
                  MenuList = {this.testMenuProps}/>

            </div>
        )
    }
}



export default OverlayMenuSample;