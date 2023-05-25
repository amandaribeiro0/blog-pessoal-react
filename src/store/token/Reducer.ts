export interface UserState{
    tokens: string,
}

const initialState = {
    tokens:"",
}

export const reducer = (state: UserState = initialState, action: any) =>{
    switch (action.type){
        case "ADD_TOKEN":{
            return{
                tokens: action.payload
            }
        }
        default:
                return state
    }
}