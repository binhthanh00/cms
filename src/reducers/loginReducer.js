import {LOGIN} from '../constants/ActionType'
const initialStateLogin = {
    login:{
        isLoggedIn: false
    },
};
const loginReducer = (state=initialStateLogin,action) =>{
    switch(action.type){
        case LOGIN:
            return {
                login: {
                   isLoggedIn: true,
                    
                },
            };
      default:
    return state;
        }
};

export {
    loginReducer
}