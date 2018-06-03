import * as CON from '../action/constance'


const initialState = {
    sample:CON.SAMPLES.SAMPlE_HOME
}

export default function changeView (state = initialState,action){
 
    if(action.type === CON.ACTIONS.CHANGE_SAMPLE){
        switch (action.sample) {
            case CON.SAMPLES.SAMPlE_HOME:
                console.log(action);
                return Object.assign({},state,{sample:CON.SAMPLES.SAMPlE_HOME})
            case CON.SAMPLES.PULL_DOWN_MENU:
                  console.log(action);
                return Object.assign({},state,{sample:CON.SAMPLES.PULL_DOWN_MENU})
            case CON.SAMPLES.DUMMY_SAMPLE:
                console.log(action);
                return Object.assign({},state,{sample:CON.SAMPLES.DUMMY_SAMPLE})
            default :
                return state

        }
    }
    return state

}
