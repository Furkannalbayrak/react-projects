
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react'

const initialState = {
    user: [],
    userRepos: [],
    userEvents: [],
    loading: false,
    error: null,
}

export const getUser = createAsyncThunk('users', async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
})

export const getUserRepos = createAsyncThunk('usersRepos', async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`)
    return response.data
})

export const getUserEvent = createAsyncThunk('usersEvent', async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/events`)
    return response.data
})

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = false;
        })
        builder.addCase(getUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = true;
        })

        builder.addCase(getUserRepos.fulfilled, (state, action) => {
            state.userRepos = action.payload;
        })

        builder.addCase(getUserEvent.fulfilled, (state, action) => {
            state.userEvents = action.payload;
        })
    }
})

export const { } = githubSlice.actions

export default githubSlice.reducer