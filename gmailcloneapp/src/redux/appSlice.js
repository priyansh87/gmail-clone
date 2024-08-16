import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name :"appslice",
    initialState : {
        open:false ,
        emails : [] , 
        selectedEmail : null ,
        searchText :"",
        user : null

    },
    reducers: {
        setOpen:( state , action )=>{
            state.open = action.payload // jo bhi value ayegi vo action.payload mai ati hai 
        },
        setEmails:( state , action)=>{
            state.emails = action.payload

        },
        setSelectedEmail: (state , action )=>{
            state.selectedEmail = action.payload ;
        },
        setSearchText: (state, action )=>{
            state.searchText = action.payload ;
        },
        setUser: (state , action )=>{
            state.user = action.payload ;
        }
    }
})

export const {setOpen ,setEmails,setSelectedEmail,setSearchText,setUser} =  appSlice.actions ;

export default appSlice.reducer ;