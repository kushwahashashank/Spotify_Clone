//initial state of the states
export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null, 
    //remove after finishing
    // token:'BQDNQqa3FFcvABaTiU2_KEEOtLw67su_EutJ3qaBgHgEIDZ70fANcWfeBTc72AiTcEXGRiCmXIeKZdqyBaMAUz2oKwyBKOhMdM4f3Dsvs773X5WWhIMpck3lj56riqWYg_FCj0QxT42t3zbIu1-XxDTi4tfAdkeAMqpxNLhn7Fs20WtzNNaehzZ3aweRqdSvloHOg4lF2maHJ1VHg_TR',
};

//creating function to manuplate state 
const reducer = (state,action)=>{
// console.log(action);

switch(action.type){
    //change the state of user
case  'SET_USER':
return{
    ...state,
user:action.user,
};
case 'SET_TOKEN':
    return{
        ...state,
        token:action.token,
};
case 'SET_PLAYLISTS':
    return{
        ...state,
        playlists:action.playlists,
    };
case 'SET_DISCOVER_WEEKLY':
    return{
        ...state,
        discover_weekly:action.discover_weekly,
    }    
default:
    return state
    
}

}

export default reducer