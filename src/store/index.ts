import {configureStore} from '@reduxjs/toolkit';


const index = configureStore({
    reducer: {}
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof index.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof index.dispatch