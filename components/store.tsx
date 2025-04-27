import { createSlice, configureStore } from '@reduxjs/toolkit'

const goalSlice = createSlice({
    name:'goal',
    initialState:{
        value:0
    },
    reducers:{
        incremented: state=>{
            state.value+=1
        },
        decremented: state=>{
            state.value-=1
        }
    }
})

export const {incremented,decremented} = goalSlice.actions

const store = configureStore({
    reducer:goalSlice.reducer
})

store.subscribe(()=>console.log(store.getState()))
// =1
store.dispatch(incremented())
//2 
store.dispatch(incremented())
// 1 after decrementing
store.dispatch(decremented())