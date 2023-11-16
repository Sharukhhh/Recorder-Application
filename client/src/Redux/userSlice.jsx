import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userDetails : null
}


export const userSlice = createSlice({
    name  : 'auth',
    initialState,

    reducers : {
        getUserData : (state , action) => {
            state.userDetails = action.payload
        },

        logoutUser : (state) => {
            state.userDetails = null;
        }
    }
})


export const {getUserData , logoutUser} = userSlice.actions;
export default userSlice.reducer;