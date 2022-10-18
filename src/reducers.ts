import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const activitiesReducer = createReducer({activities: {}}, (builder) => {
//   builder
//     .addCase('SET_ACTIVITES', (state: RootState, action) => {
//       state.activities = action.payload;
//     })
// })
type activitiesStateType = {
  [key: string]: boolean;
}

const initialState: activitiesStateType = {};

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities: (state: activitiesStateType, action: PayloadAction<string[]>) => {
      action.payload.forEach(activity => {
        state[activity] = false;
      })
    },
    toggleActivity: (state: activitiesStateType, action: PayloadAction<{activity: string, status: boolean}>) => {
      state[action.payload.activity] = action.payload.status;
    }
  }
})

export const {
  setActivities,
  toggleActivity
} = activitiesSlice.actions;

export default activitiesSlice.reducer;
