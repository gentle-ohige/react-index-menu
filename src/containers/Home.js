import React ,{Component} from 'react';

import TestBtn from '../components/button/TestBtn'

//import Router
import {
  withRouter
} from 'react-router-dom'

//Redux 
import {swithSample} from '../action/change_view'
import {
  connect
} from 'react-redux'

import { bindActionCreators, compose } from 'redux'
import * as CON from '../action/constance'

class Home  extends Component {
  render(){
    console.log(this.state)
    
    return(
      <div  style={{
        position:'relative',
        top:'0px',
        left:'0px',
        height:"100vh",
        width:"100vw",
        }}>

       <div style={{
         margin: '50px auto',
         width: '350px'}}>
         <div style={{height:"10px"}}/>
         <TestBtn text="OverlayMenu" onClick={()=>{
           console.log('====================================');
           console.log('overlay_menu chageState');
           console.log('====================================');
           this.props.onClick(CON.SAMPLES.PULL_DOWN_MENU)
           this.props.history.push("/overlay_menu");
            
         }}/>
         <div style={{height:"10px"}}/>
         <TestBtn text="Dummy" onClick={()=>{
           console.log('====================================');
           console.log('PullDownMenuBase chageState');
           console.log('====================================');
           this.props.onClick(CON.SAMPLES.DUMMY_SAMPLE)
          this.props.history.push("/dummy");
         }}/>
         <div style={{height:"10px"}}/>
         <TestBtn text="Dummy" onClick={()=>{
           console.log('====================================');
           console.log('PullDownMenuBase chageState');
           console.log('====================================');
           this.props.onClick(CON.SAMPLES.DUMMY_SAMPLE)
           this.props.history.push("/dummy02");
         }}/>
       
       </div>
     </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    view: state.changeView.sample,
  
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    onClick: (sample) => dispatch(swithSample(sample))
  }
 
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home)) ;
  