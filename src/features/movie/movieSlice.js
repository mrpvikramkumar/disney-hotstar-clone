import {createSlice} from '@reduxjs/toolkit';


const initialState={
recommended:null,
newDisney:null,
original:null,
trending:null,
}

const movieSlice =  createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommended=action.payload.recommended
            state.newDisney = action.payload.newDisney
            state.original= action.payload.original
            state.trending=action.payload.trending
        },
    },
})

export const {setMovies} =movieSlice.actions

export const selectRecommend = (state)=> state.movie.recommend
export const selectNewDisney = (state)=> state.movie.NewDisney
export const selectOriginal = (state)=> state.movie.Original
export const selectTrending = (state)=> state.movie.Trending

export default movieSlice.reducer;