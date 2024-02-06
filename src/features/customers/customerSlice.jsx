const initialCustomerState = {
    fullname: "",
    id: "",
    createdAt:""
  };

export default function customerReducer(state = initialCustomerState, action){
    switch(action.type){
      case "customer/createCustomer":{
        return {
          ...state,
          fullname: action.payload.fullname,
          id: action.payload.id,
          createdAt: action.payload.createdAt
        }
  
      }
      default: return state
    }
  }

  export function createCustomer(name,id){
    return {
      type: "customer/createCustomer",
      payload:{
        fullname:name,
        id,
        createdAt:new Date
      }
    }
  }