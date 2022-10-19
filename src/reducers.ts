import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const activitiesReducer = createReducer({activities: {}}, (builder) => {
//   builder
//     .addCase('SET_ACTIVITES', (state: RootState, action) => {
//       state.activities = action.payload;
//     })
// })
type activitiesStateType = {
  [key: string]: {status: boolean, parks: string[]};
}

const initialState: activitiesStateType = {};

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities: (state: activitiesStateType, action: PayloadAction<{name: string, parks: string[]}[]>) => {
      action.payload.forEach(activity => {
        state[activity.name] = {status: false, parks: activity.parks};
      })
    },
    toggleActivity: (state: activitiesStateType, action: PayloadAction<{activity: string, status: boolean}>) => {
      state[action.payload.activity].status = action.payload.status;
    }
  }
})

// export const parksByActivitySlice = createSlice({
//   name: 'parksByActivity',
//   initialState
// })

export const {
  setActivities,
  toggleActivity
} = activitiesSlice.actions;

export default activitiesSlice.reducer;
