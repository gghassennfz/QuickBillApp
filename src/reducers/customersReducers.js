
import {ADD_CUSTOMER,ALL_CUSTOMER,DELETE_CUSTOMER,EDIT_CUSTOMER} from '../actions/customersAction'

const initialStateValue=[]

const customersReducers=(state=initialStateValue,action)=>{

    switch(action.type){
         case ADD_CUSTOMER:{
            const isPresent = state.find(ele => ele.id === action.payload.id);
            if (isPresent) {
                return state;
            }
            return [action.payload,...state] 
         }
         case ALL_CUSTOMER:{
             return action.payload
         }
         case DELETE_CUSTOMER:{
             return state.filter((ele)=>{
                return ele.id !== action.payload.id 
             })
         }
         case EDIT_CUSTOMER:{
             return state.map((ele)=>{
                 if(ele.id===action.payload.id){
                     return {...ele,...action.payload}
                 }else{
                     return {...ele}
                 }
             })
         }
        default:{
            return state
        }
    }
}
export default customersReducers