const { createSlice } = require("@reduxjs/toolkit");

const sliceFilter = createSlice({
    name: 'contact/filter',
    initialState: '',

    reducers: {
        filterSlice(state, action){
            state = action.payload
        },
    }
})

export const reducerFilter = sliceFilter.reducer;