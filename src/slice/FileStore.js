import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFile = createAsyncThunk(
    'getFile',
    async () => {
        const {data} = await axios.get('https://dvkn.link/api/v1/test/files?', {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA5ODQ2NTUsIm5iZiI6MTY1MDk4NDY1NSwianRpIjoiOWZmYzlkMGItNTQ0ZC00YzY3LTk0MTEtYmRhNjE0ODRlMWI4IiwiZXhwIjoxNjUzNTc2NjU1LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpc19hZG1pbiI6ZmFsc2V9fQ.bubgVP8kD99o8aGbRZD26mf_Qh7w4JaQQ1_ZNpuBNLQ`
            }
        })
        return data
    }
)

const FileSlice = createSlice({
    name:'file',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getFile.fulfilled, (state, {payload}) => {
            state.value = payload
        })
    }
})

export default FileSlice.reducer