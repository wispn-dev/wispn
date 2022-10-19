import { configureStore } from '@reduxjs/toolkit'
import activitiesReducer from './reducers';


// export const store = configureStore({
//   reducer: {
//     testForm: testFormReducer,
//     userInput: userInputReducer,
//     code: codeSliceReducer,
//     clipboard: clipboardReducer,
//     userInfo: userInfoReducer,
//     navPanel: navPanelReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch