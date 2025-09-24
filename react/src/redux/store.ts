import {configureStore} from "@reduxjs/toolkit";
import {userSlise} from "./slices/userSlise.ts";
import {postSlise} from "./slices/postSlise.ts";
import {commentSlise} from "./slices/commentSlise.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlise.reducer,
        postSlice: postSlise.reducer,
        commentSlice: commentSlise.reducer,
    }
});