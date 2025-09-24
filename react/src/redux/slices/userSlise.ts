import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[];
}

const initialState: UserSliceType ={users: []};

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IUser[]>('/users');

            return thunkAPI.fulfillWithValue(users)
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);

export const userSlise = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action)=>{
                console.log(state);
                console.log(action);
            })


});

export const userSliceActions = {
    ...userSlise.actions, loadUsers
}
