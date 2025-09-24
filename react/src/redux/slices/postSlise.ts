import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";

type PostSliceType = {
    posts: IPost[];
}

const initialState: PostSliceType ={posts: []};

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await getAll<IPost[]>('/posts');

            return thunkAPI.fulfillWithValue(posts)
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);

export const postSlise = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action)=>{
                console.log(state);
                console.log(action);
            })


});

export const postSliceActions = {
    ...postSlise.actions, loadPosts
}
