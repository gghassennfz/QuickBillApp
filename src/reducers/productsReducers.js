import { ADD_PRODUCT,ALL_PRODUCTS,DELETE_PRODUCT,EDIT_PRODUCT } from '../actions/productsAction'
const initailStateValue=[]

const productsReducers=(state=initailStateValue,action)=>{
   
         switch(action.type){
            case ADD_PRODUCT:{
                return [action.payload,...state]
            }
            case ALL_PRODUCTS:{
                return action.payload
            }
            case DELETE_PRODUCT:{
                return state.filter((ele)=>{
                    return ele.id !== action.payload._id
                })
            }
            case EDIT_PRODUCT:{
                return state.map((ele)=>{
                    if(ele.id === action.payload.id){
                        return {...ele, ...action.payload}
                    } else {
                        return {...ele}
                    }
                })
            }
            default:{
                return state
            }
         }
}
export default productsReducers