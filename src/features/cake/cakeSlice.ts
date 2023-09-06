import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    numofCakes: number;
};

const initialState: InitialState = {
    numofCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofCakes--;
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numofCakes += action.payload;
        },
    },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
