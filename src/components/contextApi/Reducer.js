import React,{useState} from 'react'
export const initialState={
    baskets:[],
    favi:[],
    user:null
   

};

export const getBasketTotal=(baskets)=>baskets?.reduce((price,item)=>Math.ceil((item.price)+price), 0);
const reducer=(state,action)=>{
    console.log(action.qty)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                baskets: [...state.baskets, action.payload],
                
               
   
               
            };
            case 'ADD_TO_FAVI':
                
                const exist=state.favi.find((x)=>x.id===action.payload.id)
                
                if(exist){
                    return{  
                    ...state,
                    favi:[...state.favi]
                    }
                }
                else{
                    return{  
                        ...state,
                        favi:[...state.favi,action.payload]
                        }
                    
                }
                    
                
                break;

        case 'REMOVE_FROM_CART':
            const index=state.baskets.findIndex(
                (basketItem)=>basketItem.id===action.payload.id
                )
            let newbasket=[...state.baskets];
                
            if(index>=0){
                newbasket.splice(index,1);
              
                
            }else{
                console.warn("not in baskets")
            }
            return{
                ...state,
                baskets:newbasket,
               
                }
                case 'REMOVE_FROM_FAVI':
            const index1=state.favi.findIndex(
                (f)=>f.id===action.payload.id
                )
            let newfavi=[...state.favi];
                
            if(index1>=0){
                newfavi.splice(index1,1);
              
                
            }else{
                console.warn("not in faviourate list")
            }
            return{
                ...state,
                favi:newfavi,
               
                }

            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
        
        default:
            return state;
}
};

export default reducer;