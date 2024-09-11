import { createSlice } from "@reduxjs/toolkit"

interface CouterState {
    value: number
}

const initialState: CouterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer