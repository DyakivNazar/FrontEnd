import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";
import {IComment} from "../../models/IComment.ts";

type CommentSliseType = {
    comments: IComment[];
}

const initialState: CommentSliseType ={comments: []};

const loadComments = createAsyncThunk(
    "commentsSlice/loadComments",
    async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments');

            return thunkAPI.fulfillWithValue(comments)
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);

export const commentSlise = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action)=>{
                console.log(state);
                console.log(action);
            })


});

export const commentSliceActions = {
    ...commentSlise.actions, loadComments
}
