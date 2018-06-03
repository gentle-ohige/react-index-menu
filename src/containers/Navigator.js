
import React,{Component} from 'react'
import { Switch, Route ,withRouter} from 'react-router-dom'

//Redux
import * as CON from '../action/constance'
import {connect} from 'react-redux'
import { compose } from '../../../../../../Library/Caches/typescript/2.8/node_modules/redux';

class Navigator extends Component {

    
    shouldComponentUpdate(props, state) {
        console.log('====================================');
                console.log(props);
                console.log('====================================');
        switch(this.props.view)
        {
            case CON.SAMPLES.SAMPlE_HOME:
            this.props.history.push("/");
            console.log('====================================');
            console.log(props);
            console.log('====================================');
             
            break;
            case CON.SAMPLES.PULL_DOWN_MENU:
                this.props.history.push("/pull_down_menu");
                console.log('====================================');
                console.log(props);
                console.log('====================================');
             break;
             case CON.SAMPLES.SLIDE_MENU:
                 this.props.history.push("/dummy");
                 console.log('====================================');
                 console.log(props);
                 console.log('====================================');
             break;
             case CON.SAMPLES.DUMMY_SAMPLE:
                 this.props.history.push("/dummy02");
                 console.log('====================================');
                 console.log(props);
                 console.log('====================================');
             break;
             default :
            
        }
        return true;
       
    }

    render (){
        return (
            <div> 
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
      view: state.changeView.sample,
    
    }
  }


export default withRouter (connect(mapStateToProps,null)(Navigator))