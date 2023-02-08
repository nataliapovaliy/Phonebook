const { createSlice } = require("@reduxjs/toolkit");

const sliceFilter = createSlice({
    name: 'contact/filter',
    initialState: '',

    reducers: {
        filterSlice(state, action){
            return action.payload
        },
    }
})

export const { filterSlice } = sliceFilter.actions;       // для передачи экшена
export const reducerFilter = sliceFilter.reducer;        // для stor