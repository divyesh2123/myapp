import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : [],
    status:''
}

export const getPosts = createAsyncThunk('posts/getPosts', async(arg,{dispatch, getState}) => {
    const { posts } = getState();
    console.log(arg);
    return fetch(
                `https://jsonplaceholder.typicode.com/posts`
               ).then(res => res.json());
               
})

const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers  : {  
        [getPosts.pending]: (state, action) => {
        state.status = 'loading';
      },
    [getPosts.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.status = 'success';
      },
     [getPosts.rejected]: (state, action) => {
        state.status = 'failed';
      }
      
  

  }
    
  });

export const {} = userSlice.actions

export default userSlice.reducer