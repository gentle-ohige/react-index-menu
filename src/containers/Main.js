import React,{Component} from 'react'


import { Switch, Route ,withRouter} from 'react-router-dom'

//Views
import Home from './Home'
import Dummy from '../components/dummys/Dummy'

//Redux
import * as CON from '../action/constance'
import {connect} from 'react-redux'
import { compose } from '../../../../../../Library/Caches/typescript/2.8/node_modules/redux';



class Main extends Component  {

    componentWillUpdate(prevProps, prevState) {
      
        // console.log(prevProps)
        // switch(this.props.view)
        // {
        //     case CON.SAMPLES.SAMPlE_HOME:
             
        //     break;
        //     case CON.SAMPLES.PULL_DOWN_MENU:
        //           this.props.history.push("/dummy");
        //      break;
        //      case CON.SAMPLES.SLIDE_MENU:
        //          this.props.history.push("/dummy");
        //      break;
        //      case CON.SAMPLES.DUMMY_SAMPLE:
              
        //         this.props.history.push("/dummy");
        //      break;
        //      default :
        //       this.props.history.push("/");
        //      break;
        // }
       
    }
    render(){
        return (
            <main>
               <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/pull_down_menu' component={Dummy}/>
                  <Route path='/dummy' component={Dummy}/>
                  <Route path='/dummy02' component={Dummy}/>
               </Switch>
            </main>   
        )  
    }
} 

function mapStateToProps(state) {
    return {
      view: state.changeView.sample,
    
    }
  }


export default withRouter (connect(mapStateToProps,null)(Main))