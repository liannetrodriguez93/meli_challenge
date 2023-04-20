import { createSlice } from '@reduxjs/toolkit';

export interface FilterBarState {
  open: boolean;
}

const initialState = {
  open: false,
};

const filterBarSlice = createSlice({
  name: 'filterBarSlice',
  initialState,
  reducers: {
    setOpenFilterBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setOpenFilterBar } = filterBarSlice.actions;

export default filterBarSlice.reducer;
